var b2PrismaticJoint_EnableLimit =
  Module['_b2PrismaticJoint_EnableLimit'];
var b2PrismaticJoint_EnableMotor =
  Module['_b2PrismaticJoint_EnableMotor'];
var b2PrismaticJoint_GetJointTranslation =
  Module['_b2PrismaticJoint_GetJointTranslation'];
var b2PrismaticJoint_GetMotorSpeed =
  Module['_b2PrismaticJoint_GetMotorSpeed'];
var b2PrismaticJoint_GetMotorForce =
  Module['_b2PrismaticJoint_GetMotorForce'];
var b2PrismaticJoint_IsLimitEnabled =
  Module['_b2PrismaticJoint_IsLimitEnabled'];
var b2PrismaticJoint_IsMotorEnabled =
  Module['_b2PrismaticJoint_IsMotorEnabled'];
var b2PrismaticJoint_SetMotorSpeed =
  Module['_b2PrismaticJoint_SetMotorSpeed'];

/**@constructor*/
function b2PrismaticJoint(def) {
  this.ptr = null;
  this.next = null;
}

b2PrismaticJoint.prototype = new b2Joint;

b2PrismaticJoint.prototype.EnableLimit = function(flag) {
  return b2PrismaticJoint_EnableLimit(this.ptr, flag);
};

b2PrismaticJoint.prototype.EnableMotor = function(flag) {
  return b2PrismaticJoint_EnableMotor(this.ptr, flag);
};

b2PrismaticJoint.prototype.GetJointTranslation = function() {
  return b2PrismaticJoint_GetJointTranslation(this.ptr);
};

b2PrismaticJoint.prototype.GetMotorSpeed = function() {
  return b2PrismaticJoint_GetMotorSpeed(this.ptr);
};

b2PrismaticJoint.prototype.GetMotorForce = function(hz) {
  return b2PrismaticJoint_GetMotorForce(this.ptr, hz);
};

b2PrismaticJoint.prototype.IsLimitEnabled = function() {
  return b2PrismaticJoint_IsLimitEnabled(this.ptr);
};

b2PrismaticJoint.prototype.IsMotorEnabled = function() {
  return b2PrismaticJoint_IsMotorEnabled(this.ptr);
};

b2PrismaticJoint.prototype.GetMotorEnabled = function() {
  return b2PrismaticJoint_IsMotorEnabled(this.ptr);
};

b2PrismaticJoint.prototype.SetMotorSpeed = function(speed) {
  return b2PrismaticJoint_SetMotorSpeed(this.ptr, speed);
};


var b2PrismaticJointDef_Create = Module['_b2PrismaticJointDef_Create'];

var b2PrismaticJointDef_InitializeAndCreate = Module['_b2PrismaticJointDef_InitializeAndCreate'];

/**@constructor*/
function b2PrismaticJointDef() {
  // joint def
  this.bodyA = null;
  this.bodyB = null;
  this.collideConnected = false;

  // prismatic joint def
  this.enableLimit = false;
  this.enableMotor = false;
  this.localAnchorA = new b2Vec2();
  this.localAnchorB = new b2Vec2();
  this.localAxisA = new b2Vec2(1, 0);
  this.lowerTranslation = 0;
  this.maxMotorForce = 0;
  this.motorSpeed = 0;
  this.referenceAngle = 0;
  this.upperTranslation = 0;
}

b2PrismaticJointDef.prototype.Create = function(world) {
  var prismaticJoint = new b2PrismaticJoint(this);
  prismaticJoint.ptr = b2PrismaticJointDef_Create(
    world.ptr,
    // joint def
    this.bodyA.ptr, this.bodyB.ptr, this.collideConnected,
    //prismatic joint def
    this.enableLimit, this.enableMotor, this.localAnchorA.x,
    this.localAnchorA.y, this.localAnchorB.x, this.localAnchorB.y,
    this.localAxisA.x, this.localAxisA.y, this.lowerTranslation,
    this.maxMotorForce, this.motorSpeed, this.referenceAngle,
    this.upperTranslation);
  return prismaticJoint;
};

b2PrismaticJointDef.prototype.InitializeAndCreate  = function(bodyA, bodyB, anchor, axis) {
  this.bodyA = bodyA;
  this.bodyB = bodyB;
  var prismaticJoint = new b2PrismaticJoint(this);
  prismaticJoint.ptr = b2PrismaticJointDef_InitializeAndCreate(
    world.ptr,
    // InitializeArgs
    this.bodyA.ptr, this.bodyB.ptr, anchor.x,
    anchor.y, axis.x, axis.y,
    // joint def
    this.collideConnected,
    // prismatic joint def
    this.enableLimit, this.enableMotor, this.lowerTranslation,
    this.maxMotorForce, this.motorSpeed, this.upperTranslation);
  b2World._Push(prismaticJoint, world.joints);
  return prismaticJoint;
};
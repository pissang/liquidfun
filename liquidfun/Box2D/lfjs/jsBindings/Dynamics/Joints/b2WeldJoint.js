var b2WeldJointDef_Create = Module['_b2WeldJointDef_Create'];

var b2WeldJointDef_InitializeAndCreate = Module['_b2WeldJointDef_InitializeAndCreate'];

/** @constructor */
function b2WeldJointDef() {
  // joint def
  this.bodyA = null;
  this.bodyB = null;
  this.collideConnected = false;

  // Weld joint def
  this.dampingRatio = 0;
  this.frequencyHz = 0;
  this.localAnchorA = new b2Vec2();
  this.localAnchorB = new b2Vec2();
  this.referenceAngle = 0;
}

b2WeldJointDef.prototype.Create = function(world) {
  var weldJoint = new b2WeldJoint(this);
  weldJoint.ptr = b2WeldJointDef_Create(
    world.ptr,
    // joint def
    this.bodyA.ptr, this.bodyB.ptr, this.collideConnected,
    //Weld joint def
    this.dampingRatio, this.frequencyHz, this.localAnchorA.x,
    this.localAnchorA.y, this.localAnchorB.x, this.localAnchorB.y,
    this.referenceAngle);
  return weldJoint;
};

b2WeldJointDef.prototype.InitializeAndCreate  = function(bodyA, bodyB, anchor) {
  this.bodyA = bodyA;
  this.bodyB = bodyB;
  var weldJoint = new b2WeldJoint(this);
  weldJoint.ptr = b2WeldJointDef_InitializeAndCreate(
    world.ptr,
    // InitializeArgs
    this.bodyA.ptr, this.bodyB.ptr, anchor.x,
    anchor.y,
    // joint def
    this.collideConnected,
    //Weld joint def
    this.dampingRatio, this.frequencyHz);
  b2World._Push(weldJoint, world.joints);
  return weldJoint;
};

/** @constructor */
function b2WeldJoint(def) {
  this.bodyA = def.bodyA;
  this.bodyB = def.bodyB;
  this.next = null;
  this.ptr = null;
}
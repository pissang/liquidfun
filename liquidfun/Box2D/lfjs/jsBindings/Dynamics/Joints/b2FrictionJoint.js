var b2FrictionJointDef_Create = Module['_b2FrictionJointDef_Create'];

var b2FrictionJointDef_InitializeAndCreate = Module['_b2FrictionJointDef_InitializeAndCreate'];

function b2FrictionJointDef() {
  // joint def
  this.bodyA = null;
  this.bodyB = null;
  this.collideConnected = false;

  // friction joint def
  this.localAnchorA = new b2Vec2();
  this.localAnchorB = new b2Vec2();
  this.maxForce = 0;
  this.maxTorque = 0;
  this.userData = null;
}

b2FrictionJointDef.prototype.Create = function(world) {
  var frictionJoint = new b2FrictionJoint(this);
  frictionJoint.ptr = b2FrictionJointDef_Create(
    world.ptr,
    // joint def
    this.bodyA.ptr, this.bodyB.ptr, this.collideConnected,
    //friction joint def
    this.localAnchorA.x, this.localAnchorA.y, this.localAnchorB.x,
    this.localAnchorB.y, this.maxForce, this.maxTorque);
  return frictionJoint;
};

b2FrictionJointDef.prototype.InitializeAndCreate  = function(bodyA, bodyB, anchor) {
  this.bodyA = bodyA;
  this.bodyB = bodyB;
  var frictionJoint = new b2FrictionJoint(this);
  frictionJoint.ptr = b2FrictionJointDef_InitializeAndCreate(
    world.ptr,
    // InitializeArgs
    this.bodyA.ptr, this.bodyB.ptr, anchor.x,
    anchor.y,
    // joint def
    this.collideConnected,
    // friction joint def
    this.maxForce, this.maxTorque);
  b2World._Push(frictionJoint, world.joints);
  return frictionJoint;
};

function b2FrictionJoint(def) {
  this.bodyA = def.bodyA;
  this.bodyB = def.bodyB;
  this.ptr = null;
  this.next = null;
}
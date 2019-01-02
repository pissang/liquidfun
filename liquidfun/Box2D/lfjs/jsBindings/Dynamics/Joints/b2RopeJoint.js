/**@constructor*/
function b2RopeJoint(def) {
  this.next = null;
  this.ptr = null;
}

var b2RopeJointDef_Create = Module['_b2RopeJointDef_Create'];

/**@constructor*/
function b2RopeJointDef() {
  // joint def
  this.bodyA = null;
  this.bodyB = null;
  this.collideConnected = false;

  // mouse joint def
  this.localAnchorA = new b2Vec2();
  this.localAnchorB = new b2Vec2();
  this.maxLength = 0;
}

b2RopeJointDef.prototype.Create = function(world) {
  var ropeJoint = new b2RopeJoint(this);
  ropeJoint.ptr = b2RopeJointDef_Create(
    world.ptr,
    // joint def
    this.bodyA.ptr, this.bodyB.ptr, this.collideConnected,
    //rope joint def
    this.localAnchorA.x, this.localAnchorA.y, this.localAnchorB.x,
    this.localAnchorB.y, this.maxLength);
  return ropeJoint;
};

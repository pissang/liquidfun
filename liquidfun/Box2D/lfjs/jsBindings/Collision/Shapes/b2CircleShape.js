var b2CircleShape_CreateFixture =
  Module['_b2CircleShape_CreateFixture'];

var b2CircleShape_CreateParticleGroup =
  Module['_b2CircleShape_CreateParticleGroup'];

var b2CircleShape_DestroyParticlesInShape =
  Module['_b2CircleShape_DestroyParticlesInShape'];

/**@constructor*/
function b2CircleShape() {
  this.position = new b2Vec2();
  this.radius = 0;
  this.type = b2Shape_Type_e_circle;
}

b2CircleShape.prototype._CreateFixture = function(body, fixtureDef) {
  return b2CircleShape_CreateFixture(body.ptr,
    // fixture Def
    fixtureDef.density, fixtureDef.friction, fixtureDef.isSensor,
    fixtureDef.restitution, fixtureDef.userData,
    // filter def
    fixtureDef.filter.categoryBits, fixtureDef.filter.groupIndex, fixtureDef.filter.maskBits,
    // circle data
    this.position.x, this.position.y, this.radius);
};

b2CircleShape.prototype._CreateParticleGroup = function(particleSystem, pgd) {
  return b2CircleShape_CreateParticleGroup(
    particleSystem.ptr,
    // particle group def
    pgd.angle,  pgd.angularVelocity, pgd.color.r,
    pgd.color.g, pgd.color.b, pgd.color.a,
    pgd.flags, pgd.group.ptr, pgd.groupFlags,
    pgd.lifetime, pgd.linearVelocity.x, pgd.linearVelocity.y,
    pgd.position.x, pgd.position.y, pgd.positionData,
    pgd.particleCount, pgd.strength, pgd.stride,
    pgd.userData,
    // circle
    this.position.x, this.position.y, this.radius);
};

b2CircleShape.prototype._DestroyParticlesInShape = function(ps, xf) {
  return b2CircleShape_DestroyParticlesInShape(ps.ptr,
    // circle
    this.position.x, this.position.y, this.radius,
    // transform
    xf.p.x, xf.p.y, xf.q.s, xf.q.c);
};
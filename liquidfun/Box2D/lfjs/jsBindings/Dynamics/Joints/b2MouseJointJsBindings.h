#ifndef B2MOUSEJOINTJSBINDINGS_H
#define B2MOUSEJOINTJSBINDINGS_H

extern "C" {
void EMSCRIPTEN_KEEPALIVE b2MouseJoint_SetTarget(void* mouseJoint, double x, double y);

void* EMSCRIPTEN_KEEPALIVE b2MouseJointDef_Create(
    void* world,
    // joint def
    void* bodyA, void* bodyB, double collideConnected,
    // mouse joint def
    double dampingRatio, double frequencyHz, double maxForce,
    double targetX, double targetY);
}

#endif

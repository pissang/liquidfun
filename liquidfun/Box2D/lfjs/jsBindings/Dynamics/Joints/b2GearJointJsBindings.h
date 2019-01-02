#ifndef B2GEARJOINTJSBINDINGS_H
#define B2GEARJOINTJSBINDINGS_H

extern "C" {
double EMSCRIPTEN_KEEPALIVE b2GearJoint_GetRatio(void* joint);

void* EMSCRIPTEN_KEEPALIVE b2GearJointDef_Create(
    void* world,
    // jointDef
    void* bodyA, void* bodyB, double collideConnected,
    // gear joint def
    void* joint1, void* joint2, double ratio);
}

#endif

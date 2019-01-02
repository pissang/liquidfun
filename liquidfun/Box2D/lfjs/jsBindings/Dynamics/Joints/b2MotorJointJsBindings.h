#ifndef B2MOTORJOINTJSBINDINGS_H
#define B2MOTORJOINTJSBINDINGS_H

extern "C" {
void EMSCRIPTEN_KEEPALIVE b2MotorJoint_SetAngularOffset(void* motorJoint, double angle);
void EMSCRIPTEN_KEEPALIVE b2MotorJoint_SetLinearOffset(void* motorJoint, double x, double y);

void* EMSCRIPTEN_KEEPALIVE b2MotorJointDef_Create(
    void* world,
    // joint def
    void* bodyA, void* bodyB, double collideConnected,
    // motorJointDef
    double angularOffset, double correctionFactor, double linearOffsetX,
    double linearOffsetY, double maxForce, double maxTorque);

void* EMSCRIPTEN_KEEPALIVE b2MotorJointDef_InitializeAndCreate(
    void* world,
    //initialize args
    void* bodyA, void* bodyB,
    // joint def
    double collideConnected,
    // motorjoint def
    double correctionFactor, double maxForce, double maxTorque);
}

#endif

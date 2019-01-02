#ifndef B2PRISMATICJOINTJSBINDINGS_H
#define B2PRISMATICJOINTJSBINDINGS_H

extern "C" {
void EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_EnableLimit(void* joint, double flag);
void EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_EnableMotor(void* joint, double flag);
double EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_GetJointTranslation(void* joint);
double EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_GetMotorSpeed(void* joint);
double EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_GetMotorForce(void* joint, double hz);
double EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_IsLimitEnabled(void* joint);
double EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_IsMotorEnabled(void* joint);
void EMSCRIPTEN_KEEPALIVE b2PrismaticJoint_SetMotorSpeed(void* joint, double speed);

void* EMSCRIPTEN_KEEPALIVE b2PrismaticJointDef_Create(
    void* world,
    // joint def
    void* bodyA, void* bodyB, double collideConnected,
    // prismatic joint def
    double enableLimit, double enableMotor, double localAnchorAx,
    double localAnchorAy, double localAnchorBx, double localAnchorBy,
    double localAxisAx, double localAxisAy, double lowerTranslation,
    double maxMotorForce, double motorSpeed, double referenceAngle,
    double upperTranslation);

void* EMSCRIPTEN_KEEPALIVE b2PrismaticJointDef_InitializeAndCreate(
    void* world,
    void* bodyA, void* bodyB, double anchorX, double anchorY, double axisX,
    double axisY,
    //joint def
    double collideConnected,
    //prismatic joint def
    double enableLimit, double enableMotor, double lowerTranslation,
    double maxMotorForce, double motorSpeed, double upperTranslation);
}

#endif

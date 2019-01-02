#ifndef B2PARTICLEGROUP_H
#define B2PARTICLEGROUP_H

extern "C" {
void EMSCRIPTEN_KEEPALIVE b2ParticleGroup_ApplyForce(
    void* particleGroup, double forceX, double forceY);
void EMSCRIPTEN_KEEPALIVE b2ParticleGroup_ApplyLinearImpulse(
    void* particleGroup, double impulseX, double impulseY);
void EMSCRIPTEN_KEEPALIVE b2ParticleGroup_DestroyParticles(void* particleGroup, double flag);
double EMSCRIPTEN_KEEPALIVE b2ParticleGroup_GetBufferIndex(void* particleGroup);
double EMSCRIPTEN_KEEPALIVE b2ParticleGroup_GetParticleCount(void* particleGroup);
}

#endif

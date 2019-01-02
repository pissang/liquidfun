#ifndef B2JOINTJSBINDINGS_H
#define B2JOINTJSBINDINGS_H

extern "C"  {
void* EMSCRIPTEN_KEEPALIVE b2Joint_GetBodyA(void* joint);
void* EMSCRIPTEN_KEEPALIVE b2Joint_GetBodyB(void* joint);
}

#endif

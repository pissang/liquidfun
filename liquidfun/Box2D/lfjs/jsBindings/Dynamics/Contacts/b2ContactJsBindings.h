#ifndef B2CONTACTJSBINDINGS_H
#define B2CONTACTJSBINDINGS_H

extern "C" {
void* EMSCRIPTEN_KEEPALIVE b2Contact_GetManifold(void* contact);
void* EMSCRIPTEN_KEEPALIVE b2Contact_GetWorldManifold(void* contact);
}
#endif

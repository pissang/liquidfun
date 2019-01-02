#ifndef B2FIXTUREJSBINDINGS_H
#define B2FIXTUREJSBINDINGS_H

extern "C" {
double EMSCRIPTEN_KEEPALIVE b2Fixture_TestPoint(void* fixture, double x, double y);
void EMSCRIPTEN_KEEPALIVE b2Fixture_Refilter(void* fixture);
}
#endif

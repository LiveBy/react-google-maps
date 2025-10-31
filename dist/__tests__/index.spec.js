describe("react-google-maps module (index.js)", () => {
  const {
    __esModule: e,
    default: t,
    withScriptjs: o,
    withGoogleMap: i,
    GoogleMap: n,
    Circle: d,
    Marker: c,
    Polyline: p,
    Polygon: a,
    Rectangle: f,
    InfoWindow: r,
    OverlayView: x,
    DirectionsRenderer: l,
    FusionTablesLayer: B,
    KmlLayer: D,
    TrafficLayer: s,
    BicyclingLayer: u,
    StreetViewPanorama: y
  } = require("../");
  it("should be an ES module", () => {
    expect(e).toBe(!0);
  }), it("should have no default exported", () => {
    expect(t).toBeUndefined();
  }), it("should have name exports for basic components", () => {
    expect(o).toBeDefined(), expect(i).toBeDefined(), expect(n).toBeDefined(), expect(d).toBeDefined(), expect(c).toBeDefined(), expect(p).toBeDefined(), expect(a).toBeDefined(), expect(f).toBeDefined(), expect(r).toBeDefined(), expect(x).toBeDefined(), expect(l).toBeDefined(), expect(B).toBeDefined(), expect(D).toBeDefined(), expect(s).toBeDefined(), expect(u).toBeDefined(), expect(y).toBeDefined();
  });
});

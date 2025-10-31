var d = Object.defineProperty;
var u = (t, e, n) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var i = (t, e, n) => (u(t, typeof e != "symbol" ? e + "" : e, n), n);
import { i as g } from "../../browser-fe3e0b83.js";
import y from "react";
import { P as o } from "../../index-e8d4cd90.js";
import { construct as M, componentDidMount as f, componentDidUpdate as C, componentWillUnmount as h } from "../../utils/MapChildHelper.js";
import { M as l, e as p } from "../../constants-4d431d90.js";
const a = class a extends y.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
   */
  constructor(e, n) {
    super(e, n), g(
      google.maps.drawing,
      'Did you include "libraries=drawing" in the URL?'
    );
    const r = new google.maps.drawing.DrawingManager();
    M(a.propTypes, m, this.props, r), r.setMap(this.context[l]), this.state = {
      [p]: r
    };
  }
  componentDidMount() {
    f(this, this.state[p], c);
  }
  componentDidUpdate(e) {
    C(
      this,
      this.state[p],
      c,
      m,
      e
    );
  }
  componentWillUnmount() {
    h(this);
    const e = this.state[p];
    e && e.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Returns the `DrawingManager`'s drawing mode.
   * @type OverlayTypeDrawingManager
   * @public
   */
  getDrawingMode() {
    return this.state[p].getDrawingMode();
  }
};
i(a, "propTypes", {
  /**
   * @type OverlayType
   */
  defaultDrawingMode: o.any,
  /**
   * @type DrawingManagerOptions
   */
  defaultOptions: o.any,
  /**
   * @type OverlayType
   */
  drawingMode: o.any,
  /**
   * @type DrawingManagerOptions
   */
  options: o.any,
  /**
   * function
   */
  onCircleComplete: o.func,
  /**
   * function
   */
  onMarkerComplete: o.func,
  /**
   * function
   */
  onOverlayComplete: o.func,
  /**
   * function
   */
  onPolygonComplete: o.func,
  /**
   * function
   */
  onPolylineComplete: o.func,
  /**
   * function
   */
  onRectangleComplete: o.func
}), i(a, "contextTypes", {
  [l]: o.object
});
let s = a;
const c = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
}, m = {
  drawingMode(t, e) {
    t.setDrawingMode(e);
  },
  options(t, e) {
    t.setOptions(e);
  }
};
export {
  s as DrawingManager,
  s as default
};

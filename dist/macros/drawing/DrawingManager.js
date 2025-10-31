var m = Object.defineProperty;
var d = (o, e, t) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var r = (o, e, t) => (d(o, typeof e != "symbol" ? e + "" : e, t), t);
import { i as h } from "../../browser-fe3e0b83.js";
import u from "react";
import { P as g } from "../../index-e8d4cd90.js";
import { construct as M, componentDidMount as y, componentDidUpdate as f, componentWillUnmount as C } from "../../utils/MapChildHelper.js";
import { M as l, e as p } from "../../constants-4d431d90.js";
const U = `{
  "eventMapOverrides": {
    "onCircleComplete": "circlecomplete",
    "onMarkerComplete": "markercomplete",
    "onOverlayComplete": "overlaycomplete",
    "onPolygonComplete": "polygoncomplete",
    "onPolylineComplete": "polylinecomplete",
    "onRectangleComplete": "rectanglecomplete"
  },
  "getInstanceFromComponent": "this.state[DRAWING_MANAGER]"
}`, n = class n extends u.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
   */
  constructor(e, t) {
    super(e, t), h(
      google.maps.drawing,
      'Did you include "libraries=drawing" in the URL?'
    );
    const s = new google.maps.drawing.DrawingManager();
    M(n.propTypes, c, this.props, s), s.setMap(this.context[l]), this.state = {
      [p]: s
    };
  }
  componentDidMount() {
    y(this, this.state[p], a);
  }
  componentDidUpdate(e) {
    f(
      this,
      this.state[p],
      a,
      c,
      e
    );
  }
  componentWillUnmount() {
    C(this);
    const e = this.state[p];
    e && e.setMap(null);
  }
  render() {
    return !1;
  }
};
r(n, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), r(n, "contextTypes", {
  [l]: g.object
});
let i = n;
const a = {}, c = {};
export {
  i as DrawingManager,
  U as __jscodeshiftPlaceholder__,
  i as default
};

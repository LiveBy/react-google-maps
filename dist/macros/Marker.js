var M = Object.defineProperty;
var R = (s, t, o) => t in s ? M(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[t] = o;
var i = (s, t, o) => (R(s, typeof t != "symbol" ? t + "" : t, o), o);
import { jsx as f } from "react/jsx-runtime";
import C from "react";
import { P as c } from "../index-e8d4cd90.js";
import { construct as g, componentDidMount as x, componentDidUpdate as D, componentWillUnmount as b } from "../utils/MapChildHelper.js";
import { M as m, b as p, A as a, d as n } from "../constants-4d431d90.js";
const P = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[MARKER]"
}`, e = class e extends C.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  constructor(t, o) {
    super(t, o);
    const r = new google.maps.Marker();
    g(e.propTypes, h, this.props, r);
    const d = this.context[p];
    d ? d.addMarker(r, !!this.props.noRedraw) : r.setMap(this.context[m]), this.state = {
      [n]: r
    };
  }
  getChildContext() {
    return {
      [a]: this.context[a] || this.state[n]
    };
  }
  componentDidMount() {
    x(this, this.state[n], u);
  }
  componentDidUpdate(t) {
    D(
      this,
      this.state[n],
      u,
      h,
      t
    );
  }
  componentWillUnmount() {
    b(this);
    const t = this.state[n];
    if (t) {
      const o = this.context[p];
      o && o.removeMarker(t, !!this.props.noRedraw), t.setMap(null);
    }
  }
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ f("div", { children: t });
  }
};
i(e, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: c.bool
}), i(e, "contextTypes", {
  [m]: c.object,
  [p]: c.object
}), i(e, "childContextTypes", {
  [a]: c.object
});
let l = e;
const u = {}, h = {};
export {
  l as Marker,
  P as __jscodeshiftPlaceholder__,
  l as default
};

var u = Object.defineProperty;
var l = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (l(e, typeof t != "symbol" ? t + "" : t, o), o);
import d from "react";
import { P as h } from "../index-e8d4cd90.js";
import { construct as M, componentDidMount as f, componentDidUpdate as g, componentWillUnmount as D } from "../utils/MapChildHelper.js";
import { M as a, a as n } from "../constants-e344191b.js";
const k = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[POLYGON]"
}`, s = class s extends d.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  constructor(t, o) {
    super(t, o);
    const p = new google.maps.Polygon();
    M(s.propTypes, m, this.props, p), p.setMap(this.context[a]), this.state = {
      [n]: p
    };
  }
  componentDidMount() {
    f(this, this.state[n], i);
  }
  componentDidUpdate(t) {
    g(
      this,
      this.state[n],
      i,
      m,
      t
    );
  }
  componentWillUnmount() {
    D(this);
    const t = this.state[n];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
};
r(s, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), r(s, "contextTypes", {
  [a]: h.object
});
let c = s;
const i = {}, m = {};
export {
  c as Polygon,
  k as __jscodeshiftPlaceholder__,
  c as default
};

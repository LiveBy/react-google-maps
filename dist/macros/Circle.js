var u = Object.defineProperty;
var l = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var p = (e, t, o) => (l(e, typeof t != "symbol" ? t + "" : t, o), o);
import d from "react";
import { P as h } from "../index-e8d4cd90.js";
import { construct as M, componentDidMount as f, componentDidUpdate as g, componentWillUnmount as D } from "../utils/MapChildHelper.js";
import { M as c, C as n } from "../constants-4d431d90.js";
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
  "getInstanceFromComponent": "this.state[CIRCLE]"
}`, s = class s extends d.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  constructor(t, o) {
    super(t, o);
    const r = new google.maps.Circle();
    M(s.propTypes, m, this.props, r), r.setMap(this.context[c]), this.state = {
      [n]: r
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
p(s, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), p(s, "contextTypes", {
  [c]: h.object
});
let a = s;
const i = {}, m = {};
export {
  a as Circle,
  k as __jscodeshiftPlaceholder__,
  a as default
};

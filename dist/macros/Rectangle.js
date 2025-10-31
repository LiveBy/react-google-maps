var u = Object.defineProperty;
var l = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var p = (e, t, o) => (l(e, typeof t != "symbol" ? t + "" : t, o), o);
import d from "react";
import { P as h } from "../index-e8d4cd90.js";
import { construct as M, componentDidMount as f, componentDidUpdate as g, componentWillUnmount as D } from "../utils/MapChildHelper.js";
import { M as a, R as n } from "../constants-e344191b.js";
const U = `{
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
  "getInstanceFromComponent": "this.state[RECTANGLE]"
}`, s = class s extends d.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  constructor(t, o) {
    super(t, o);
    const r = new google.maps.Rectangle();
    M(s.propTypes, m, this.props, r), r.setMap(this.context[a]), this.state = {
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
  [a]: h.object
});
let c = s;
const i = {}, m = {};
export {
  c as Rectangle,
  U as __jscodeshiftPlaceholder__,
  c as default
};

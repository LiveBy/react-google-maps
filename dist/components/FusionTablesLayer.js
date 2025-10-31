var u = Object.defineProperty;
var d = (o, t, n) => t in o ? u(o, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[t] = n;
var c = (o, t, n) => (d(o, typeof t != "symbol" ? t + "" : t, n), n);
import f from "react";
import { P as e } from "../index-e8d4cd90.js";
import { construct as h, componentDidMount as M, componentDidUpdate as y, componentWillUnmount as T } from "../utils/MapChildHelper.js";
import { M as a, F as p } from "../constants-4d431d90.js";
const s = class s extends f.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
   */
  constructor(t, n) {
    super(t, n);
    const i = new google.maps.FusionTablesLayer();
    h(
      s.propTypes,
      l,
      this.props,
      i
    ), i.setMap(this.context[a]), this.state = {
      [p]: i
    };
  }
  componentDidMount() {
    M(this, this.state[p], m);
  }
  componentDidUpdate(t) {
    y(
      this,
      this.state[p],
      m,
      l,
      t
    );
  }
  componentWillUnmount() {
    T(this);
    const t = this.state[p];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
};
c(s, "propTypes", {
  /**
   * @type FusionTablesLayerOptions
   */
  defaultOptions: e.any,
  /**
   * @type FusionTablesLayerOptions
   */
  options: e.any,
  /**
   * function
   */
  onClick: e.func
}), c(s, "contextTypes", {
  [a]: e.object
});
let r = s;
const m = {
  onClick: "click"
}, l = {
  options(o, t) {
    o.setOptions(t);
  }
};
export {
  r as FusionTablesLayer,
  r as default
};

var d = Object.defineProperty;
var l = (o, t, s) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var i = (o, t, s) => (l(o, typeof t != "symbol" ? t + "" : t, s), s);
import h from "react";
import { P as a } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as M, componentDidUpdate as y, componentWillUnmount as x } from "../utils/MapChildHelper.js";
import { M as r, T as n } from "../constants-e344191b.js";
const e = class e extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
   */
  constructor(t, s) {
    super(t, s);
    const p = new google.maps.TrafficLayer();
    f(e.propTypes, u, this.props, p), p.setMap(this.context[r]), this.state = {
      [n]: p
    };
  }
  componentDidMount() {
    M(this, this.state[n], m);
  }
  componentDidUpdate(t) {
    y(
      this,
      this.state[n],
      m,
      u,
      t
    );
  }
  componentWillUnmount() {
    x(this);
    const t = this.state[n];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
};
i(e, "propTypes", {
  /**
   * @type TrafficLayerOptions
   */
  defaultOptions: a.any,
  /**
   * @type TrafficLayerOptions
   */
  options: a.any
}), i(e, "contextTypes", {
  [r]: a.object
});
let c = e;
const m = {}, u = {
  options(o, t) {
    o.setOptions(t);
  }
};
export {
  c as TrafficLayer,
  c as default
};

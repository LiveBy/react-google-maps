var u = Object.defineProperty;
var d = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (d(e, typeof t != "symbol" ? t + "" : t, o), o);
import l from "react";
import { P as h } from "../index-e8d4cd90.js";
import { construct as M, componentDidMount as f, componentDidUpdate as x, componentWillUnmount as y } from "../utils/MapChildHelper.js";
import { M as a, B as n } from "../constants-4d431d90.js";
const s = class s extends l.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
   */
  constructor(t, o) {
    super(t, o);
    const p = new google.maps.BicyclingLayer();
    M(s.propTypes, m, this.props, p), p.setMap(this.context[a]), this.state = {
      [n]: p
    };
  }
  componentDidMount() {
    f(this, this.state[n], c);
  }
  componentDidUpdate(t) {
    x(
      this,
      this.state[n],
      c,
      m,
      t
    );
  }
  componentWillUnmount() {
    y(this);
    const t = this.state[n];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
};
r(s, "propTypes", {}), r(s, "contextTypes", {
  [a]: h.object
});
let i = s;
const c = {}, m = {};
export {
  i as BicyclingLayer,
  i as default
};

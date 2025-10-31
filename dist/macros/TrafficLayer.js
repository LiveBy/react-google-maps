var l = Object.defineProperty;
var d = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var r = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import h from "react";
import { P as u } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as M, componentDidUpdate as _, componentWillUnmount as P } from "../utils/MapChildHelper.js";
import { M as a, T as n } from "../constants-e344191b.js";
const y = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[TRAFFIC_LAYER]"
}`, s = class s extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
   */
  constructor(t, e) {
    super(t, e);
    const p = new google.maps.TrafficLayer();
    f(s.propTypes, m, this.props, p), p.setMap(this.context[a]), this.state = {
      [n]: p
    };
  }
  componentDidMount() {
    M(this, this.state[n], i);
  }
  componentDidUpdate(t) {
    _(
      this,
      this.state[n],
      i,
      m,
      t
    );
  }
  componentWillUnmount() {
    P(this);
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
  [a]: u.object
});
let c = s;
const i = {}, m = {};
export {
  c as TrafficLayer,
  y as __jscodeshiftPlaceholder__,
  c as default
};

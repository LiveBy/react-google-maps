var d = Object.defineProperty;
var l = (o, t, e) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var r = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
import h from "react";
import { P as u } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as M, componentDidUpdate as R, componentWillUnmount as E } from "../utils/MapChildHelper.js";
import { M as a, D as n } from "../constants-4d431d90.js";
const x = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[DIRECTIONS_RENDERER]"
}`, s = class s extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  constructor(t, e) {
    super(t, e);
    const p = new google.maps.DirectionsRenderer();
    f(
      s.propTypes,
      m,
      this.props,
      p
    ), p.setMap(this.context[a]), this.state = {
      [n]: p
    };
  }
  componentDidMount() {
    M(this, this.state[n], i);
  }
  componentDidUpdate(t) {
    R(
      this,
      this.state[n],
      i,
      m,
      t
    );
  }
  componentWillUnmount() {
    E(this);
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
  c as DirectionsRenderer,
  x as __jscodeshiftPlaceholder__,
  c as default
};

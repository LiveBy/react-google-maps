var d = Object.defineProperty;
var l = (o, t, e) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var a = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
import h from "react";
import { P as u } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as M, componentDidUpdate as _, componentWillUnmount as P } from "../utils/MapChildHelper.js";
import { M as r, K as n } from "../constants-e344191b.js";
const L = `{
  "eventMapOverrides": {
    "onDefaultViewportChanged": "defaultviewport_changed"
  },
  "getInstanceFromComponent": "this.state[KML_LAYER]"
}`, s = class s extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  constructor(t, e) {
    super(t, e);
    const p = new google.maps.KmlLayer();
    f(s.propTypes, m, this.props, p), p.setMap(this.context[r]), this.state = {
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
a(s, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), a(s, "contextTypes", {
  [r]: u.object
});
let c = s;
const i = {}, m = {};
export {
  c as KmlLayer,
  L as __jscodeshiftPlaceholder__,
  c as default
};

var l = Object.defineProperty;
var u = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var a = (e, t, o) => (u(e, typeof t != "symbol" ? t + "" : t, o), o);
import { i as d } from "../../browser-fe3e0b83.js";
import h from "react";
import { P as M } from "../../index-e8d4cd90.js";
import { construct as f, componentDidMount as P, componentDidUpdate as v, componentWillUnmount as A } from "../../utils/MapChildHelper.js";
import { M as p, H as n } from "../../constants-e344191b.js";
const x = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[HEATMAP_LAYER]"
}`, s = class s extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  constructor(t, o) {
    super(t, o), d(
      google.maps.visualization,
      'Did you include "libraries=visualization" in the URL?'
    );
    const i = new google.maps.visualization.HeatmapLayer();
    f(s.propTypes, m, this.props, i), i.setMap(this.context[p]), this.state = {
      [n]: i
    };
  }
  componentDidMount() {
    P(this, this.state[n], c);
  }
  componentDidUpdate(t) {
    v(
      this,
      this.state[n],
      c,
      m,
      t
    );
  }
  componentWillUnmount() {
    A(this);
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
  [p]: M.object
});
let r = s;
const c = {}, m = {};
export {
  r as HeatmapLayer,
  x as __jscodeshiftPlaceholder__,
  r as default
};

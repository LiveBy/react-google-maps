var l = Object.defineProperty;
var d = (o, t, a) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[t] = a;
var p = (o, t, a) => (d(o, typeof t != "symbol" ? t + "" : t, a), a);
import { i as h } from "../../browser-fe3e0b83.js";
import f from "react";
import { P as s } from "../../index-e8d4cd90.js";
import { construct as y, componentDidMount as D, componentDidUpdate as M, componentWillUnmount as g } from "../../utils/MapChildHelper.js";
import { M as r, H as e } from "../../constants-4d431d90.js";
const n = class n extends f.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  constructor(t, a) {
    super(t, a), h(
      google.maps.visualization,
      'Did you include "libraries=visualization" in the URL?'
    );
    const i = new google.maps.visualization.HeatmapLayer();
    y(n.propTypes, u, this.props, i), i.setMap(this.context[r]), this.state = {
      [e]: i
    };
  }
  componentDidMount() {
    D(this, this.state[e], m);
  }
  componentDidUpdate(t) {
    M(
      this,
      this.state[e],
      m,
      u,
      t
    );
  }
  componentWillUnmount() {
    g(this);
    const t = this.state[e];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Returns the data points currently displayed by this heatmap.
   * @type MVCArray<LatLng|WeightedLocation>
   * @public
   */
  getData() {
    return this.state[e].getData();
  }
};
p(n, "propTypes", {
  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  defaultData: s.any,
  /**
   * @type HeatmapLayerOptions
   */
  defaultOptions: s.any,
  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  data: s.any,
  /**
   * @type HeatmapLayerOptions
   */
  options: s.any
}), p(n, "contextTypes", {
  [r]: s.object
});
let c = n;
const m = {}, u = {
  data(o, t) {
    o.setData(t);
  },
  options(o, t) {
    o.setOptions(t);
  }
};
export {
  c as HeatmapLayer,
  c as default
};

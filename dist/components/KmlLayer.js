var l = Object.defineProperty;
var g = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => (g(e, typeof t != "symbol" ? t + "" : t, o), o);
import h from "react";
import { P as n } from "../index-e8d4cd90.js";
import { construct as m, componentDidMount as f, componentDidUpdate as M, componentWillUnmount as x } from "../utils/MapChildHelper.js";
import { M as p, K as s } from "../constants-e344191b.js";
const a = class a extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  constructor(t, o) {
    super(t, o);
    const r = new google.maps.KmlLayer();
    m(a.propTypes, d, this.props, r), r.setMap(this.context[p]), this.state = {
      [s]: r
    };
  }
  componentDidMount() {
    f(this, this.state[s], c);
  }
  componentDidUpdate(t) {
    M(
      this,
      this.state[s],
      c,
      d,
      t
    );
  }
  componentWillUnmount() {
    x(this);
    const t = this.state[s];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Get the default viewport for the layer being displayed.
   * @type LatLngBounds
   * @public
   */
  getDefaultViewport() {
    return this.state[s].getDefaultViewport();
  }
  /**
   * Get the metadata associated with this layer, as specified in the layer markup.
   * @type KmlLayerMetadata
   * @public
   */
  getMetadata() {
    return this.state[s].getMetadata();
  }
  /**
   * Get the status of the layer, set once the requested document has loaded.
   * @type KmlLayerStatus
   * @public
   */
  getStatus() {
    return this.state[s].getStatus();
  }
  /**
   * Gets the URL of the KML file being displayed.
   * @type string
   * @public
   */
  getUrl() {
    return this.state[s].getUrl();
  }
  /**
   * Gets the z-index of the KML Layer.
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[s].getZIndex();
  }
};
i(a, "propTypes", {
  /**
   * @type KmlLayerOptions
   */
  defaultOptions: n.any,
  /**
   * @type string
   */
  defaultUrl: n.string,
  /**
   * @type number
   */
  defaultZIndex: n.number,
  /**
   * @type KmlLayerOptions
   */
  options: n.any,
  /**
   * @type string
   */
  url: n.string,
  /**
   * @type number
   */
  zIndex: n.number,
  /**
   * function
   */
  onDefaultViewportChanged: n.func,
  /**
   * function
   */
  onClick: n.func,
  /**
   * function
   */
  onStatusChanged: n.func
}), i(a, "contextTypes", {
  [p]: n.object
});
let u = a;
const c = {
  onDefaultViewportChanged: "defaultviewport_changed",
  onClick: "click",
  onStatusChanged: "status_changed"
}, d = {
  options(e, t) {
    e.setOptions(t);
  },
  url(e, t) {
    e.setUrl(t);
  },
  zIndex(e, t) {
    e.setZIndex(t);
  }
};
export {
  u as KmlLayer,
  u as default
};

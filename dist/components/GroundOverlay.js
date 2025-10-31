var d = Object.defineProperty;
var m = (o, t, n) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[t] = n;
var c = (o, t, n) => (m(o, typeof t != "symbol" ? t + "" : t, n), n);
import { w as h } from "../browser-000070b5.js";
import f from "react";
import { P as e } from "../index-e8d4cd90.js";
import { construct as g, componentDidMount as y, componentDidUpdate as b, componentWillUnmount as v } from "../utils/MapChildHelper.js";
import { M as i, G as s } from "../constants-e344191b.js";
const r = class r extends f.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  constructor(t, n) {
    super(t, n), h(
      !t.url || !t.bounds,
      `
For GroundOveray, url and bounds are passed in to constructor and are immutable
 after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (
 See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)
 Hence, use the corresponding two props provided by \`react-google-maps\`.
 They're prefixed with _default_ (defaultUrl, defaultBounds).

 In some cases, you'll need the GroundOverlay component to reflect the changes
 of url and bounds. You can leverage the React's key property to remount the
 component. Typically, just \`key={url}\` would serve your need.
 See https://github.com/tomchentw/react-google-maps/issues/655
`
    );
    const a = new google.maps.GroundOverlay(
      t.defaultUrl || t.url,
      t.defaultBounds || t.bounds
    );
    g(r.propTypes, p, this.props, a), a.setMap(this.context[i]), this.state = {
      [s]: a
    };
  }
  componentDidMount() {
    y(this, this.state[s], l);
  }
  componentDidUpdate(t) {
    b(
      this,
      this.state[s],
      l,
      p,
      t
    );
  }
  componentWillUnmount() {
    v(this);
    const t = this.state[s];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Gets the `LatLngBounds` of this overlay.
   * @type LatLngBoundsLatLngBounds
   * @public
   */
  getBounds() {
    return this.state[s].getBounds();
  }
  /**
   * Returns the opacity of this ground overlay.
   * @type number
   * @public
   */
  getOpacity() {
    return this.state[s].getOpacity();
  }
  /**
   * Gets the url of the projected image.
   * @type string
   * @public
   */
  getUrl() {
    return this.state[s].getUrl();
  }
};
c(r, "propTypes", {
  /**
   * @type string
   */
  defaultUrl: e.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   */
  defaultBounds: e.object,
  /**
   * @type string
   * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
   */
  url: e.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
   */
  bounds: e.object,
  /**
   * @type number
   */
  defaultOpacity: e.number,
  /**
   * @type number
   */
  opacity: e.number,
  /**
   * function
   */
  onDblClick: e.func,
  /**
   * function
   */
  onClick: e.func
}), c(r, "contextTypes", {
  [i]: e.object
});
let u = r;
const l = {
  onDblClick: "dblclick",
  onClick: "click"
}, p = {
  opacity(o, t) {
    o.setOpacity(t);
  }
};
export {
  u as GroundOverlay,
  u as default
};

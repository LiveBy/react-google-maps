var p = Object.defineProperty;
var m = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var c = (o, e, t) => (m(o, typeof e != "symbol" ? e + "" : e, t), t);
import { w as h } from "../browser-000070b5.js";
import f from "react";
import { P as n } from "../index-e8d4cd90.js";
import { construct as g, componentDidMount as y, componentDidUpdate as b, componentWillUnmount as v } from "../utils/MapChildHelper.js";
import { M as l, G as r } from "../constants-4d431d90.js";
const P = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick"
  },
  "getInstanceFromComponent": "this.state[GROUND_LAYER]"
}`, s = class s extends f.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  constructor(e, t) {
    super(e, t), h(
      !e.url || !e.bounds,
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
      e.defaultUrl || e.url,
      e.defaultBounds || e.bounds
    );
    g(s.propTypes, d, this.props, a), a.setMap(this.context[l]), this.state = {
      [r]: a
    };
  }
  componentDidMount() {
    y(this, this.state[r], u);
  }
  componentDidUpdate(e) {
    b(
      this,
      this.state[r],
      u,
      d,
      e
    );
  }
  componentWillUnmount() {
    v(this);
    const e = this.state[r];
    e && e.setMap(null);
  }
  render() {
    return !1;
  }
};
c(s, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * @type string
   */
  defaultUrl: n.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   */
  defaultBounds: n.object,
  /**
   * @type string
   * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
   */
  url: n.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
   */
  bounds: n.object
}), c(s, "contextTypes", {
  [l]: n.object
});
let i = s;
const u = {}, d = {};
export {
  i as GroundOverlay,
  P as __jscodeshiftPlaceholder__,
  i as default
};

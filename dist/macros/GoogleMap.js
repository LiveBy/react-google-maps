var c = Object.defineProperty;
var d = (n, t, o) => t in n ? c(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var s = (n, t, o) => (d(n, typeof t != "symbol" ? t + "" : t, o), o);
import { jsx as m } from "react/jsx-runtime";
import { i as u } from "../browser-fe3e0b83.js";
import l from "react";
import { P as r } from "../index-e8d4cd90.js";
import { construct as h, componentDidMount as M, componentDidUpdate as y, componentWillUnmount as f } from "../utils/MapChildHelper.js";
import { M as e } from "../constants-4d431d90.js";
const C = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMapTypeIdChanged": "maptypeid_changed",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onRightClick": "rightclick",
    "onTilesLoaded": "tilesloaded"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`;
class a extends l.PureComponent {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  fitBounds(...t) {
    return this.context[e].fitBounds(...t);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  panBy(...t) {
    return this.context[e].panBy(...t);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  panTo(...t) {
    return this.context[e].panTo(...t);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  panToBounds(...t) {
    return this.context[e].panToBounds(...t);
  }
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  constructor(t, o) {
    super(t, o), u(
      !!this.context[e],
      "Did you wrap <GoogleMap> component with withGoogleMap() HOC?"
    ), h(x.propTypes, i, this.props, this.context[e]);
  }
  componentDidMount() {
    M(this, this.context[e], p);
  }
  componentDidUpdate(t) {
    y(this, this.context[e], p, i, t);
  }
  componentWillUnmount() {
    f(this);
  }
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ m("div", { children: t });
  }
}
s(a, "displayName", "GoogleMap"), s(a, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: r.arrayOf(r.arrayOf(r.any))
}), s(a, "contextTypes", {
  [e]: r.object
});
const x = a, p = {}, i = {
  extraMapTypes(n, t) {
    t.forEach((o) => n.mapTypes.set(...o));
  }
};
export {
  x as GoogleMap,
  a as Map,
  C as __jscodeshiftPlaceholder__,
  a as default
};

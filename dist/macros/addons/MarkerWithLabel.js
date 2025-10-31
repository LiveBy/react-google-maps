var M = Object.defineProperty;
var R = (t, e, o) => e in t ? M(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var l = (t, e, o) => (R(t, typeof e != "symbol" ? e + "" : e, o), o);
import p from "react";
import { P as s } from "../../index-e8d4cd90.js";
import { m as f } from "../../markerwithlabel-72a56a5b.js";
import { R as E } from "../../index-87ad0b90.js";
import { construct as C, componentDidMount as g, componentDidUpdate as k, componentWillUnmount as v } from "../../utils/MapChildHelper.js";
import { M as m, b as i, f as r } from "../../constants-4d431d90.js";
const w = `{
  "KlassNameOverrride": "Marker",
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[MARKER_WITH_LABEL]"
}`, n = class n extends p.PureComponent {
  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  constructor(e, o) {
    super(e, o);
    const b = f(google.maps), a = new b();
    C(
      n.propTypes,
      u,
      this.props,
      a
    );
    const c = this.context[i];
    c ? c.addMarker(a, !!this.props.noRedraw) : a.setMap(this.context[m]), this.state = {
      [r]: a
    }, this.containerElement = document.createElement("div");
  }
  componentDidMount() {
    g(this, this.state[r], h), this.state[r].set("labelContent", this.containerElement);
  }
  componentDidUpdate(e) {
    k(
      this,
      this.state[r],
      h,
      u,
      e
    );
  }
  componentWillUnmount() {
    v(this);
    const e = this.state[r];
    if (e) {
      const o = this.context[i];
      o && o.removeMarker(e, !!this.props.noRedraw), e.setMap(null);
    }
  }
  render() {
    return !!this.containerElement && E.createPortal(
      p.Children.only(this.props.children),
      this.containerElement
    );
  }
};
l(n, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * It will be `MarkerWithLabel#labelContent`.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  children: s.node,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: s.object,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: s.string,
  /**
   * For `MarkerWithLabel`. This is for native JS style object, so you may
   * expect some React shorthands for inline styles not working here.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: s.object,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: s.bool,
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: s.bool
}), l(n, "defaultProps", {
  labelVisible: !0
}), l(n, "contextTypes", {
  [m]: s.object,
  [i]: s.object
});
let d = n;
const h = {}, u = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor(t, e) {
    t.set("labelAnchor", e);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass(t, e) {
    t.set("labelClass", e);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle(t, e) {
    t.set("labelStyle", e);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible(t, e) {
    t.set("labelVisible", e);
  }
};
export {
  d as MarkerWithLabel,
  w as __jscodeshiftPlaceholder__,
  d as default
};

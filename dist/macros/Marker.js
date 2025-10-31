import { jsx as u } from "react/jsx-runtime";
import { P as k } from "../index-e8d4cd90.js";
import R, { useContext as h, useRef as C, useState as g, useEffect as n } from "react";
import { construct as v, componentDidUpdate as _, componentDidMount as x } from "../utils/MapChildHelper.js";
import { M as D, b as E } from "../constants-e344191b.js";
import { MapContext as P } from "../withGoogleMap.js";
const O = `{
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
  "getInstanceFromComponent": "this.state[MARKER]"
}`;
function m(t) {
  const { children: d, noRedraw: s, ...w } = t, a = h(P) || {}, c = a[D], r = a[E], p = C(null), [e, M] = g(null);
  n(() => {
    const o = new google.maps.Marker();
    return v(m.propTypes, l, t, o), r ? r.addMarker(o, !!s) : c && o.setMap(c), p.current = o, M(o), () => {
      r && r.removeMarker(o, !!s), o.setMap(null);
    };
  }, []), n(() => {
    e && _(
      { props: t },
      e,
      i,
      l,
      {}
      // prevProps not tracked in this migration
    );
  }, [t, e]), n(() => {
    e && x({ props: t }, e, i);
  }, [e]);
  const f = R.createContext(null);
  return /* @__PURE__ */ u(f.Provider, { value: e, children: /* @__PURE__ */ u("div", { children: d }) });
}
m.propTypes = {
  __jscodeshiftPlaceholder__: null,
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: k.bool
};
const i = {}, l = {};
export {
  m as Marker,
  O as __jscodeshiftPlaceholder__,
  m as default
};

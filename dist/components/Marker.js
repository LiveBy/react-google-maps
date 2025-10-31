import { jsx as u } from "react/jsx-runtime";
import { P as n } from "../index-e8d4cd90.js";
import b, { useContext as m, useRef as k, useState as M, useEffect as c } from "react";
import { construct as y, componentDidUpdate as D, componentDidMount as x } from "../utils/MapChildHelper.js";
import { M as _, b as v } from "../constants-e344191b.js";
import { MapContext as R } from "../withGoogleMap.js";
function f(e) {
  const { children: a, noRedraw: l, ...I } = e, r = m(R) || {}, s = r[_], i = r[v], h = k(null), [o, C] = M(null);
  c(() => {
    const t = new google.maps.Marker();
    return y(f.propTypes, g, e, t), i ? i.addMarker(t, !!l) : s && t.setMap(s), h.current = t, C(t), () => {
      i && i.removeMarker(t, !!l), t.setMap(null);
    };
  }, []), c(() => {
    o && D(
      { props: e },
      o,
      d,
      g,
      {}
      // prevProps not tracked in this migration
    );
  }, [e, o]), c(() => {
    o && x({ props: e }, o, d);
  }, [o]);
  const p = b.createContext(null);
  return /* @__PURE__ */ u(p.Provider, { value: o, children: /* @__PURE__ */ u("div", { children: a }) });
}
f.propTypes = {
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: n.bool,
  /**
   * @type Animation
   */
  defaultAnimation: n.any,
  /**
   * @type boolean
   */
  defaultClickable: n.bool,
  /**
   * @type string
   */
  defaultCursor: n.string,
  /**
   * @type boolean
   */
  defaultDraggable: n.bool,
  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: n.any,
  /**
   * @type string|MarkerLabel
   */
  defaultLabel: n.any,
  /**
   * @type number
   */
  defaultOpacity: n.number,
  /**
   * @type MarkerOptions
   */
  defaultOptions: n.any,
  /**
   * @type MarkerPlace
   */
  defaultPlace: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: n.any,
  /**
   * @type MarkerShape
   */
  defaultShape: n.any,
  /**
   * @type string
   */
  defaultTitle: n.string,
  /**
   * @type boolean
   */
  defaultVisible: n.bool,
  /**
   * @type number
   */
  defaultZIndex: n.number,
  /**
   * @type Animation
   */
  animation: n.any,
  /**
   * @type boolean
   */
  clickable: n.bool,
  /**
   * @type string
   */
  cursor: n.string,
  /**
   * @type boolean
   */
  draggable: n.bool,
  /**
   * @type string|Icon|Symbol
   */
  icon: n.any,
  /**
   * @type string|MarkerLabel
   */
  label: n.any,
  /**
   * @type number
   */
  opacity: n.number,
  /**
   * @type MarkerOptions
   */
  options: n.any,
  /**
   * @type MarkerPlace
   */
  place: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  position: n.any,
  /**
   * @type MarkerShape
   */
  shape: n.any,
  /**
   * @type string
   */
  title: n.string,
  /**
   * @type boolean
   */
  visible: n.bool,
  /**
   * @type number
   */
  zIndex: n.number,
  /**
   * function
   */
  onDblClick: n.func,
  /**
   * function
   */
  onDragEnd: n.func,
  /**
   * function
   */
  onDragStart: n.func,
  /**
   * function
   */
  onMouseDown: n.func,
  /**
   * function
   */
  onMouseOut: n.func,
  /**
   * function
   */
  onMouseOver: n.func,
  /**
   * function
   */
  onMouseUp: n.func,
  /**
   * function
   */
  onRightClick: n.func,
  /**
   * function
   */
  onAnimationChanged: n.func,
  /**
   * function
   */
  onClick: n.func,
  /**
   * function
   */
  onClickableChanged: n.func,
  /**
   * function
   */
  onCursorChanged: n.func,
  /**
   * function
   */
  onDrag: n.func,
  /**
   * function
   */
  onDraggableChanged: n.func,
  /**
   * function
   */
  onFlatChanged: n.func,
  /**
   * function
   */
  onIconChanged: n.func,
  /**
   * function
   */
  onPositionChanged: n.func,
  /**
   * function
   */
  onShapeChanged: n.func,
  /**
   * function
   */
  onTitleChanged: n.func,
  /**
   * function
   */
  onVisibleChanged: n.func,
  /**
   * function
   */
  onZindexChanged: n.func
};
const d = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
}, g = {
  animation(e, a) {
    e.setAnimation(a);
  },
  clickable(e, a) {
    e.setClickable(a);
  },
  cursor(e, a) {
    e.setCursor(a);
  },
  draggable(e, a) {
    e.setDraggable(a);
  },
  icon(e, a) {
    e.setIcon(a);
  },
  label(e, a) {
    e.setLabel(a);
  },
  opacity(e, a) {
    e.setOpacity(a);
  },
  options(e, a) {
    e.setOptions(a);
  },
  place(e, a) {
    e.setPlace(a);
  },
  position(e, a) {
    e.setPosition(a);
  },
  shape(e, a) {
    e.setShape(a);
  },
  title(e, a) {
    e.setTitle(a);
  },
  visible(e, a) {
    e.setVisible(a);
  },
  zIndex(e, a) {
    e.setZIndex(a);
  }
};
export {
  f as Marker,
  f as default
};

var m = Object.defineProperty;
var C = (n, t, o) => t in n ? m(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var l = (n, t, o) => (C(n, typeof t != "symbol" ? t + "" : t, o), o);
import { m as f } from "../../markerwithlabel-72a56a5b.js";
import { P as e } from "../../index-e8d4cd90.js";
import g from "react";
import { R as y } from "../../index-87ad0b90.js";
import { construct as k, componentDidMount as D, componentDidUpdate as M, componentWillUnmount as P } from "../../utils/MapChildHelper.js";
import { M as u, b as r, e as a } from "../../constants-e344191b.js";
const i = class i extends g.PureComponent {
  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  constructor(t, o) {
    super(t, o);
    const p = f(google.maps), s = new p();
    k(
      i.propTypes,
      b,
      this.props,
      s
    );
    const c = this.context[r];
    c ? c.addMarker(s, !!this.props.noRedraw) : s.setMap(this.context[u]), this.state = {
      [a]: s
    }, this.containerElement = document.createElement("div");
  }
  componentDidMount() {
    D(this, this.state[a], h), this.state[a].set("labelContent", this.containerElement), this.forceUpdate();
  }
  componentDidUpdate(t) {
    M(
      this,
      this.state[a],
      h,
      b,
      t
    );
  }
  componentWillUnmount() {
    P(this);
    const t = this.state[a];
    if (t) {
      const o = this.context[r];
      o && o.removeMarker(t, !!this.props.noRedraw), t.setMap(null);
    }
  }
  render() {
    return y.createPortal(
      g.Children.only(this.props.children),
      this.containerElement
    );
  }
  /**
   *
   * @type Animation
   * @public
   */
  getAnimation() {
    return this.state[a].getAnimation();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getClickable() {
    return this.state[a].getClickable();
  }
  /**
   *
   * @type string
   * @public
   */
  getCursor() {
    return this.state[a].getCursor();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[a].getDraggable();
  }
  /**
   *
   * @type string|Icon|Symbol
   * @public
   */
  getIcon() {
    return this.state[a].getIcon();
  }
  /**
   *
   * @type MarkerLabel
   * @public
   */
  getLabel() {
    return this.state[a].getLabel();
  }
  /**
   *
   * @type number
   * @public
   */
  getOpacity() {
    return this.state[a].getOpacity();
  }
  /**
   *
   * @type MarkerPlace
   * @public
   */
  getPlace() {
    return this.state[a].getPlace();
  }
  /**
   *
   * @type LatLng
   * @public
   */
  getPosition() {
    return this.state[a].getPosition();
  }
  /**
   *
   * @type MarkerShape
   * @public
   */
  getShape() {
    return this.state[a].getShape();
  }
  /**
   *
   * @type string
   * @public
   */
  getTitle() {
    return this.state[a].getTitle();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[a].getVisible();
  }
  /**
   *
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[a].getZIndex();
  }
};
l(i, "propTypes", {
  /**
   * It will be `MarkerWithLabel#labelContent`.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  children: e.node,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: e.object,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: e.string,
  /**
   * For `MarkerWithLabel`. This is for native JS style object, so you may
   * expect some React shorthands for inline styles not working here.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: e.object,
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: e.bool,
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: e.bool,
  /**
   * @type Animation
   */
  defaultAnimation: e.any,
  /**
   * @type boolean
   */
  defaultClickable: e.bool,
  /**
   * @type string
   */
  defaultCursor: e.string,
  /**
   * @type boolean
   */
  defaultDraggable: e.bool,
  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: e.any,
  /**
   * @type string|MarkerLabel
   */
  defaultLabel: e.any,
  /**
   * @type number
   */
  defaultOpacity: e.number,
  /**
   * @type MarkerOptions
   */
  defaultOptions: e.any,
  /**
   * @type MarkerPlace
   */
  defaultPlace: e.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: e.any,
  /**
   * @type MarkerShape
   */
  defaultShape: e.any,
  /**
   * @type string
   */
  defaultTitle: e.string,
  /**
   * @type boolean
   */
  defaultVisible: e.bool,
  /**
   * @type number
   */
  defaultZIndex: e.number,
  /**
   * @type Animation
   */
  animation: e.any,
  /**
   * @type boolean
   */
  clickable: e.bool,
  /**
   * @type string
   */
  cursor: e.string,
  /**
   * @type boolean
   */
  draggable: e.bool,
  /**
   * @type string|Icon|Symbol
   */
  icon: e.any,
  /**
   * @type string|MarkerLabel
   */
  label: e.any,
  /**
   * @type number
   */
  opacity: e.number,
  /**
   * @type MarkerOptions
   */
  options: e.any,
  /**
   * @type MarkerPlace
   */
  place: e.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  position: e.any,
  /**
   * @type MarkerShape
   */
  shape: e.any,
  /**
   * @type string
   */
  title: e.string,
  /**
   * @type boolean
   */
  visible: e.bool,
  /**
   * @type number
   */
  zIndex: e.number,
  /**
   * function
   */
  onDblClick: e.func,
  /**
   * function
   */
  onDragEnd: e.func,
  /**
   * function
   */
  onDragStart: e.func,
  /**
   * function
   */
  onMouseDown: e.func,
  /**
   * function
   */
  onMouseOut: e.func,
  /**
   * function
   */
  onMouseOver: e.func,
  /**
   * function
   */
  onMouseUp: e.func,
  /**
   * function
   */
  onRightClick: e.func,
  /**
   * function
   */
  onAnimationChanged: e.func,
  /**
   * function
   */
  onClick: e.func,
  /**
   * function
   */
  onClickableChanged: e.func,
  /**
   * function
   */
  onCursorChanged: e.func,
  /**
   * function
   */
  onDrag: e.func,
  /**
   * function
   */
  onDraggableChanged: e.func,
  /**
   * function
   */
  onFlatChanged: e.func,
  /**
   * function
   */
  onIconChanged: e.func,
  /**
   * function
   */
  onPositionChanged: e.func,
  /**
   * function
   */
  onShapeChanged: e.func,
  /**
   * function
   */
  onTitleChanged: e.func,
  /**
   * function
   */
  onVisibleChanged: e.func,
  /**
   * function
   */
  onZindexChanged: e.func
}), l(i, "defaultProps", {
  labelVisible: !0
}), l(i, "contextTypes", {
  [u]: e.object,
  [r]: e.object
});
let d = i;
const h = {
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
}, b = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor(n, t) {
    n.set("labelAnchor", t);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass(n, t) {
    n.set("labelClass", t);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle(n, t) {
    n.set("labelStyle", t);
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible(n, t) {
    n.set("labelVisible", t);
  },
  animation(n, t) {
    n.setAnimation(t);
  },
  clickable(n, t) {
    n.setClickable(t);
  },
  cursor(n, t) {
    n.setCursor(t);
  },
  draggable(n, t) {
    n.setDraggable(t);
  },
  icon(n, t) {
    n.setIcon(t);
  },
  label(n, t) {
    n.setLabel(t);
  },
  opacity(n, t) {
    n.setOpacity(t);
  },
  options(n, t) {
    n.setOptions(t);
  },
  place(n, t) {
    n.setPlace(t);
  },
  position(n, t) {
    n.setPosition(t);
  },
  shape(n, t) {
    n.setShape(t);
  },
  title(n, t) {
    n.setTitle(t);
  },
  visible(n, t) {
    n.setVisible(t);
  },
  zIndex(n, t) {
    n.setZIndex(t);
  }
};
export {
  d as MarkerWithLabel,
  d as default
};

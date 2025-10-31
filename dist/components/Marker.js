var b = Object.defineProperty;
var C = (n, t, a) => t in n ? b(n, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[t] = a;
var r = (n, t, a) => (C(n, typeof t != "symbol" ? t + "" : t, a), a);
import { jsx as f } from "react/jsx-runtime";
import m from "react";
import { P as e } from "../index-e8d4cd90.js";
import { construct as y, componentDidMount as k, componentDidUpdate as D, componentWillUnmount as x } from "../utils/MapChildHelper.js";
import { M as u, b as c, A as l, d as o } from "../constants-4d431d90.js";
const i = class i extends m.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  constructor(t, a) {
    super(t, a);
    const s = new google.maps.Marker();
    y(i.propTypes, p, this.props, s);
    const g = this.context[c];
    g ? g.addMarker(s, !!this.props.noRedraw) : s.setMap(this.context[u]), this.state = {
      [o]: s
    };
  }
  getChildContext() {
    return {
      [l]: this.context[l] || this.state[o]
    };
  }
  componentDidMount() {
    k(this, this.state[o], h);
  }
  componentDidUpdate(t) {
    D(
      this,
      this.state[o],
      h,
      p,
      t
    );
  }
  componentWillUnmount() {
    x(this);
    const t = this.state[o];
    if (t) {
      const a = this.context[c];
      a && a.removeMarker(t, !!this.props.noRedraw), t.setMap(null);
    }
  }
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ f("div", { children: t });
  }
  /**
   *
   * @type Animation
   * @public
   */
  getAnimation() {
    return this.state[o].getAnimation();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getClickable() {
    return this.state[o].getClickable();
  }
  /**
   *
   * @type string
   * @public
   */
  getCursor() {
    return this.state[o].getCursor();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[o].getDraggable();
  }
  /**
   *
   * @type string|Icon|Symbol
   * @public
   */
  getIcon() {
    return this.state[o].getIcon();
  }
  /**
   *
   * @type MarkerLabel
   * @public
   */
  getLabel() {
    return this.state[o].getLabel();
  }
  /**
   *
   * @type number
   * @public
   */
  getOpacity() {
    return this.state[o].getOpacity();
  }
  /**
   *
   * @type MarkerPlace
   * @public
   */
  getPlace() {
    return this.state[o].getPlace();
  }
  /**
   *
   * @type LatLng
   * @public
   */
  getPosition() {
    return this.state[o].getPosition();
  }
  /**
   *
   * @type MarkerShape
   * @public
   */
  getShape() {
    return this.state[o].getShape();
  }
  /**
   *
   * @type string
   * @public
   */
  getTitle() {
    return this.state[o].getTitle();
  }
  /**
   *
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[o].getVisible();
  }
  /**
   *
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[o].getZIndex();
  }
};
r(i, "propTypes", {
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
}), r(i, "contextTypes", {
  [u]: e.object,
  [c]: e.object
}), r(i, "childContextTypes", {
  [l]: e.object
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
}, p = {
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
  d as Marker,
  d as default
};

var p = Object.defineProperty;
var g = (e, o, s) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[o] = s;
var i = (e, o, s) => (g(e, typeof o != "symbol" ? o + "" : o, s), s);
import b from "react";
import { P as t } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as m, componentDidUpdate as M, componentWillUnmount as h } from "../utils/MapChildHelper.js";
import { M as r, R as n } from "../constants-4d431d90.js";
const a = class a extends b.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  constructor(o, s) {
    super(o, s);
    const u = new google.maps.Rectangle();
    f(a.propTypes, d, this.props, u), u.setMap(this.context[r]), this.state = {
      [n]: u
    };
  }
  componentDidMount() {
    m(this, this.state[n], c);
  }
  componentDidUpdate(o) {
    M(
      this,
      this.state[n],
      c,
      d,
      o
    );
  }
  componentWillUnmount() {
    h(this);
    const o = this.state[n];
    o && o.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Returns the bounds of this rectangle.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[n].getBounds();
  }
  /**
   * Returns whether this rectangle can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[n].getDraggable();
  }
  /**
   * Returns whether this rectangle can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[n].getEditable();
  }
  /**
   * Returns whether this rectangle is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[n].getVisible();
  }
};
i(a, "propTypes", {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: t.any,
  /**
   * @type boolean
   */
  defaultDraggable: t.bool,
  /**
   * @type boolean
   */
  defaultEditable: t.bool,
  /**
   * @type RectangleOptions
   */
  defaultOptions: t.any,
  /**
   * @type boolean
   */
  defaultVisible: t.bool,
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: t.any,
  /**
   * @type boolean
   */
  draggable: t.bool,
  /**
   * @type boolean
   */
  editable: t.bool,
  /**
   * @type RectangleOptions
   */
  options: t.any,
  /**
   * @type boolean
   */
  visible: t.bool,
  /**
   * function
   */
  onDblClick: t.func,
  /**
   * function
   */
  onDragEnd: t.func,
  /**
   * function
   */
  onDragStart: t.func,
  /**
   * function
   */
  onMouseDown: t.func,
  /**
   * function
   */
  onMouseMove: t.func,
  /**
   * function
   */
  onMouseOut: t.func,
  /**
   * function
   */
  onMouseOver: t.func,
  /**
   * function
   */
  onMouseUp: t.func,
  /**
   * function
   */
  onRightClick: t.func,
  /**
   * function
   */
  onBoundsChanged: t.func,
  /**
   * function
   */
  onClick: t.func,
  /**
   * function
   */
  onDrag: t.func
}), i(a, "contextTypes", {
  [r]: t.object
});
let l = a;
const c = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDrag: "drag"
}, d = {
  bounds(e, o) {
    e.setBounds(o);
  },
  draggable(e, o) {
    e.setDraggable(o);
  },
  editable(e, o) {
    e.setEditable(o);
  },
  options(e, o) {
    e.setOptions(o);
  },
  visible(e, o) {
    e.setVisible(o);
  }
};
export {
  l as Rectangle,
  l as default
};

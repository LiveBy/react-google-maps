var g = Object.defineProperty;
var p = (n, e, s) => e in n ? g(n, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[e] = s;
var r = (n, e, s) => (p(n, typeof e != "symbol" ? e + "" : e, s), s);
import b from "react";
import { P as t } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as m, componentDidUpdate as h, componentWillUnmount as M } from "../utils/MapChildHelper.js";
import { M as u, C as o } from "../constants-4d431d90.js";
const a = class a extends b.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  constructor(e, s) {
    super(e, s);
    const i = new google.maps.Circle();
    f(a.propTypes, d, this.props, i), i.setMap(this.context[u]), this.state = {
      [o]: i
    };
  }
  componentDidMount() {
    m(this, this.state[o], l);
  }
  componentDidUpdate(e) {
    h(
      this,
      this.state[o],
      l,
      d,
      e
    );
  }
  componentWillUnmount() {
    M(this);
    const e = this.state[o];
    e && e.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Gets the `LatLngBounds` of this Circle.
   * @type LatLngBoundsLatLngBounds
   * @public
   */
  getBounds() {
    return this.state[o].getBounds();
  }
  /**
   * Returns the center of this circle.
   * @type LatLng
   * @public
   */
  getCenter() {
    return this.state[o].getCenter();
  }
  /**
   * Returns whether this circle can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[o].getDraggable();
  }
  /**
   * Returns whether this circle can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[o].getEditable();
  }
  /**
   * Returns the radius of this circle (in meters).
   * @type number
   * @public
   */
  getRadius() {
    return this.state[o].getRadius();
  }
  /**
   * Returns whether this circle is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[o].getVisible();
  }
};
r(a, "propTypes", {
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: t.any,
  /**
   * @type boolean
   */
  defaultDraggable: t.bool,
  /**
   * @type boolean
   */
  defaultEditable: t.bool,
  /**
   * @type CircleOptions
   */
  defaultOptions: t.any,
  /**
   * @type number
   */
  defaultRadius: t.number,
  /**
   * @type boolean
   */
  defaultVisible: t.bool,
  /**
   * @type LatLng|LatLngLiteral
   */
  center: t.any,
  /**
   * @type boolean
   */
  draggable: t.bool,
  /**
   * @type boolean
   */
  editable: t.bool,
  /**
   * @type CircleOptions
   */
  options: t.any,
  /**
   * @type number
   */
  radius: t.number,
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
  onCenterChanged: t.func,
  /**
   * function
   */
  onClick: t.func,
  /**
   * function
   */
  onDrag: t.func,
  /**
   * function
   */
  onRadiusChanged: t.func
}), r(a, "contextTypes", {
  [u]: t.object
});
let c = a;
const l = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onRadiusChanged: "radius_changed"
}, d = {
  center(n, e) {
    n.setCenter(e);
  },
  draggable(n, e) {
    n.setDraggable(e);
  },
  editable(n, e) {
    n.setEditable(e);
  },
  options(n, e) {
    n.setOptions(e);
  },
  radius(n, e) {
    n.setRadius(e);
  },
  visible(n, e) {
    n.setVisible(e);
  }
};
export {
  c as Circle,
  c as default
};

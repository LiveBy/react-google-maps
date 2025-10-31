var g = Object.defineProperty;
var d = (o, t, s) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var r = (o, t, s) => (d(o, typeof t != "symbol" ? t + "" : t, s), s);
import b from "react";
import { P as e } from "../index-e8d4cd90.js";
import { construct as m, componentDidMount as f, componentDidUpdate as h, componentWillUnmount as M } from "../utils/MapChildHelper.js";
import { M as l, P as n } from "../constants-4d431d90.js";
const a = class a extends b.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  constructor(t, s) {
    super(t, s);
    const i = new google.maps.Polyline();
    m(a.propTypes, p, this.props, i), i.setMap(this.context[l]), this.state = {
      [n]: i
    };
  }
  componentDidMount() {
    f(this, this.state[n], c);
  }
  componentDidUpdate(t) {
    h(
      this,
      this.state[n],
      c,
      p,
      t
    );
  }
  componentWillUnmount() {
    M(this);
    const t = this.state[n];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Returns whether this shape can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[n].getDraggable();
  }
  /**
   * Returns whether this shape can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[n].getEditable();
  }
  /**
   * Retrieves the path.
   * @type MVCArray<LatLng>
   * @public
   */
  getPath() {
    return this.state[n].getPath();
  }
  /**
   * Returns whether this poly is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[n].getVisible();
  }
};
r(a, "propTypes", {
  /**
   * @type boolean
   */
  defaultDraggable: e.bool,
  /**
   * @type boolean
   */
  defaultEditable: e.bool,
  /**
   * @type PolylineOptions
   */
  defaultOptions: e.any,
  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: e.any,
  /**
   * @type boolean
   */
  defaultVisible: e.bool,
  /**
   * @type boolean
   */
  draggable: e.bool,
  /**
   * @type boolean
   */
  editable: e.bool,
  /**
   * @type PolylineOptions
   */
  options: e.any,
  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: e.any,
  /**
   * @type boolean
   */
  visible: e.bool,
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
  onMouseMove: e.func,
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
  onClick: e.func,
  /**
   * function
   */
  onDrag: e.func
}), r(a, "contextTypes", {
  [l]: e.object
});
let u = a;
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
  onClick: "click",
  onDrag: "drag"
}, p = {
  draggable(o, t) {
    o.setDraggable(t);
  },
  editable(o, t) {
    o.setEditable(t);
  },
  options(o, t) {
    o.setOptions(t);
  },
  path(o, t) {
    o.setPath(t);
  },
  visible(o, t) {
    o.setVisible(t);
  }
};
export {
  u as Polyline,
  u as default
};

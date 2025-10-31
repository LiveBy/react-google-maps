var g = Object.defineProperty;
var d = (o, t, s) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var r = (o, t, s) => (d(o, typeof t != "symbol" ? t + "" : t, s), s);
import h from "react";
import { P as e } from "../index-e8d4cd90.js";
import { construct as b, componentDidMount as f, componentDidUpdate as m, componentWillUnmount as M } from "../utils/MapChildHelper.js";
import { M as u, a as n } from "../constants-e344191b.js";
const a = class a extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  constructor(t, s) {
    super(t, s);
    const i = new google.maps.Polygon();
    b(a.propTypes, c, this.props, i), i.setMap(this.context[u]), this.state = {
      [n]: i
    };
  }
  componentDidMount() {
    f(this, this.state[n], p);
  }
  componentDidUpdate(t) {
    m(
      this,
      this.state[n],
      p,
      c,
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
   * Retrieves the first path.
   * @type MVCArray<LatLng>
   * @public
   */
  getPath() {
    return this.state[n].getPath();
  }
  /**
   * Retrieves the paths for this polygon.
   * @type MVCArray<MVCArray<LatLng>>
   * @public
   */
  getPaths() {
    return this.state[n].getPaths();
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
   * @type PolygonOptions
   */
  defaultOptions: e.any,
  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: e.any,
  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  defaultPaths: e.any,
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
   * @type PolygonOptions
   */
  options: e.any,
  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: e.any,
  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  paths: e.any,
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
  [u]: e.object
});
let l = a;
const p = {
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
}, c = {
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
  paths(o, t) {
    o.setPaths(t);
  },
  visible(o, t) {
    o.setVisible(t);
  }
};
export {
  l as Polygon,
  l as default
};

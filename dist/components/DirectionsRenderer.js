var l = Object.defineProperty;
var m = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (m(e, typeof t != "symbol" ? t + "" : t, o), o);
import h from "react";
import { P as n } from "../index-e8d4cd90.js";
import { construct as f, componentDidMount as g, componentDidUpdate as D, componentWillUnmount as x } from "../utils/MapChildHelper.js";
import { M as p, D as s } from "../constants-e344191b.js";
const i = class i extends h.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  constructor(t, o) {
    super(t, o);
    const a = new google.maps.DirectionsRenderer();
    f(
      i.propTypes,
      u,
      this.props,
      a
    ), a.setMap(this.context[p]), this.state = {
      [s]: a
    };
  }
  componentDidMount() {
    g(this, this.state[s], d);
  }
  componentDidUpdate(t) {
    D(
      this,
      this.state[s],
      d,
      u,
      t
    );
  }
  componentWillUnmount() {
    x(this);
    const t = this.state[s];
    t && t.setMap(null);
  }
  render() {
    return !1;
  }
  /**
   * Returns the renderer's current set of directions.
   * @type DirectionsResult
   * @public
   */
  getDirections() {
    return this.state[s].getDirections();
  }
  /**
   * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
   * @type Node<div>DirectionsResult
   * @public
   */
  getPanel() {
    return this.state[s].getPanel();
  }
  /**
   * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
   * @type numberDirectionsRenderer
   * @public
   */
  getRouteIndex() {
    return this.state[s].getRouteIndex();
  }
};
r(i, "propTypes", {
  /**
   * @type DirectionsResult
   */
  defaultDirections: n.any,
  /**
   * @type DirectionsRendererOptions
   */
  defaultOptions: n.any,
  /**
   * @type Node
   */
  defaultPanel: n.any,
  /**
   * @type number
   */
  defaultRouteIndex: n.number,
  /**
   * @type DirectionsResult
   */
  directions: n.any,
  /**
   * @type DirectionsRendererOptions
   */
  options: n.any,
  /**
   * @type Node
   */
  panel: n.any,
  /**
   * @type number
   */
  routeIndex: n.number,
  /**
   * function
   */
  onDirectionsChanged: n.func
}), r(i, "contextTypes", {
  [p]: n.object
});
let c = i;
const d = {
  onDirectionsChanged: "directions_changed"
}, u = {
  directions(e, t) {
    e.setDirections(t);
  },
  options(e, t) {
    e.setOptions(t);
  },
  panel(e, t) {
    e.setPanel(t);
  },
  routeIndex(e, t) {
    e.setRouteIndex(t);
  }
};
export {
  c as DirectionsRenderer,
  c as default
};

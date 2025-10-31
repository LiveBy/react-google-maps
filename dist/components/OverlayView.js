var h = Object.defineProperty;
var d = (r, t, e) => t in r ? h(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (d(r, typeof t != "symbol" ? t + "" : t, e), e);
import { _ as m } from "../lodash-9da1000b.js";
import { i as P } from "../browser-fe3e0b83.js";
import p from "react";
import { R as u } from "../index-87ad0b90.js";
import { P as i } from "../index-e8d4cd90.js";
import { componentDidMount as E, componentDidUpdate as f, componentWillUnmount as A } from "../utils/MapChildHelper.js";
import { getOffsetOverride as R, getLayoutStyles as g } from "../utils/OverlayViewHelper.js";
import { M as c, A as M, O as o } from "../constants-4d431d90.js";
class a extends p.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  constructor(t, e) {
    super(t, e);
    const s = new google.maps.OverlayView();
    s.onAdd = m.bind(this.onAdd, this), s.draw = m.bind(this.draw, this), s.onRemove = m.bind(this.onRemove, this), this.onPositionElement = m.bind(this.onPositionElement, this), s.setMap(this.context[c]), this.state = {
      [o]: s
    };
  }
  onAdd() {
    this.containerElement = document.createElement("div"), this.containerElement.style.position = "absolute";
  }
  draw() {
    const { mapPaneName: t } = this.props;
    P(
      !!t,
      "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s",
      t
    ), this.state[o].getPanes()[t].appendChild(this.containerElement), this.forceUpdate(this.onPositionElement);
  }
  onPositionElement() {
    const t = this.state[o].getProjection(), e = {
      x: 0,
      y: 0,
      ...R(this.containerElement, this.props)
    }, s = g(
      t,
      e,
      this.props
    );
    m.assign(this.containerElement.style, s);
  }
  onRemove() {
    this.containerElement.parentNode.removeChild(this.containerElement), this.containerElement = null, this.forceUpdate();
  }
  componentDidMount() {
    E(this, this.state[o], l);
  }
  componentDidUpdate(t) {
    f(
      this,
      this.state[o],
      l,
      y,
      t
    );
  }
  componentWillUnmount() {
    A(this);
    const t = this.state[o];
    t && (t.setMap(null), t.onAdd = null, t.draw = null, t.onRemove = null);
  }
  render() {
    return !!this.containerElement && u.createPortal(
      p.Children.only(this.props.children),
      this.containerElement
    );
  }
  /**
   * Returns the panes in which this OverlayView can be rendered. The panes are not initialized until `onAdd` is called by the API.
   * @type MapPanesonAdd
   * @public
   */
  getPanes() {
    return this.state[o].getPanes();
  }
  /**
   * Returns the `MapCanvasProjection` object associated with this `OverlayView`. The projection is not initialized until `onAdd` is called by the API.
   * @type MapCanvasProjectionMapCanvasProjectionOverlayViewonAdd
   * @public
   */
  getProjection() {
    return this.state[o].getProjection();
  }
}
n(a, "FLOAT_PANE", "floatPane"), n(a, "MAP_PANE", "mapPane"), n(a, "MARKER_LAYER", "markerLayer"), n(a, "OVERLAY_LAYER", "overlayLayer"), n(a, "OVERLAY_MOUSE_TARGET", "overlayMouseTarget"), n(a, "propTypes", {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: i.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: i.object,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: i.object,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: i.node.isRequired,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: i.func
}), n(a, "contextTypes", {
  [c]: i.object,
  [M]: i.object
});
const l = {}, y = {};
export {
  a as OverlayView,
  a as default
};

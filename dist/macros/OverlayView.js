var d = Object.defineProperty;
var h = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var o = (a, t, e) => (h(a, typeof t != "symbol" ? t + "" : t, e), e);
import { _ as m } from "../lodash-9da1000b.js";
import { i as E } from "../browser-fe3e0b83.js";
import p from "react";
import { R as u } from "../index-87ad0b90.js";
import { P as s } from "../index-e8d4cd90.js";
import { componentDidMount as P, componentDidUpdate as f, componentWillUnmount as A } from "../utils/MapChildHelper.js";
import { getOffsetOverride as R, getLayoutStyles as _ } from "../utils/OverlayViewHelper.js";
import { M as c, A as M, O as r } from "../constants-e344191b.js";
const x = `{
  "eventMapOverrides": { 
  },
  "getInstanceFromComponent": "this.state[OVERLAY_VIEW]"
}`;
class i extends p.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  constructor(t, e) {
    super(t, e);
    const n = new google.maps.OverlayView();
    n.onAdd = m.bind(this.onAdd, this), n.draw = m.bind(this.draw, this), n.onRemove = m.bind(this.onRemove, this), this.onPositionElement = m.bind(this.onPositionElement, this), n.setMap(this.context[c]), this.state = {
      [r]: n
    };
  }
  onAdd() {
    this.containerElement = document.createElement("div"), this.containerElement.style.position = "absolute";
  }
  draw() {
    const { mapPaneName: t } = this.props;
    E(
      !!t,
      "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s",
      t
    ), this.state[r].getPanes()[t].appendChild(this.containerElement), this.forceUpdate(this.onPositionElement);
  }
  onPositionElement() {
    const t = this.state[r].getProjection(), e = {
      x: 0,
      y: 0,
      ...R(this.containerElement, this.props)
    }, n = _(
      t,
      e,
      this.props
    );
    m.assign(this.containerElement.style, n);
  }
  onRemove() {
    this.containerElement.parentNode.removeChild(this.containerElement), this.containerElement = null;
  }
  componentDidMount() {
    P(this, this.state[r], l);
  }
  componentDidUpdate(t) {
    f(
      this,
      this.state[r],
      l,
      y,
      t
    );
  }
  componentWillUnmount() {
    A(this);
    const t = this.state[r];
    t && (t.setMap(null), t.onAdd = null, t.draw = null, t.onRemove = null);
  }
  render() {
    return !!this.containerElement && u.createPortal(
      p.Children.only(this.props.children),
      this.containerElement
    );
  }
}
o(i, "FLOAT_PANE", "floatPane"), o(i, "MAP_PANE", "mapPane"), o(i, "MARKER_LAYER", "markerLayer"), o(i, "OVERLAY_LAYER", "overlayLayer"), o(i, "OVERLAY_MOUSE_TARGET", "overlayMouseTarget"), o(i, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: s.string,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: s.object,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: s.object,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: s.node.isRequired,
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: s.func
}), o(i, "contextTypes", {
  [c]: s.object,
  [M]: s.object
});
const l = {}, y = {};
export {
  i as OverlayView,
  x as __jscodeshiftPlaceholder__,
  i as default
};

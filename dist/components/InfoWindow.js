var u = Object.defineProperty;
var f = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (f(e, typeof t != "symbol" ? t + "" : t, s), s);
import { i as g } from "../browser-fe3e0b83.js";
import { c as C } from "../index-22f0280c.js";
import p from "react";
import { R as x } from "../index-87ad0b90.js";
import { P as n } from "../index-e8d4cd90.js";
import { construct as y, componentDidMount as M, componentDidUpdate as P, componentWillUnmount as D } from "../utils/MapChildHelper.js";
import { M as c, A as d, I as o } from "../constants-e344191b.js";
const i = class i extends p.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  constructor(t, s) {
    super(t, s);
    const a = new google.maps.InfoWindow();
    y(i.propTypes, h, this.props, a), a.setMap(this.context[c]), this.state = {
      [o]: a
    };
  }
  componentWillMount() {
    !C || this.containerElement || (this.containerElement = document.createElement("div"));
  }
  componentDidMount() {
    M(this, this.state[o], l), this.state[o].setContent(this.containerElement), I(this.state[o], this.context[d]);
  }
  componentDidUpdate(t) {
    P(
      this,
      this.state[o],
      l,
      h,
      t
    );
  }
  componentWillUnmount() {
    D(this);
    const t = this.state[o];
    t && t.setMap(null);
  }
  render() {
    return x.createPortal(
      p.Children.only(this.props.children),
      this.containerElement
    );
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
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[o].getZIndex();
  }
};
r(i, "propTypes", {
  /**
   * @type InfoWindowOptions
   */
  defaultOptions: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: n.any,
  /**
   * @type number
   */
  defaultZIndex: n.number,
  /**
   * @type InfoWindowOptions
   */
  options: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  position: n.any,
  /**
   * @type number
   */
  zIndex: n.number,
  /**
   * function
   */
  onCloseClick: n.func,
  /**
   * function
   */
  onDomReady: n.func,
  /**
   * function
   */
  onContentChanged: n.func,
  /**
   * function
   */
  onPositionChanged: n.func,
  /**
   * function
   */
  onZindexChanged: n.func
}), r(i, "contextTypes", {
  [c]: n.object,
  [d]: n.object
});
let m = i;
const I = (e, t) => {
  t ? e.open(e.getMap(), t) : e.getPosition() ? e.open(e.getMap()) : g(
    !1,
    "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."
  );
}, l = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, h = {
  options(e, t) {
    e.setOptions(t);
  },
  position(e, t) {
    e.setPosition(t);
  },
  zIndex(e, t) {
    e.setZIndex(t);
  }
};
export {
  m as InfoWindow,
  m as default
};

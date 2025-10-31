var u = Object.defineProperty;
var f = (t, e, o) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var a = (t, e, o) => (f(t, typeof e != "symbol" ? e + "" : e, o), o);
import { c as g } from "../../index-22f0280c.js";
import { i as C } from "../../browser-fe3e0b83.js";
import r from "react";
import { R as M } from "../../index-87ad0b90.js";
import { P as n } from "../../index-e8d4cd90.js";
import { construct as y, componentDidMount as b, componentDidUpdate as x, componentWillUnmount as P } from "../../utils/MapChildHelper.js";
import { M as c, A as d, f as s } from "../../constants-e344191b.js";
const i = class i extends r.PureComponent {
  constructor() {
    super(...arguments);
    a(this, "state", {
      [s]: null
    });
  }
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoBox
   */
  componentWillMount() {
    if (!g || this.state[s])
      return;
    const {
      InfoBox: o
    } = require(
      /* "google-maps-infobox" uses "google" as a global variable. Since we don't
      * have "google" on the server, we can not use it in server-side rendering.
      * As a result, we import "google-maps-infobox" here to prevent an error on
      * a isomorphic server.
      */
      "google-maps-infobox"
    ), p = new o();
    y(i.propTypes, m, this.props, p), p.setMap(this.context[c]), this.setState({
      [s]: p
    });
  }
  componentDidMount() {
    b(this, this.state[s], h), this.content = document.createElement("div"), this.forceUpdate(), this.state[s].setContent(this.content), D(this.state[s], this.context[d]);
  }
  componentDidUpdate(o) {
    x(
      this,
      this.state[s],
      h,
      m,
      o
    );
  }
  componentWillUnmount() {
    P(this);
    const o = this.state[s];
    o && o.setMap(null);
  }
  render() {
    return !!this.content && M.ceatePortal(
      r.Children.only(this.props.children),
      this.content
    );
  }
  /**
   *
   * @type LatLng
   */
  getPosition() {
    return this.state[s].getPosition();
  }
  /**
   *
   * @type boolean
   */
  getVisible() {
    return this.state[s].getVisible();
  }
  /**
   *
   * @type number
   */
  getZIndex() {
    return this.state[s].getZIndex();
  }
};
a(i, "propTypes", {
  /**
   * @type InfoBoxOptions
   */
  defaultOptions: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: n.any,
  /**
   * @type boolean
   */
  defaultVisible: n.bool,
  /**
   * @type number
   */
  defaultZIndex: n.number,
  /**
   * @type InfoBoxOptions
   */
  options: n.any,
  /**
   * @type LatLng|LatLngLiteral
   */
  position: n.any,
  /**
   * @type boolean
   */
  visible: n.bool,
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
}), a(i, "contextTypes", {
  [c]: n.object,
  [d]: n.object
});
let l = i;
const D = (t, e) => {
  e ? t.open(t.getMap(), e) : t.getPosition() ? t.open(t.getMap()) : C(
    !1,
    "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>."
  );
}, h = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, m = {
  options(t, e) {
    t.setOptions(e);
  },
  position(t, e) {
    t.setPosition(e);
  },
  visible(t, e) {
    t.setVisible(e);
  },
  zIndex(t, e) {
    t.setZIndex(e);
  }
};
export {
  l as InfoBox,
  l as default
};

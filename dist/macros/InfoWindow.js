var u = Object.defineProperty;
var M = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (M(e, typeof t != "symbol" ? t + "" : t, o), o);
import { i as f } from "../browser-fe3e0b83.js";
import { c as y } from "../index-22f0280c.js";
import a from "react";
import { R as D } from "../index-87ad0b90.js";
import { P as p } from "../index-e8d4cd90.js";
import { construct as P, componentDidMount as O, componentDidUpdate as C, componentWillUnmount as _ } from "../utils/MapChildHelper.js";
import { M as c, A as m, I as n } from "../constants-4d431d90.js";
const T = `{
  "prohibitedPropNames": [
    "content"
  ],
  "eventMapOverrides": {
    "onCloseClick": "closeclick",
    "onDomReady": "domready"
  },
  "getInstanceFromComponent": "this.state[INFO_WINDOW]"
}`, s = class s extends a.PureComponent {
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  constructor(t, o) {
    super(t, o);
    const i = new google.maps.InfoWindow();
    P(s.propTypes, d, this.props, i), i.setMap(this.context[c]), this.state = {
      [n]: i
    };
  }
  componentWillMount() {
    !y || this.containerElement || (this.containerElement = document.createElement("div"));
  }
  componentDidMount() {
    O(this, this.state[n], h), this.state[n].setContent(this.containerElement), g(this.state[n], this.context[m]);
  }
  componentDidUpdate(t) {
    C(
      this,
      this.state[n],
      h,
      d,
      t
    );
  }
  componentWillUnmount() {
    _(this);
    const t = this.state[n];
    t && t.setMap(null);
  }
  render() {
    return D.createPortal(
      a.Children.only(this.props.children),
      this.containerElement
    );
  }
};
r(s, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), r(s, "contextTypes", {
  [c]: p.object,
  [m]: p.object
});
let l = s;
const g = (e, t) => {
  t ? e.open(e.getMap(), t) : e.getPosition() ? e.open(e.getMap()) : f(
    !1,
    "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."
  );
}, h = {}, d = {};
export {
  l as InfoWindow,
  T as __jscodeshiftPlaceholder__,
  l as default
};

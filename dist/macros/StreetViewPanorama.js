var d = Object.defineProperty;
var h = (s, t, o) => t in s ? d(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[t] = o;
var i = (s, t, o) => (h(s, typeof t != "symbol" ? t + "" : t, o), o);
import { jsx as m } from "react/jsx-runtime";
import { i as a } from "../browser-fe3e0b83.js";
import u from "react";
import { P as c } from "../index-e8d4cd90.js";
import { construct as x, componentDidMount as f, componentDidUpdate as M, componentWillUnmount as g } from "../utils/MapChildHelper.js";
import { M as e } from "../constants-4d431d90.js";
const T = `{
  "eventMapOverrides": {
    "onCloseClick": "closeclick"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`, n = class n extends u.PureComponent {
  constructor(t, o) {
    super(t, o), a(
      !!this.context[e],
      "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
    ), x(
      n.propTypes,
      l,
      this.props,
      this.context[e].getStreetView()
    );
  }
  getChildContext() {
    return {
      [e]: this.context[e].getStreetView()
    };
  }
  componentDidMount() {
    f(this, this.context[e].getStreetView(), p);
  }
  componentDidUpdate(t) {
    M(
      this,
      this.context[e].getStreetView(),
      p,
      l,
      t
    );
  }
  componentWillUnmount() {
    g(this);
    const t = this.context[e].getStreetView();
    t && t.setVisible(!1);
  }
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ m("div", { children: t });
  }
};
i(n, "propTypes", {
  __jscodeshiftPlaceholder__: null
}), i(n, "contextTypes", {
  [e]: c.object
}), i(n, "childContextTypes", {
  [e]: c.object
});
let r = n;
const p = {}, l = {};
export {
  r as StreetViewPanorama,
  T as __jscodeshiftPlaceholder__,
  r as default
};

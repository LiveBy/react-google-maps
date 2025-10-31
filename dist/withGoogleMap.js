var d = Object.defineProperty;
var u = (t, e, n) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var a = (t, e, n) => (u(t, typeof e != "symbol" ? e + "" : e, n), n);
import { jsx as s } from "react/jsx-runtime";
import { i as h } from "./browser-fe3e0b83.js";
import "./lodash-9da1000b.js";
import { P as p } from "./index-e8d4cd90.js";
import r from "react";
import { w as f } from "./browser-000070b5.js";
import { M as l } from "./constants-4d431d90.js";
function q(t) {
  class e extends r.PureComponent {
    constructor() {
      super(...arguments);
      a(this, "state", {
        map: null
      });
      a(this, "handleComponentMount", (o) => {
        if (this.state.map || o === null)
          return;
        f(
          typeof google < "u",
          `Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.
 If you're looking for built-in support to load it for you, use the "async/ScriptjsLoader" instead.
 See https://github.com/tomchentw/react-google-maps/pull/168`
        );
        const i = new google.maps.Map(o);
        this.setState({ map: i });
      });
    }
    getChildContext() {
      return {
        [l]: this.state.map
      };
    }
    componentWillMount() {
      const { containerElement: o, mapElement: i } = this.props;
      h(
        !!o && !!i,
        "Required props containerElement or mapElement is missing. You need to provide both of them.\n The `google.maps.Map` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized."
      );
    }
    render() {
      const { containerElement: o, mapElement: i, ...m } = this.props, { map: c } = this.state;
      return c ? r.cloneElement(
        o,
        {},
        r.cloneElement(i, {
          ref: this.handleComponentMount
        }),
        /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(t, { ...m }) })
      ) : r.cloneElement(
        o,
        {},
        r.cloneElement(i, {
          ref: this.handleComponentMount
        }),
        /* @__PURE__ */ s("div", {})
      );
    }
  }
  return a(e, "displayName", `withGoogleMap(${t.displayName || t.name})`), a(e, "propTypes", {
    containerElement: p.node.isRequired,
    mapElement: p.node.isRequired
  }), a(e, "childContextTypes", {
    [l]: p.object
  }), e;
}
export {
  q as default,
  q as withGoogleMap
};

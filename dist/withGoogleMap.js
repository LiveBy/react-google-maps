import { jsx as r } from "react/jsx-runtime";
import { i as f } from "./browser-fe3e0b83.js";
import "./lodash-9da1000b.js";
import { P as s } from "./index-e8d4cd90.js";
import e from "react";
import { w as h } from "./browser-000070b5.js";
import { M as g } from "./constants-e344191b.js";
const E = e.createContext(null);
function x(i) {
  function a(m) {
    const { containerElement: t, mapElement: o, ...u } = m, [n, c] = e.useState(null);
    e.useEffect(() => {
      f(
        !!t && !!o,
        "Required props containerElement or mapElement is missing. You need to provide both of them.\nThe `google.maps.Map` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized."
      );
    }, [t, o]);
    const l = e.useCallback(
      (p) => {
        if (n || p === null)
          return;
        h(
          typeof google < "u",
          `Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.
If you're looking for built-in support to load it for you, use the "async/ScriptjsLoader" instead.
See https://github.com/tomchentw/react-google-maps/pull/168`
        );
        const d = new google.maps.Map(p);
        c(d);
      },
      [n]
    );
    return n ? e.cloneElement(
      t,
      {},
      e.cloneElement(o, {
        ref: l
      }),
      /* @__PURE__ */ r(E.Provider, { value: { [g]: n }, children: /* @__PURE__ */ r(i, { ...u }) })
    ) : e.cloneElement(
      t,
      {},
      e.cloneElement(o, {
        ref: l
      }),
      /* @__PURE__ */ r("div", {})
    );
  }
  return a.displayName = `withGoogleMap(${i.displayName || i.name})`, a.propTypes = {
    containerElement: s.node.isRequired,
    mapElement: s.node.isRequired
  }, a;
}
export {
  E as MapContext,
  x as default,
  x as withGoogleMap
};

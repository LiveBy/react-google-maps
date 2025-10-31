import { jsx as c } from "react/jsx-runtime";
import { i as m } from "../browser-fe3e0b83.js";
import { useContext as l, useEffect as n } from "react";
import { construct as p, componentDidMount as f, componentWillUnmount as d, componentDidUpdate as u } from "../utils/MapChildHelper.js";
import { M } from "../constants-e344191b.js";
import { MapContext as h } from "../withGoogleMap.js";
const j = `{
  "eventMapOverrides": {
    "onCloseClick": "closeclick"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`;
function a(e) {
  const { children: s, ...C } = e, o = (l(h) || {})[M], t = o ? o.getStreetView() : null;
  return n(() => {
    if (!o) {
      m(
        !1,
        "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
      );
      return;
    }
    return p(
      a.propTypes,
      i,
      e,
      t
    ), f({ props: e }, t, r), () => {
      d({}), t && t.setVisible(!1);
    };
  }, []), n(() => {
    t && u(
      { props: e },
      t,
      r,
      i,
      {}
      // prevProps not tracked in this migration
    );
  }, [e, t]), /* @__PURE__ */ c("div", { children: s });
}
a.propTypes = {
  __jscodeshiftPlaceholder__: null
};
const r = {}, i = {};
export {
  a as StreetViewPanorama,
  j as __jscodeshiftPlaceholder__,
  a as default
};

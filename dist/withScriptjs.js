import { jsxs as i, Fragment as S, jsx as t } from "react/jsx-runtime";
import p from "react";
const u = "BEGIN", r = "LOADED", E = withScript = (s) => ({ loadingElement: e = null, googleMapURL: n, ...o }) => {
  const [a, c] = p.useState(u);
  return /* @__PURE__ */ i(S, { children: [
    /* @__PURE__ */ t(
      "script",
      {
        async: !0,
        src: n,
        onLoad: () => c(r)
      }
    ),
    a === r ? /* @__PURE__ */ t(s, { ...o }) : e
  ] });
};
export {
  E as default
};

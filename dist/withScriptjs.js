import { jsxs as i, Fragment as u, jsx as t } from "react/jsx-runtime";
import A from "react";
const D = "BEGIN", r = "LOADED", S = (e) => ({ loadingElement: n = null, googleMapURL: o, ...s }) => {
  const [a, c] = A.useState(D);
  return /* @__PURE__ */ i(u, { children: [
    /* @__PURE__ */ t(
      "script",
      {
        async: !0,
        src: o,
        onLoad: () => c(r)
      }
    ),
    a === r ? /* @__PURE__ */ t(e, { ...s }) : n
  ] });
};
export {
  S as default,
  S as withScript
};

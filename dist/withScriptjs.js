import { jsxs as p, Fragment as d, jsx as a } from "react/jsx-runtime";
import l from "react";
const S = "BEGIN", s = "LOADED", A = (t) => {
  const r = ({ loadingElement: e = null, googleMapURL: c, ...i }) => {
    const [n, o] = l.useState(S);
    return /* @__PURE__ */ p(d, { children: [
      /* @__PURE__ */ a(
        "script",
        {
          async: !0,
          src: c,
          onLoad: () => o(s)
        }
      ),
      n === s ? /* @__PURE__ */ a(t, { ...i }) : e
    ] });
  };
  return r.displayName = `withScript(${t.displayName || t.name})`, r;
};
export {
  A as default,
  A as withScript
};

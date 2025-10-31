import { g as R } from "./lodash-9da1000b.js";
import E from "react";
var v = { exports: {} }, c = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h;
function D() {
  if (h)
    return c;
  h = 1;
  var l = E;
  function m(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        r += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var o = {
    d: {
      f,
      r: function() {
        throw Error(m(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function g(n, r, a) {
    var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: t == null ? null : "" + t,
      children: n,
      containerInfo: r,
      implementation: a
    };
  }
  var y = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(n, r) {
    if (n === "font")
      return "";
    if (typeof r == "string")
      return r === "use-credentials" ? r : "";
  }
  return c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, c.createPortal = function(n, r) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
      throw Error(m(299));
    return g(n, r, null, a);
  }, c.flushSync = function(n) {
    var r = y.T, a = o.p;
    try {
      if (y.T = null, o.p = 2, n)
        return n();
    } finally {
      y.T = r, o.p = a, o.d.f();
    }
  }, c.preconnect = function(n, r) {
    typeof n == "string" && (r ? (r = r.crossOrigin, r = typeof r == "string" ? r === "use-credentials" ? r : "" : void 0) : r = null, o.d.C(n, r));
  }, c.prefetchDNS = function(n) {
    typeof n == "string" && o.d.D(n);
  }, c.preinit = function(n, r) {
    if (typeof n == "string" && r && typeof r.as == "string") {
      var a = r.as, t = p(a, r.crossOrigin), e = typeof r.integrity == "string" ? r.integrity : void 0, i = typeof r.fetchPriority == "string" ? r.fetchPriority : void 0;
      a === "style" ? o.d.S(
        n,
        typeof r.precedence == "string" ? r.precedence : void 0,
        {
          crossOrigin: t,
          integrity: e,
          fetchPriority: i
        }
      ) : a === "script" && o.d.X(n, {
        crossOrigin: t,
        integrity: e,
        fetchPriority: i,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0
      });
    }
  }, c.preinitModule = function(n, r) {
    if (typeof n == "string")
      if (typeof r == "object" && r !== null) {
        if (r.as == null || r.as === "script") {
          var a = p(
            r.as,
            r.crossOrigin
          );
          o.d.M(n, {
            crossOrigin: a,
            integrity: typeof r.integrity == "string" ? r.integrity : void 0,
            nonce: typeof r.nonce == "string" ? r.nonce : void 0
          });
        }
      } else
        r == null && o.d.M(n);
  }, c.preload = function(n, r) {
    if (typeof n == "string" && typeof r == "object" && r !== null && typeof r.as == "string") {
      var a = r.as, t = p(a, r.crossOrigin);
      o.d.L(n, a, {
        crossOrigin: t,
        integrity: typeof r.integrity == "string" ? r.integrity : void 0,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0,
        type: typeof r.type == "string" ? r.type : void 0,
        fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0,
        referrerPolicy: typeof r.referrerPolicy == "string" ? r.referrerPolicy : void 0,
        imageSrcSet: typeof r.imageSrcSet == "string" ? r.imageSrcSet : void 0,
        imageSizes: typeof r.imageSizes == "string" ? r.imageSizes : void 0,
        media: typeof r.media == "string" ? r.media : void 0
      });
    }
  }, c.preloadModule = function(n, r) {
    if (typeof n == "string")
      if (r) {
        var a = p(r.as, r.crossOrigin);
        o.d.m(n, {
          as: typeof r.as == "string" && r.as !== "script" ? r.as : void 0,
          crossOrigin: a,
          integrity: typeof r.integrity == "string" ? r.integrity : void 0
        });
      } else
        o.d.m(n);
  }, c.requestFormReset = function(n) {
    o.d.r(n);
  }, c.unstable_batchedUpdates = function(n, r) {
    return n(r);
  }, c.useFormState = function(n, r, a) {
    return y.H.useFormState(n, r, a);
  }, c.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, c.version = "19.2.0", c;
}
var s = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S;
function b() {
  return S || (S = 1, process.env.NODE_ENV !== "production" && function() {
    function l() {
    }
    function m(t) {
      return "" + t;
    }
    function f(t, e, i) {
      var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        m(d);
        var _ = !1;
      } catch {
        _ = !0;
      }
      return _ && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object"
      ), m(d)), {
        $$typeof: r,
        key: d == null ? null : "" + d,
        children: t,
        containerInfo: e,
        implementation: i
      };
    }
    function o(t, e) {
      if (t === "font")
        return "";
      if (typeof e == "string")
        return e === "use-credentials" ? e : "";
    }
    function u(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : 'something with type "' + typeof t + '"';
    }
    function g(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : typeof t == "string" ? JSON.stringify(t) : typeof t == "number" ? "`" + t + "`" : 'something with type "' + typeof t + '"';
    }
    function y() {
      var t = a.H;
      return t === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), t;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = E, n = {
      d: {
        f: l,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l
      },
      p: 0,
      findDOMNode: null
    }, r = Symbol.for("react.portal"), a = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, s.createPortal = function(t, e) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return f(t, e, null, i);
    }, s.flushSync = function(t) {
      var e = a.T, i = n.p;
      try {
        if (a.T = null, n.p = 2, t)
          return t();
      } finally {
        a.T = e, n.p = i, n.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, s.preconnect = function(t, e) {
      typeof t == "string" && t ? e != null && typeof e != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        g(e)
      ) : e != null && typeof e.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        u(e.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        u(t)
      ), typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n.d.C(t, e));
    }, s.prefetchDNS = function(t) {
      if (typeof t != "string" || !t)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          u(t)
        );
      else if (1 < arguments.length) {
        var e = arguments[1];
        typeof e == "object" && e.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          g(e)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          g(e)
        );
      }
      typeof t == "string" && n.d.D(t);
    }, s.preinit = function(t, e) {
      if (typeof t == "string" && t ? e == null || typeof e != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        g(e)
      ) : e.as !== "style" && e.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        g(e.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        u(t)
      ), typeof t == "string" && e && typeof e.as == "string") {
        var i = e.as, d = o(i, e.crossOrigin), _ = typeof e.integrity == "string" ? e.integrity : void 0, O = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        i === "style" ? n.d.S(
          t,
          typeof e.precedence == "string" ? e.precedence : void 0,
          {
            crossOrigin: d,
            integrity: _,
            fetchPriority: O
          }
        ) : i === "script" && n.d.X(t, {
          crossOrigin: d,
          integrity: _,
          fetchPriority: O,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    }, s.preinitModule = function(t, e) {
      var i = "";
      if (typeof t == "string" && t || (i += " The `href` argument encountered was " + u(t) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + u(e) + "." : e && "as" in e && e.as !== "script" && (i += " The `as` option encountered was " + g(e.as) + "."), i)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          i
        );
      else
        switch (i = e && typeof e.as == "string" ? e.as : "script", i) {
          case "script":
            break;
          default:
            i = g(i), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              i,
              t
            );
        }
      typeof t == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (i = o(
        e.as,
        e.crossOrigin
      ), n.d.M(t, {
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      })) : e == null && n.d.M(t));
    }, s.preload = function(t, e) {
      var i = "";
      if (typeof t == "string" && t || (i += " The `href` argument encountered was " + u(t) + "."), e == null || typeof e != "object" ? i += " The `options` argument encountered was " + u(e) + "." : typeof e.as == "string" && e.as || (i += " The `as` option encountered was " + u(e.as) + "."), i && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        i
      ), typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        i = e.as;
        var d = o(
          i,
          e.crossOrigin
        );
        n.d.L(t, i, {
          crossOrigin: d,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          type: typeof e.type == "string" ? e.type : void 0,
          fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
          imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
          imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
          media: typeof e.media == "string" ? e.media : void 0
        });
      }
    }, s.preloadModule = function(t, e) {
      var i = "";
      typeof t == "string" && t || (i += " The `href` argument encountered was " + u(t) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + u(e) + "." : e && "as" in e && typeof e.as != "string" && (i += " The `as` option encountered was " + u(e.as) + "."), i && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        i
      ), typeof t == "string" && (e ? (i = o(
        e.as,
        e.crossOrigin
      ), n.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })) : n.d.m(t));
    }, s.requestFormReset = function(t) {
      n.d.r(t);
    }, s.unstable_batchedUpdates = function(t, e) {
      return t(e);
    }, s.useFormState = function(t, e, i) {
      return y().useFormState(t, e, i);
    }, s.useFormStatus = function() {
      return y().useHostTransitionStatus();
    }, s.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), s;
}
function T() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (T(), v.exports = D()) : v.exports = b();
var M = v.exports;
const A = /* @__PURE__ */ R(M);
export {
  A as R
};

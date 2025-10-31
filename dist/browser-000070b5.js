import { g as u } from "./lodash-9da1000b.js";
var i = function() {
};
process.env.NODE_ENV !== "production" && (i = function(a, r, e) {
  var o = arguments.length;
  e = new Array(o > 2 ? o - 2 : 0);
  for (var n = 2; n < o; n++)
    e[n - 2] = arguments[n];
  if (r === void 0)
    throw new Error(
      "`warning(condition, format, ...args)` requires a warning message argument"
    );
  if (r.length < 10 || /^[s\W]*$/.test(r))
    throw new Error(
      "The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + r
    );
  if (!a) {
    var s = 0, t = "Warning: " + r.replace(/%s/g, function() {
      return e[s++];
    });
    typeof console < "u" && console.error(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
});
var w = i;
const c = /* @__PURE__ */ u(w);
export {
  c as w
};

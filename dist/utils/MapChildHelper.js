import { _ as s } from "../lodash-9da1000b.js";
function f(e, t, r) {
  if (s.has(e.prevProps, r)) {
    const o = r.match(/^default(\S+)/);
    if (o) {
      const n = s.lowerFirst(o[1]);
      s.has(e.nextProps, n) || (e.nextProps[n] = e.prevProps[r]);
    } else
      e.nextProps[r] = e.prevProps[r];
  }
  return e;
}
function u(e, t, r, o) {
  s.forEach(e, (n, p) => {
    const i = r[p];
    i !== t[p] && n(o, i);
  });
}
function g(e, t, r, o) {
  const { nextProps: n } = s.reduce(e, f, {
    nextProps: {},
    prevProps: r
  });
  u(
    t,
    {
      /* empty prevProps for construct */
    },
    n,
    o
  );
}
function P(e, t, r) {
  l(e, t, r);
}
function x(e, t, r, o, n) {
  e.unregisterAllEvents(), u(o, n, e.props, t), l(e, t, r);
}
function c(e) {
  e.unregisterAllEvents();
}
function l(e, t, r) {
  const o = s.reduce(
    r,
    (n, p, i) => (s.isFunction(e.props[i]) && n.push(
      google.maps.event.addListener(
        t,
        p,
        e.props[i]
      )
    ), n),
    []
  );
  e.unregisterAllEvents = s.bind(
    s.forEach,
    null,
    o,
    d
  );
}
function d(e) {
  google.maps.event.removeListener(e);
}
export {
  P as componentDidMount,
  x as componentDidUpdate,
  c as componentWillUnmount,
  g as construct
};

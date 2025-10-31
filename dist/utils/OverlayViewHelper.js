import { _ as i } from "../lodash-9da1000b.js";
function p(t, e) {
  const { getPixelPositionOffset: n } = e;
  return i.isFunction(n) ? n(
    t.offsetWidth,
    t.offsetHeight
  ) : {};
}
function l(t, e) {
  return new e(t.lat, t.lng);
}
function s(t, e) {
  return new e(
    new google.maps.LatLng(t.ne.lat, t.ne.lng),
    new google.maps.LatLng(t.sw.lat, t.sw.lng)
  );
}
function u(t, e, n) {
  return t instanceof e ? t : n(t, e);
}
function x(t, e, n) {
  const o = t.fromLatLngToDivPixel(n.getNorthEast()), r = t.fromLatLngToDivPixel(n.getSouthWest());
  return o && r ? {
    left: `${r.x + e.x}px`,
    top: `${o.y + e.y}px`,
    width: `${o.x - r.x - e.x}px`,
    height: `${r.y - o.y - e.y}px`
  } : {
    left: "-9999px",
    top: "-9999px"
  };
}
function L(t, e, n) {
  const o = t.fromLatLngToDivPixel(n);
  if (o) {
    const { x: r, y: g } = o;
    return {
      left: `${r + e.x}px`,
      top: `${g + e.y}px`
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function a(t, e, n) {
  if (n.bounds) {
    const o = u(
      n.bounds,
      google.maps.LatLngBounds,
      s
    );
    return x(t, e, o);
  } else {
    const o = u(
      n.position,
      google.maps.LatLng,
      l
    );
    return L(t, e, o);
  }
}
export {
  a as getLayoutStyles,
  p as getOffsetOverride
};

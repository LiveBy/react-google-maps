import { jsx as c } from "react/jsx-runtime";
import { i as d } from "../browser-fe3e0b83.js";
import { P as o } from "../index-e8d4cd90.js";
import { useContext as m, useEffect as a } from "react";
import { construct as p, componentDidMount as u, componentWillUnmount as f, componentDidUpdate as g } from "../utils/MapChildHelper.js";
import { M as h } from "../constants-e344191b.js";
import { MapContext as C } from "../withGoogleMap.js";
function l(n) {
  const { children: e, ...P } = n, i = (m(C) || {})[h], t = i ? i.getStreetView() : null;
  return a(() => {
    if (!i) {
      d(
        !1,
        "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
      );
      return;
    }
    return p(
      l.propTypes,
      r,
      n,
      t
    ), u({ props: n }, t, s), () => {
      f({}), t && t.setVisible(!1);
    };
  }, []), a(() => {
    t && g(
      { props: n },
      t,
      s,
      r,
      {}
      // prevProps not tracked in this migration
    );
  }, [n, t]), /* @__PURE__ */ c("div", { children: e });
}
l.propTypes = {
  /**
   * @type Array<StreetViewLink>
   */
  defaultLinks: o.any,
  /**
   * @type boolean
   */
  defaultMotionTracking: o.bool,
  /**
   * @type StreetViewPanoramaOptions
   */
  defaultOptions: o.any,
  /**
   * @type string
   */
  defaultPano: o.string,
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: o.any,
  /**
   * @type StreetViewPov
   */
  defaultPov: o.any,
  /**
   * @type boolean
   */
  defaultVisible: o.bool,
  /**
   * @type number
   */
  defaultZoom: o.number,
  /**
   * @type Array<StreetViewLink>
   */
  links: o.any,
  /**
   * @type boolean
   */
  motionTracking: o.bool,
  /**
   * @type StreetViewPanoramaOptions
   */
  options: o.any,
  /**
   * @type string
   */
  pano: o.string,
  /**
   * @type LatLng|LatLngLiteral
   */
  position: o.any,
  /**
   * @type StreetViewPov
   */
  pov: o.any,
  /**
   * @type boolean
   */
  visible: o.bool,
  /**
   * @type number
   */
  zoom: o.number,
  /**
   * function
   */
  onCloseClick: o.func,
  /**
   * function
   */
  onPanoChanged: o.func,
  /**
   * function
   */
  onPositionChanged: o.func,
  /**
   * function
   */
  onPovChanged: o.func,
  /**
   * function
   */
  onResize: o.func,
  /**
   * function
   */
  onStatusChanged: o.func,
  /**
   * function
   */
  onVisibleChanged: o.func,
  /**
   * function
   */
  onZoomChanged: o.func
};
const s = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
}, r = {
  links(n, e) {
    n.setLinks(e);
  },
  motionTracking(n, e) {
    n.setMotionTracking(e);
  },
  options(n, e) {
    n.setOptions(e);
  },
  pano(n, e) {
    n.setPano(e);
  },
  position(n, e) {
    n.setPosition(e);
  },
  pov(n, e) {
    n.setPov(e);
  },
  visible(n, e) {
    n.setVisible(e);
  },
  zoom(n, e) {
    n.setZoom(e);
  }
};
export {
  l as StreetViewPanorama,
  l as default
};

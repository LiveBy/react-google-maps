var p = Object.defineProperty;
var h = (e, t, i) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var a = (e, t, i) => (h(e, typeof t != "symbol" ? t + "" : t, i), i);
import { jsx as u } from "react/jsx-runtime";
import { i as d } from "../browser-fe3e0b83.js";
import l from "react";
import { P as o } from "../index-e8d4cd90.js";
import { construct as m, componentDidMount as f, componentDidUpdate as P, componentWillUnmount as x } from "../utils/MapChildHelper.js";
import { M as n } from "../constants-4d431d90.js";
const s = class s extends l.PureComponent {
  constructor(t, i) {
    super(t, i), d(
      !!this.context[n],
      "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
    ), m(
      s.propTypes,
      g,
      this.props,
      this.context[n].getStreetView()
    );
  }
  getChildContext() {
    return {
      [n]: this.context[n].getStreetView()
    };
  }
  componentDidMount() {
    f(this, this.context[n].getStreetView(), c);
  }
  componentDidUpdate(t) {
    P(
      this,
      this.context[n].getStreetView(),
      c,
      g,
      t
    );
  }
  componentWillUnmount() {
    x(this);
    const t = this.context[n].getStreetView();
    t && t.setVisible(!1);
  }
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ u("div", { children: t });
  }
  /**
   * Returns the set of navigation links for the Street View panorama.
   * @type Array<StreetViewLink>
   * @public
   */
  getLinks() {
    return this.context[n].getLinks();
  }
  /**
   * Returns the StreetViewLocation of the current panorama.
   * @type StreetViewLocation
   * @public
   */
  getLocation() {
    return this.context[n].getLocation();
  }
  /**
   * Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.
   * @type boolean
   * @public
   */
  getMotionTracking() {
    return this.context[n].getMotionTracking();
  }
  /**
   * Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.
   * @type string
   * @public
   */
  getPano() {
    return this.context[n].getPano();
  }
  /**
   * Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the `pano_changed` event.
   * @type StreetViewPovpano_changed
   * @public
   */
  getPhotographerPov() {
    return this.context[n].getPhotographerPov();
  }
  /**
   * Returns the current `LatLng` position for the Street View panorama.
   * @type LatLngLatLng
   * @public
   */
  getPosition() {
    return this.context[n].getPosition();
  }
  /**
   * Returns the current point of view for the Street View panorama.
   * @type StreetViewPov
   * @public
   */
  getPov() {
    return this.context[n].getPov();
  }
  /**
   * Returns the status of the panorama on completion of the `setPosition()` or `setPano()` request.
   * @type StreetViewStatussetPosition()setPano()
   * @public
   */
  getStatus() {
    return this.context[n].getStatus();
  }
  /**
   * Returns `true` if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
   * @type booleantrue
   * @public
   */
  getVisible() {
    return this.context[n].getVisible();
  }
  /**
   * Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
   * @type number
   * @public
   */
  getZoom() {
    return this.context[n].getZoom();
  }
};
a(s, "propTypes", {
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
}), a(s, "contextTypes", {
  [n]: o.object
}), a(s, "childContextTypes", {
  [n]: o.object
});
let r = s;
const c = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
}, g = {
  links(e, t) {
    e.setLinks(t);
  },
  motionTracking(e, t) {
    e.setMotionTracking(t);
  },
  options(e, t) {
    e.setOptions(t);
  },
  pano(e, t) {
    e.setPano(t);
  },
  position(e, t) {
    e.setPosition(t);
  },
  pov(e, t) {
    e.setPov(t);
  },
  visible(e, t) {
    e.setVisible(t);
  },
  zoom(e, t) {
    e.setZoom(t);
  }
};
export {
  r as StreetViewPanorama,
  r as default
};

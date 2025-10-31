var d = Object.defineProperty;
var u = (n, e, a) => e in n ? d(n, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[e] = a;
var i = (n, e, a) => (u(n, typeof e != "symbol" ? e + "" : e, a), a);
import { jsx as p } from "react/jsx-runtime";
import { i as g } from "../browser-fe3e0b83.js";
import { P as t } from "../index-e8d4cd90.js";
import l from "react";
import { construct as h, componentDidMount as m, componentDidUpdate as f, componentWillUnmount as C } from "../utils/MapChildHelper.js";
import { M as o } from "../constants-e344191b.js";
import { MapContext as y } from "../withGoogleMap.js";
class r extends l.PureComponent {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  fitBounds(...e) {
    return this.context[o].fitBounds(...e);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panBy(...e) {
    return this.context[o].panBy(...e);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panTo(...e) {
    return this.context[o].panTo(...e);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panToBounds(...e) {
    return this.context[o].panToBounds(...e);
  }
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  constructor(e, a) {
    g(
      !!this.context[o],
      "Did you wrap <GoogleMap> component with withGoogleMap() HOC?"
    ), h(x.propTypes, s, this.props, this.context[o]);
  }
  componentDidMount() {
    m(this, this.context[o], c);
  }
  componentDidUpdate(e) {
    f(this, this.context[o], c, s, e);
  }
  componentWillUnmount() {
    C(this);
  }
  render() {
    const { children: e } = this.props;
    return /* @__PURE__ */ p("div", { children: e });
  }
  /**
   * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
   * @type LatLngBoundsnullundefined
   * @public
   */
  getBounds() {
    return this.context[o].getBounds();
  }
  /**
   * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
   * @type LatLngLatLngLatLng
   * @public
   */
  getCenter() {
    return this.context[o].getCenter();
  }
  /**
   * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
   * @type boolean
   * @public
   */
  getClickableIcons() {
    return this.context[o].getClickableIcons();
  }
  /**
   *
   * @type Element
   * @public
   */
  getDiv() {
    return this.context[o].getDiv();
  }
  /**
   * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
   * @type number
   * @public
   */
  getHeading() {
    return this.context[o].getHeading();
  }
  /**
   *
   * @type MapTypeId|string
   * @public
   */
  getMapTypeId() {
    return this.context[o].getMapTypeId();
  }
  /**
   * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
   * @type ProjectionProjectionprojection_changed
   * @public
   */
  getProjection() {
    return this.context[o].getProjection();
  }
  /**
   * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
   * @type StreetViewPanoramaStreetViewPanoramasetStreetView()streetViewControl
   * @public
   */
  getStreetView() {
    return this.context[o].getStreetView();
  }
  /**
   * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
   * @type number045satellitehybridsetTiltsetTilt
   * @public
   */
  getTilt() {
    return this.context[o].getTilt();
  }
  /**
   *
   * @type number
   * @public
   */
  getZoom() {
    return this.context[o].getZoom();
  }
}
i(r, "displayName", "GoogleMap"), i(r, "propTypes", {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: t.arrayOf(t.arrayOf(t.any)),
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: t.any,
  /**
   * @type boolean
   */
  defaultClickableIcons: t.bool,
  /**
   * @type number
   */
  defaultHeading: t.number,
  /**
   * @type MapTypeId|string
   */
  defaultMapTypeId: t.any,
  /**
   * @type MapOptions
   */
  defaultOptions: t.any,
  /**
   * @type StreetViewPanorama
   */
  defaultStreetView: t.any,
  /**
   * @type number
   */
  defaultTilt: t.number,
  /**
   * @type number
   */
  defaultZoom: t.number,
  /**
   * @type LatLng|LatLngLiteral
   */
  center: t.any,
  /**
   * @type boolean
   */
  clickableIcons: t.bool,
  /**
   * @type number
   */
  heading: t.number,
  /**
   * @type MapTypeId|string
   */
  mapTypeId: t.any,
  /**
   * @type MapOptions
   */
  options: t.any,
  /**
   * @type StreetViewPanorama
   */
  streetView: t.any,
  /**
   * @type number
   */
  tilt: t.number,
  /**
   * @type number
   */
  zoom: t.number,
  /**
   * function
   */
  onDblClick: t.func,
  /**
   * function
   */
  onDragEnd: t.func,
  /**
   * function
   */
  onDragStart: t.func,
  /**
   * function
   */
  onMapTypeIdChanged: t.func,
  /**
   * function
   */
  onMouseMove: t.func,
  /**
   * function
   */
  onMouseOut: t.func,
  /**
   * function
   */
  onMouseOver: t.func,
  /**
   * function
   */
  onRightClick: t.func,
  /**
   * function
   */
  onTilesLoaded: t.func,
  /**
   * function
   */
  onBoundsChanged: t.func,
  /**
   * function
   */
  onCenterChanged: t.func,
  /**
   * function
   */
  onClick: t.func,
  /**
   * function
   */
  onDrag: t.func,
  /**
   * function
   */
  onHeadingChanged: t.func,
  /**
   * function
   */
  onIdle: t.func,
  /**
   * function
   */
  onProjectionChanged: t.func,
  /**
   * function
   */
  onResize: t.func,
  /**
   * function
   */
  onTiltChanged: t.func,
  /**
   * function
   */
  onZoomChanged: t.func
}), i(r, "context", y);
const x = r, c = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
}, s = {
  extraMapTypes(n, e) {
    e.forEach((a) => n.mapTypes.set(...a));
  },
  center(n, e) {
    n.setCenter(e);
  },
  clickableIcons(n, e) {
    n.setClickableIcons(e);
  },
  heading(n, e) {
    n.setHeading(e);
  },
  mapTypeId(n, e) {
    n.setMapTypeId(e);
  },
  options(n, e) {
    n.setOptions(e);
  },
  streetView(n, e) {
    n.setStreetView(e);
  },
  tilt(n, e) {
    n.setTilt(e);
  },
  zoom(n, e) {
    n.setZoom(e);
  }
};
export {
  x as GoogleMap,
  r as Map,
  r as default
};

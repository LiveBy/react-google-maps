export { default as BicyclingLayer } from "./components/BicyclingLayer"
export { default as Circle } from "./components/Circle"
export { default as DirectionsRenderer } from "./components/DirectionsRenderer"
export { default as FusionTablesLayer } from "./components/FusionTablesLayer"
export { default as GoogleMap } from "./components/GoogleMap"
export { default as GroundOverlay } from "./components/GroundOverlay"
export { default as InfoWindow } from "./components/InfoWindow"
export { default as KmlLayer } from "./components/KmlLayer"
export { default as Marker } from "./components/Marker"
export { default as OverlayView } from "./components/OverlayView"
export { default as Polygon } from "./components/Polygon"
export { default as Polyline } from "./components/Polyline"
export { default as Rectangle } from "./components/Rectangle"
export { default as StreetViewPanorama } from "./components/StreetViewPanorama"
export { default as TrafficLayer } from "./components/TrafficLayer"
export * as constants from "./constants"
export { default as withGoogleMap } from "./withGoogleMap"
export { default as withScriptjs } from "./withScriptjs"

export const addons = {
  InfoBox: () => import("./components/addons/InfoBox"),
  MarkerClusterer: () => import("./components/addons/MarkerClusterer"),
  MarkerWithLabel: () => import("./components/addons/MarkerWithLabel"),
}

### Map with a DrawingManager

```jsx
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new liveby.maps.LatLng(-34.397, 150.644)}
  >
    <DrawingManager
      defaultDrawingMode={liveby.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: liveby.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            liveby.maps.drawing.OverlayType.CIRCLE,
            liveby.maps.drawing.OverlayType.POLYGON,
            liveby.maps.drawing.OverlayType.POLYLINE,
            liveby.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
);

<MapWithADrawingManager />
```

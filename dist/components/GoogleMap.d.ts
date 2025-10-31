import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
export class Map extends React.PureComponent<any, any, any> {
    static displayName: string;
    static propTypes: {
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
         * @type Array<[id:string, mapType:MapType|*]>
         */
        defaultExtraMapTypes: Array<[id: string, mapType: MapType | any]>;
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultCenter: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        defaultClickableIcons: boolean;
        /**
         * @type number
         */
        defaultHeading: number;
        /**
         * @type MapTypeId|string
         */
        defaultMapTypeId: MapTypeId | string;
        /**
         * @type MapOptions
         */
        defaultOptions: MapOptions;
        /**
         * @type StreetViewPanorama
         */
        defaultStreetView: StreetViewPanorama;
        /**
         * @type number
         */
        defaultTilt: number;
        /**
         * @type number
         */
        defaultZoom: number;
        /**
         * @type LatLng|LatLngLiteral
         */
        center: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        clickableIcons: boolean;
        /**
         * @type number
         */
        heading: number;
        /**
         * @type MapTypeId|string
         */
        mapTypeId: MapTypeId | string;
        /**
         * @type MapOptions
         */
        options: MapOptions;
        /**
         * @type StreetViewPanorama
         */
        streetView: StreetViewPanorama;
        /**
         * @type number
         */
        tilt: number;
        /**
         * @type number
         */
        zoom: number;
        /**
         * function
         */
        onDblClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDragEnd: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDragStart: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMapTypeIdChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMouseMove: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMouseOut: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onRightClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onTilesLoaded: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onBoundsChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onCenterChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDrag: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onHeadingChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onIdle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onProjectionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onResize: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onTiltChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onZoomChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static context: React.Context<null>;
    constructor(props: any, context: any);
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public fitBounds(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panBy(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panTo(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panToBounds(...args: any[]): any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
    /**
     * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
     * @type LatLngBoundsnullundefined
     * @public
     */
    public getBounds(): any;
    /**
     * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
     * @type LatLngLatLngLatLng
     * @public
     */
    public getCenter(): any;
    /**
     * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
     * @type boolean
     * @public
     */
    public getClickableIcons(): any;
    /**
     *
     * @type Element
     * @public
     */
    public getDiv(): any;
    /**
     * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
     * @type number
     * @public
     */
    public getHeading(): any;
    /**
     *
     * @type MapTypeId|string
     * @public
     */
    public getMapTypeId(): any;
    /**
     * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
     * @type ProjectionProjectionprojection_changed
     * @public
     */
    public getProjection(): any;
    /**
     * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
     * @type StreetViewPanoramaStreetViewPanoramasetStreetView()streetViewControl
     * @public
     */
    public getStreetView(): any;
    /**
     * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
     * @type number045satellitehybridsetTiltsetTilt
     * @public
     */
    public getTilt(): any;
    /**
     *
     * @type number
     * @public
     */
    public getZoom(): any;
}
export const GoogleMap: typeof Map;
export default Map;

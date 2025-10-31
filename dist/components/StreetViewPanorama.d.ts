import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
export class StreetViewPanorama extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type Array<StreetViewLink>
         */
        defaultLinks: Array<StreetViewLink>;
        /**
         * @type boolean
         */
        defaultMotionTracking: boolean;
        /**
         * @type StreetViewPanoramaOptions
         */
        defaultOptions: StreetViewPanoramaOptions;
        /**
         * @type string
         */
        defaultPano: string;
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultPosition: LatLng | LatLngLiteral;
        /**
         * @type StreetViewPov
         */
        defaultPov: StreetViewPov;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type number
         */
        defaultZoom: number;
        /**
         * @type Array<StreetViewLink>
         */
        links: Array<StreetViewLink>;
        /**
         * @type boolean
         */
        motionTracking: boolean;
        /**
         * @type StreetViewPanoramaOptions
         */
        options: StreetViewPanoramaOptions;
        /**
         * @type string
         */
        pano: string;
        /**
         * @type LatLng|LatLngLiteral
         */
        position: LatLng | LatLngLiteral;
        /**
         * @type StreetViewPov
         */
        pov: StreetViewPov;
        /**
         * @type boolean
         */
        visible: boolean;
        /**
         * @type number
         */
        zoom: number;
        /**
         * function
         */
        onCloseClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPanoChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPovChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onResize: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onStatusChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onVisibleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onZoomChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    static childContextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    getChildContext(): {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
    /**
     * Returns the set of navigation links for the Street View panorama.
     * @type Array<StreetViewLink>
     * @public
     */
    public getLinks(): any;
    /**
     * Returns the StreetViewLocation of the current panorama.
     * @type StreetViewLocation
     * @public
     */
    public getLocation(): any;
    /**
     * Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.
     * @type boolean
     * @public
     */
    public getMotionTracking(): any;
    /**
     * Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.
     * @type string
     * @public
     */
    public getPano(): any;
    /**
     * Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the `pano_changed` event.
     * @type StreetViewPovpano_changed
     * @public
     */
    public getPhotographerPov(): any;
    /**
     * Returns the current `LatLng` position for the Street View panorama.
     * @type LatLngLatLng
     * @public
     */
    public getPosition(): any;
    /**
     * Returns the current point of view for the Street View panorama.
     * @type StreetViewPov
     * @public
     */
    public getPov(): any;
    /**
     * Returns the status of the panorama on completion of the `setPosition()` or `setPano()` request.
     * @type StreetViewStatussetPosition()setPano()
     * @public
     */
    public getStatus(): any;
    /**
     * Returns `true` if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
     * @type booleantrue
     * @public
     */
    public getVisible(): any;
    /**
     * Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
     * @type number
     * @public
     */
    public getZoom(): any;
}
export default StreetViewPanorama;

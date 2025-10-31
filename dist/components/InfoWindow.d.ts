import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.InfoWindow`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */
export class InfoWindow extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type InfoWindowOptions
         */
        defaultOptions: InfoWindowOptions;
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultPosition: LatLng | LatLngLiteral;
        /**
         * @type number
         */
        defaultZIndex: number;
        /**
         * @type InfoWindowOptions
         */
        options: InfoWindowOptions;
        /**
         * @type LatLng|LatLngLiteral
         */
        position: LatLng | LatLngLiteral;
        /**
         * @type number
         */
        zIndex: number;
        /**
         * function
         */
        onCloseClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDomReady: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onContentChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onZindexChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_INFO_WINDOW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentWillMount(): void;
    containerElement: HTMLDivElement | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
    /**
     *
     * @type LatLng
     * @public
     */
    public getPosition(): any;
    /**
     *
     * @type number
     * @public
     */
    public getZIndex(): any;
}
export default InfoWindow;

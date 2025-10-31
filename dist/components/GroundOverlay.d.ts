import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.GroundOverlay`
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
export class GroundOverlay extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type string
         */
        defaultUrl: string;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
         */
        defaultBounds: PropTypes.Requireable<object>;
        /**
         * @type string
         * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
         */
        url: string;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
         * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
         */
        bounds: PropTypes.Requireable<object>;
        /**
         * @type number
         */
        defaultOpacity: number;
        /**
         * @type number
         */
        opacity: number;
        /**
         * function
         */
        onDblClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_GROUND_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Gets the `LatLngBounds` of this overlay.
     * @type LatLngBoundsLatLngBounds
     * @public
     */
    public getBounds(): any;
    /**
     * Returns the opacity of this ground overlay.
     * @type number
     * @public
     */
    public getOpacity(): any;
    /**
     * Gets the url of the projected image.
     * @type string
     * @public
     */
    public getUrl(): any;
}
export default GroundOverlay;

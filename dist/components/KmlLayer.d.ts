import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
export class KmlLayer extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type KmlLayerOptions
         */
        defaultOptions: KmlLayerOptions;
        /**
         * @type string
         */
        defaultUrl: string;
        /**
         * @type number
         */
        defaultZIndex: number;
        /**
         * @type KmlLayerOptions
         */
        options: KmlLayerOptions;
        /**
         * @type string
         */
        url: string;
        /**
         * @type number
         */
        zIndex: number;
        /**
         * function
         */
        onDefaultViewportChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onStatusChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_KML_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Get the default viewport for the layer being displayed.
     * @type LatLngBounds
     * @public
     */
    public getDefaultViewport(): any;
    /**
     * Get the metadata associated with this layer, as specified in the layer markup.
     * @type KmlLayerMetadata
     * @public
     */
    public getMetadata(): any;
    /**
     * Get the status of the layer, set once the requested document has loaded.
     * @type KmlLayerStatus
     * @public
     */
    public getStatus(): any;
    /**
     * Gets the URL of the KML file being displayed.
     * @type string
     * @public
     */
    public getUrl(): any;
    /**
     * Gets the z-index of the KML Layer.
     * @type number
     * @public
     */
    public getZIndex(): any;
}
export default KmlLayer;

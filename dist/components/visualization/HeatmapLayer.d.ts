import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.visualization.HeatmapLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
export class HeatmapLayer extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
         */
        defaultData: MVCArray<LatLng | WeightedLocation> | Array<LatLng | WeightedLocation>;
        /**
         * @type HeatmapLayerOptions
         */
        defaultOptions: HeatmapLayerOptions;
        /**
         * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
         */
        data: MVCArray<LatLng | WeightedLocation> | Array<LatLng | WeightedLocation>;
        /**
         * @type HeatmapLayerOptions
         */
        options: HeatmapLayerOptions;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_HEATMAP_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Returns the data points currently displayed by this heatmap.
     * @type MVCArray<LatLng|WeightedLocation>
     * @public
     */
    public getData(): any;
}
export default HeatmapLayer;

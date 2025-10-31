import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `MarkerClusterer`
 *
 * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
 */
export class MarkerClusterer extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type boolean
         */
        defaultAverageCenter: boolean;
        /**
         * @type number
         */
        defaultBatchSizeIE: number;
        /**
         * @type number
         */
        defaultBatchSize: number;
        /**
         * @type function
         */
        defaultCalculator: Function;
        /**
         * @type string
         */
        defaultClusterClass: string;
        /**
         * @type boolean
         */
        defaultEnableRetinaIcons: boolean;
        /**
         * @type number
         */
        defaultGridSize: number;
        /**
         * @type boolean
         */
        defaultIgnoreHidden: boolean;
        /**
         * @type string
         */
        defaultImageExtension: string;
        /**
         * @type string
         */
        defaultImagePath: string;
        /**
         * @type Array
         */
        defaultImageSizes: any[];
        /**
         * @type number
         */
        defaultMaxZoom: number;
        /**
         * @type number
         */
        defaultMinimumClusterSize: number;
        /**
         * @type Array
         */
        defaultStyles: any[];
        /**
         * @type string
         */
        defaultTitle: string;
        /**
         * @type boolean
         */
        defaultZoomOnClick: boolean;
        /**
         * @type boolean
         */
        averageCenter: boolean;
        /**
         * @type number
         */
        batchSizeIE: number;
        /**
         * @type number
         */
        batchSize: number;
        /**
         * @type function
         */
        calculator: Function;
        /**
         * @type string
         */
        clusterClass: string;
        /**
         * @type boolean
         */
        enableRetinaIcons: boolean;
        /**
         * @type number
         */
        gridSize: number;
        /**
         * @type boolean
         */
        ignoreHidden: boolean;
        /**
         * @type string
         */
        imageExtension: string;
        /**
         * @type string
         */
        imagePath: string;
        /**
         * @type Array
         */
        imageSizes: any[];
        /**
         * @type number
         */
        maxZoom: number;
        /**
         * @type number
         */
        minimumClusterSize: number;
        /**
         * @type Array
         */
        styles: any[];
        /**
         * @type string
         */
        title: string;
        /**
         * @type boolean
         */
        zoomOnClick: boolean;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClusteringBegin: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClusteringEnd: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMouseOut: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    static childContextTypes: {
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    getChildContext(): {
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
        __SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default MarkerClusterer;

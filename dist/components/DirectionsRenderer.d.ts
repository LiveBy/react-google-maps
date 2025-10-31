import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
export class DirectionsRenderer extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type DirectionsResult
         */
        defaultDirections: DirectionsResult;
        /**
         * @type DirectionsRendererOptions
         */
        defaultOptions: DirectionsRendererOptions;
        /**
         * @type Node
         */
        defaultPanel: Node;
        /**
         * @type number
         */
        defaultRouteIndex: number;
        /**
         * @type DirectionsResult
         */
        directions: DirectionsResult;
        /**
         * @type DirectionsRendererOptions
         */
        options: DirectionsRendererOptions;
        /**
         * @type Node
         */
        panel: Node;
        /**
         * @type number
         */
        routeIndex: number;
        /**
         * function
         */
        onDirectionsChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_DIRECTIONS_RENDERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Returns the renderer's current set of directions.
     * @type DirectionsResult
     * @public
     */
    public getDirections(): any;
    /**
     * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
     * @type Node<div>DirectionsResult
     * @public
     */
    public getPanel(): any;
    /**
     * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
     * @type numberDirectionsRenderer
     * @public
     */
    public getRouteIndex(): any;
}
export default DirectionsRenderer;

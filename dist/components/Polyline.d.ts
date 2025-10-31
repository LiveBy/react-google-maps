import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */
export class Polyline extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type boolean
         */
        defaultDraggable: boolean;
        /**
         * @type boolean
         */
        defaultEditable: boolean;
        /**
         * @type PolylineOptions
         */
        defaultOptions: PolylineOptions;
        /**
         * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
         */
        defaultPath: MVCArray<LatLng> | Array<LatLng | LatLngLiteral>;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type boolean
         */
        draggable: boolean;
        /**
         * @type boolean
         */
        editable: boolean;
        /**
         * @type PolylineOptions
         */
        options: PolylineOptions;
        /**
         * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
         */
        path: MVCArray<LatLng> | Array<LatLng | LatLngLiteral>;
        /**
         * @type boolean
         */
        visible: boolean;
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
        onMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
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
        onMouseUp: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onRightClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDrag: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_POLYLINE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Returns whether this shape can be dragged by the user.
     * @type boolean
     * @public
     */
    public getDraggable(): any;
    /**
     * Returns whether this shape can be edited by the user.
     * @type boolean
     * @public
     */
    public getEditable(): any;
    /**
     * Retrieves the path.
     * @type MVCArray<LatLng>
     * @public
     */
    public getPath(): any;
    /**
     * Returns whether this poly is visible on the map.
     * @type boolean
     * @public
     */
    public getVisible(): any;
}
export default Polyline;

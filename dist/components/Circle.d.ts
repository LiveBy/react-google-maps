import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
export class Circle extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultCenter: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        defaultDraggable: boolean;
        /**
         * @type boolean
         */
        defaultEditable: boolean;
        /**
         * @type CircleOptions
         */
        defaultOptions: CircleOptions;
        /**
         * @type number
         */
        defaultRadius: number;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type LatLng|LatLngLiteral
         */
        center: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        draggable: boolean;
        /**
         * @type boolean
         */
        editable: boolean;
        /**
         * @type CircleOptions
         */
        options: CircleOptions;
        /**
         * @type number
         */
        radius: number;
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
        onRadiusChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_CIRCLE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Gets the `LatLngBounds` of this Circle.
     * @type LatLngBoundsLatLngBounds
     * @public
     */
    public getBounds(): any;
    /**
     * Returns the center of this circle.
     * @type LatLng
     * @public
     */
    public getCenter(): any;
    /**
     * Returns whether this circle can be dragged by the user.
     * @type boolean
     * @public
     */
    public getDraggable(): any;
    /**
     * Returns whether this circle can be edited by the user.
     * @type boolean
     * @public
     */
    public getEditable(): any;
    /**
     * Returns the radius of this circle (in meters).
     * @type number
     * @public
     */
    public getRadius(): any;
    /**
     * Returns whether this circle is visible on the map.
     * @type boolean
     * @public
     */
    public getVisible(): any;
}
export default Circle;

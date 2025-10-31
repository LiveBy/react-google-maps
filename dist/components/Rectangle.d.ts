import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
export class Rectangle extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type LatLngBounds|LatLngBoundsLiteral
         */
        defaultBounds: LatLngBounds | LatLngBoundsLiteral;
        /**
         * @type boolean
         */
        defaultDraggable: boolean;
        /**
         * @type boolean
         */
        defaultEditable: boolean;
        /**
         * @type RectangleOptions
         */
        defaultOptions: RectangleOptions;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type LatLngBounds|LatLngBoundsLiteral
         */
        bounds: LatLngBounds | LatLngBoundsLiteral;
        /**
         * @type boolean
         */
        draggable: boolean;
        /**
         * @type boolean
         */
        editable: boolean;
        /**
         * @type RectangleOptions
         */
        options: RectangleOptions;
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
        onBoundsChanged: PropTypes.Requireable<(...args: any[]) => any>;
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
        __SECRET_RECTANGLE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Returns the bounds of this rectangle.
     * @type LatLngBounds
     * @public
     */
    public getBounds(): any;
    /**
     * Returns whether this rectangle can be dragged by the user.
     * @type boolean
     * @public
     */
    public getDraggable(): any;
    /**
     * Returns whether this rectangle can be edited by the user.
     * @type boolean
     * @public
     */
    public getEditable(): any;
    /**
     * Returns whether this rectangle is visible on the map.
     * @type boolean
     * @public
     */
    public getVisible(): any;
}
export default Rectangle;

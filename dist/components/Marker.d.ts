import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export class Marker extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * For the 2nd argument of `MarkerCluster#addMarker`
         * @see https://github.com/mikesaidani/marker-clusterer-plus
         */
        noRedraw: PropTypes.Requireable<boolean>;
        /**
         * @type Animation
         */
        defaultAnimation: Animation;
        /**
         * @type boolean
         */
        defaultClickable: boolean;
        /**
         * @type string
         */
        defaultCursor: string;
        /**
         * @type boolean
         */
        defaultDraggable: boolean;
        /**
         * @type string|Icon|Symbol
         */
        defaultIcon: string | Icon | Symbol;
        /**
         * @type string|MarkerLabel
         */
        defaultLabel: string | MarkerLabel;
        /**
         * @type number
         */
        defaultOpacity: number;
        /**
         * @type MarkerOptions
         */
        defaultOptions: MarkerOptions;
        /**
         * @type MarkerPlace
         */
        defaultPlace: MarkerPlace;
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultPosition: LatLng | LatLngLiteral;
        /**
         * @type MarkerShape
         */
        defaultShape: MarkerShape;
        /**
         * @type string
         */
        defaultTitle: string;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type number
         */
        defaultZIndex: number;
        /**
         * @type Animation
         */
        animation: Animation;
        /**
         * @type boolean
         */
        clickable: boolean;
        /**
         * @type string
         */
        cursor: string;
        /**
         * @type boolean
         */
        draggable: boolean;
        /**
         * @type string|Icon|Symbol
         */
        icon: string | Icon | Symbol;
        /**
         * @type string|MarkerLabel
         */
        label: string | MarkerLabel;
        /**
         * @type number
         */
        opacity: number;
        /**
         * @type MarkerOptions
         */
        options: MarkerOptions;
        /**
         * @type MarkerPlace
         */
        place: MarkerPlace;
        /**
         * @type LatLng|LatLngLiteral
         */
        position: LatLng | LatLngLiteral;
        /**
         * @type MarkerShape
         */
        shape: MarkerShape;
        /**
         * @type string
         */
        title: string;
        /**
         * @type boolean
         */
        visible: boolean;
        /**
         * @type number
         */
        zIndex: number;
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
        onAnimationChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onClickableChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onCursorChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDrag: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDraggableChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onFlatChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onIconChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onShapeChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onTitleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onVisibleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onZindexChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    static childContextTypes: {
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_MARKER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    getChildContext(): {
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
    /**
     *
     * @type Animation
     * @public
     */
    public getAnimation(): any;
    /**
     *
     * @type boolean
     * @public
     */
    public getClickable(): any;
    /**
     *
     * @type string
     * @public
     */
    public getCursor(): any;
    /**
     *
     * @type boolean
     * @public
     */
    public getDraggable(): any;
    /**
     *
     * @type string|Icon|Symbol
     * @public
     */
    public getIcon(): any;
    /**
     *
     * @type MarkerLabel
     * @public
     */
    public getLabel(): any;
    /**
     *
     * @type number
     * @public
     */
    public getOpacity(): any;
    /**
     *
     * @type MarkerPlace
     * @public
     */
    public getPlace(): any;
    /**
     *
     * @type LatLng
     * @public
     */
    public getPosition(): any;
    /**
     *
     * @type MarkerShape
     * @public
     */
    public getShape(): any;
    /**
     *
     * @type string
     * @public
     */
    public getTitle(): any;
    /**
     *
     * @type boolean
     * @public
     */
    public getVisible(): any;
    /**
     *
     * @type number
     * @public
     */
    public getZIndex(): any;
}
export default Marker;

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.drawing.DrawingManager`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
 */
export class DrawingManager extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type OverlayType
         */
        defaultDrawingMode: OverlayType;
        /**
         * @type DrawingManagerOptions
         */
        defaultOptions: DrawingManagerOptions;
        /**
         * @type OverlayType
         */
        drawingMode: OverlayType;
        /**
         * @type DrawingManagerOptions
         */
        options: DrawingManagerOptions;
        /**
         * function
         */
        onCircleComplete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onMarkerComplete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onOverlayComplete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPolygonComplete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPolylineComplete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onRectangleComplete: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_DRAWING_MANAGER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
    /**
     * Returns the `DrawingManager`'s drawing mode.
     * @type OverlayTypeDrawingManager
     * @public
     */
    public getDrawingMode(): any;
}
export default DrawingManager;

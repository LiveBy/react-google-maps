import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.OverlayView`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
 */
export class OverlayView extends React.PureComponent<any, any, any> {
    static FLOAT_PANE: string;
    static MAP_PANE: string;
    static MARKER_LAYER: string;
    static OVERLAY_LAYER: string;
    static OVERLAY_MOUSE_TARGET: string;
    static propTypes: {
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
         */
        mapPaneName: PropTypes.Requireable<string>;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
         */
        position: PropTypes.Requireable<object>;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
         */
        bounds: PropTypes.Requireable<object>;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
         */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
         */
        getPixelPositionOffset: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    onPositionElement(): void;
    state: {
        __SECRET_OVERLAY_VIEW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    onAdd(): void;
    containerElement: HTMLDivElement | null | undefined;
    draw(): void;
    onRemove(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): false | React.ReactPortal;
    /**
     * Returns the panes in which this OverlayView can be rendered. The panes are not initialized until `onAdd` is called by the API.
     * @type MapPanesonAdd
     * @public
     */
    public getPanes(): any;
    /**
     * Returns the `MapCanvasProjection` object associated with this `OverlayView`. The projection is not initialized until `onAdd` is called by the API.
     * @type MapCanvasProjectionMapCanvasProjectionOverlayViewonAdd
     * @public
     */
    public getProjection(): any;
}
export default OverlayView;

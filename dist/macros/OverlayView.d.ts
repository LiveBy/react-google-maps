import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": { \n  },\n  \"getInstanceFromComponent\": \"this.state[OVERLAY_VIEW]\"\n}";
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
        __jscodeshiftPlaceholder__: null;
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
}
export default OverlayView;

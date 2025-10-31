import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[MARKER]\"\n}";
/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export class Marker extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
        /**
         * For the 2nd argument of `MarkerCluster#addMarker`
         * @see https://github.com/mikesaidani/marker-clusterer-plus
         */
        noRedraw: PropTypes.Requireable<boolean>;
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
}
export default Marker;

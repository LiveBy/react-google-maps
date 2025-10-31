import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"KlassNameOverrride\": \"Marker\",\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[MARKER_WITH_LABEL]\"\n}";
/**
 * A wrapper around `MarkerWithLabel`
 *
 * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
 */
export class MarkerWithLabel extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
        /**
         * It will be `MarkerWithLabel#labelContent`.
         * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * For `MarkerWithLabel`
         * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
         */
        labelAnchor: PropTypes.Requireable<object>;
        /**
         * For `MarkerWithLabel`
         * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
         */
        labelClass: PropTypes.Requireable<string>;
        /**
         * For `MarkerWithLabel`. This is for native JS style object, so you may
         * expect some React shorthands for inline styles not working here.
         * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
         */
        labelStyle: PropTypes.Requireable<object>;
        /**
         * For `MarkerWithLabel`
         * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
         */
        labelVisible: PropTypes.Requireable<boolean>;
        /**
         * For the 2nd argument of `MarkerCluster#addMarker`
         * @see https://github.com/mikesaidani/marker-clusterer-plus
         */
        noRedraw: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        labelVisible: boolean;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_MARKER_WITH_LABEL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    containerElement: HTMLDivElement;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export default MarkerWithLabel;

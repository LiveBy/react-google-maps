import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[GROUND_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.GroundOverlay`
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
export class GroundOverlay extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
        /**
         * @type string
         */
        defaultUrl: string;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
         */
        defaultBounds: PropTypes.Requireable<object>;
        /**
         * @type string
         * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
         */
        url: string;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
         * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
         */
        bounds: PropTypes.Requireable<object>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_GROUND_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
}
export default GroundOverlay;

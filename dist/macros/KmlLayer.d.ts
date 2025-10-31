import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onDefaultViewportChanged\": \"defaultviewport_changed\"\n  },\n  \"getInstanceFromComponent\": \"this.state[KML_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
export class KmlLayer extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_KML_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
}
export default KmlLayer;

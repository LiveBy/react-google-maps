import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onCloseClick\": \"closeclick\"\n  },\n  \"getInstanceFromComponent\": \"this.context[MAP]\"\n}";
/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
export class StreetViewPanorama extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    static childContextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    getChildContext(): {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default StreetViewPanorama;

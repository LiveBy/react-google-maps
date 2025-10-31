import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"prohibitedPropNames\": [\n    \"content\"\n  ],\n  \"eventMapOverrides\": {\n    \"onCloseClick\": \"closeclick\",\n    \"onDomReady\": \"domready\"\n  },\n  \"getInstanceFromComponent\": \"this.state[INFO_WINDOW]\"\n}";
/**
 * A wrapper around `google.maps.InfoWindow`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */
export class InfoWindow extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_INFO_WINDOW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentWillMount(): void;
    containerElement: HTMLDivElement | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export default InfoWindow;

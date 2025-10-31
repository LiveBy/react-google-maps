import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n  },\n  \"getInstanceFromComponent\": \"this.state[SEARCH_BOX]\"\n}";
/**
 * A wrapper around `google.maps.places.SearchBox` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
export class SearchBox extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
        /**
         * Where to put `<SearchBox>` inside a `<GoogleMap>`
         *
         * @example google.maps.ControlPosition.TOP_LEFT
         * @type number
         */
        controlPosition: number;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        __SECRET_SEARCH_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
    };
    componentWillMount(): void;
    containerElement: HTMLDivElement | undefined;
    componentDidMount(): void;
    componentWillUpdate(nextProp: any): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    handleInitializeSearchBox(): any;
    handleMountAtControlPosition(): void;
    mountControlIndex: any;
    handleUnmountAtControlPosition(): void;
    render(): React.ReactPortal;
}
export default SearchBox;

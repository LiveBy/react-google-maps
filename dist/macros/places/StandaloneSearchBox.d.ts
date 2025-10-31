import { default as React } from 'react';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n  },\n  \"getInstanceFromComponent\": \"this.state[SEARCH_BOX]\"\n}";
export const StandaloneSearchBox: typeof SearchBox;
export default StandaloneSearchBox;
/**
 * A wrapper around `google.maps.places.SearchBox` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
declare class SearchBox extends React.PureComponent<any, any, any> {
    static displayName: string;
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        __SECRET_SEARCH_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): any;
}

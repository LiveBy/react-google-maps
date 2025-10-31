import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.places.SearchBox` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
export class SearchBox extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * Where to put `<SearchBox>` inside a `<GoogleMap>`
         *
         * @example google.maps.ControlPosition.TOP_LEFT
         * @type number
         */
        controlPosition: number;
        /**
         * @type LatLngBounds|LatLngBoundsLiteral
         */
        defaultBounds: LatLngBounds | LatLngBoundsLiteral;
        /**
         * @type LatLngBounds|LatLngBoundsLiteral
         */
        bounds: LatLngBounds | LatLngBoundsLiteral;
        /**
         * function
         */
        onPlacesChanged: PropTypes.Requireable<(...args: any[]) => any>;
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
    containerElement: HTMLDivElement | null | undefined;
    componentDidMount(): void;
    componentWillUpdate(nextProp: any): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    handleInitializeSearchBox(): any;
    handleMountAtControlPosition(): void;
    mountControlIndex: any;
    handleUnmountAtControlPosition(): void;
    render(): false | React.ReactPortal;
    /**
     * Returns the bounds to which query predictions are biased.
     * @type LatLngBounds
     * @public
     */
    public getBounds(): any;
    /**
     * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
     * @type Array<PlaceResult>nullplaces_changed
     * @public
     */
    public getPlaces(): any;
}
export default SearchBox;

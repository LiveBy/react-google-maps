import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
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
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        __SECRET_SEARCH_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): any;
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

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMapTypeIdChanged\": \"maptypeid_changed\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onRightClick\": \"rightclick\",\n    \"onTilesLoaded\": \"tilesloaded\"\n  },\n  \"getInstanceFromComponent\": \"this.context[MAP]\"\n}";
/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
export class Map extends React.PureComponent<any, any, any> {
    static displayName: string;
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
        /**
         * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
         * @type Array<[id:string, mapType:MapType|*]>
         */
        defaultExtraMapTypes: Array<[id: string, mapType: MapType | any]>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public fitBounds(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panBy(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panTo(...args: any[]): any;
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public
     */
    public panToBounds(...args: any[]): any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export const GoogleMap: typeof Map;
export default Map;

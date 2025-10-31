import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `InfoBox`
 *
 * @see http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
 */
export class InfoBox extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type InfoBoxOptions
         */
        defaultOptions: InfoBoxOptions;
        /**
         * @type LatLng|LatLngLiteral
         */
        defaultPosition: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        defaultVisible: boolean;
        /**
         * @type number
         */
        defaultZIndex: number;
        /**
         * @type InfoBoxOptions
         */
        options: InfoBoxOptions;
        /**
         * @type LatLng|LatLngLiteral
         */
        position: LatLng | LatLngLiteral;
        /**
         * @type boolean
         */
        visible: boolean;
        /**
         * @type number
         */
        zIndex: number;
        /**
         * function
         */
        onCloseClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onDomReady: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onContentChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * function
         */
        onZindexChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
        __SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        __SECRET_INFO_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
    };
    componentWillMount(): void;
    componentDidMount(): void;
    content: HTMLDivElement | undefined;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): any;
    /**
     *
     * @type LatLng
     */
    getPosition(): any;
    /**
     *
     * @type boolean
     */
    getVisible(): any;
    /**
     *
     * @type number
     */
    getZIndex(): any;
}
export default InfoBox;

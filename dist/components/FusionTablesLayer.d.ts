import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.FusionTablesLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
 */
export class FusionTablesLayer extends React.PureComponent<any, any, any> {
    static propTypes: {
        /**
         * @type FusionTablesLayerOptions
         */
        defaultOptions: FusionTablesLayerOptions;
        /**
         * @type FusionTablesLayerOptions
         */
        options: FusionTablesLayerOptions;
        /**
         * function
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_FUSION_TABLES_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
}
export default FusionTablesLayer;

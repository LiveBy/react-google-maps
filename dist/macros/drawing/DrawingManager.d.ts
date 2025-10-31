import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export const __jscodeshiftPlaceholder__: "{\n  \"eventMapOverrides\": {\n    \"onCircleComplete\": \"circlecomplete\",\n    \"onMarkerComplete\": \"markercomplete\",\n    \"onOverlayComplete\": \"overlaycomplete\",\n    \"onPolygonComplete\": \"polygoncomplete\",\n    \"onPolylineComplete\": \"polylinecomplete\",\n    \"onRectangleComplete\": \"rectanglecomplete\"\n  },\n  \"getInstanceFromComponent\": \"this.state[DRAWING_MANAGER]\"\n}";
/**
 * A wrapper around `google.maps.drawing.DrawingManager`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
 */
export class DrawingManager extends React.PureComponent<any, any, any> {
    static propTypes: {
        __jscodeshiftPlaceholder__: null;
    };
    static contextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    constructor(props: any, context: any);
    state: {
        __SECRET_DRAWING_MANAGER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): boolean;
}
export default DrawingManager;

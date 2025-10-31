import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export function Marker(props: any): import("react/jsx-runtime").JSX.Element;
export namespace Marker {
    namespace propTypes {
        let noRedraw: PropTypes.Requireable<boolean>;
        let defaultAnimation: Animation;
        let defaultClickable: boolean;
        let defaultCursor: string;
        let defaultDraggable: boolean;
        let defaultIcon: string | Icon | Symbol;
        let defaultLabel: string | MarkerLabel;
        let defaultOpacity: number;
        let defaultOptions: MarkerOptions;
        let defaultPlace: MarkerPlace;
        let defaultPosition: LatLng | LatLngLiteral;
        let defaultShape: MarkerShape;
        let defaultTitle: string;
        let defaultVisible: boolean;
        let defaultZIndex: number;
        let animation: Animation;
        let clickable: boolean;
        let cursor: string;
        let draggable: boolean;
        let icon: string | Icon | Symbol;
        let label: string | MarkerLabel;
        let opacity: number;
        let options: MarkerOptions;
        let place: MarkerPlace;
        let position: LatLng | LatLngLiteral;
        let shape: MarkerShape;
        let title: string;
        let visible: boolean;
        let zIndex: number;
        let onDblClick: PropTypes.Requireable<(...args: any[]) => any>;
        let onDragEnd: PropTypes.Requireable<(...args: any[]) => any>;
        let onDragStart: PropTypes.Requireable<(...args: any[]) => any>;
        let onMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
        let onMouseOut: PropTypes.Requireable<(...args: any[]) => any>;
        let onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
        let onMouseUp: PropTypes.Requireable<(...args: any[]) => any>;
        let onRightClick: PropTypes.Requireable<(...args: any[]) => any>;
        let onAnimationChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
        let onClickableChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onCursorChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onDrag: PropTypes.Requireable<(...args: any[]) => any>;
        let onDraggableChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onFlatChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onIconChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onShapeChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onTitleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onVisibleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onZindexChanged: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default Marker;

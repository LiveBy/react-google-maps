import { default as PropTypes } from 'prop-types';
/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
export function StreetViewPanorama(props: any): import("react/jsx-runtime").JSX.Element;
export namespace StreetViewPanorama {
    namespace propTypes {
        let defaultLinks: Array<StreetViewLink>;
        let defaultMotionTracking: boolean;
        let defaultOptions: StreetViewPanoramaOptions;
        let defaultPano: string;
        let defaultPosition: LatLng | LatLngLiteral;
        let defaultPov: StreetViewPov;
        let defaultVisible: boolean;
        let defaultZoom: number;
        let links: Array<StreetViewLink>;
        let motionTracking: boolean;
        let options: StreetViewPanoramaOptions;
        let pano: string;
        let position: LatLng | LatLngLiteral;
        let pov: StreetViewPov;
        let visible: boolean;
        let zoom: number;
        let onCloseClick: PropTypes.Requireable<(...args: any[]) => any>;
        let onPanoChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onPositionChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onPovChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onResize: PropTypes.Requireable<(...args: any[]) => any>;
        let onStatusChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onVisibleChanged: PropTypes.Requireable<(...args: any[]) => any>;
        let onZoomChanged: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default StreetViewPanorama;

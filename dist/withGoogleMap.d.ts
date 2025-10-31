import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export function withGoogleMap(BaseComponent: any): {
    (props: any): React.DetailedReactHTMLElement<{}, HTMLElement>;
    displayName: string;
    propTypes: {
        containerElement: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        mapElement: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export const MapContext: React.Context<null>;
export default withGoogleMap;

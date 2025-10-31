import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export function withGoogleMap(BaseComponent: any): {
    new (props: any): {
        state: {
            map: null;
        };
        getChildContext(): {
            __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
        };
        componentWillMount(): void;
        handleComponentMount: (node: any) => void;
        render(): React.DetailedReactHTMLElement<{}, HTMLElement>;
        context: unknown;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    new (props: any, context: any): {
        state: {
            map: null;
        };
        getChildContext(): {
            __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null;
        };
        componentWillMount(): void;
        handleComponentMount: (node: any) => void;
        render(): React.DetailedReactHTMLElement<{}, HTMLElement>;
        context: unknown;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    displayName: string;
    propTypes: {
        containerElement: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        mapElement: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
    childContextTypes: {
        __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.Requireable<object>;
    };
    contextType?: React.Context<any> | undefined;
};
export default withGoogleMap;

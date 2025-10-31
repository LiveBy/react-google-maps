"use strict";var u=Object.defineProperty;var l=(n,e,t)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("react/jsx-runtime"),M=require("../browser-99223509.cjs"),m=require("react"),a=require("../index-5d68b4f3.cjs"),i=require("../utils/MapChildHelper.js"),o=require("../constants-c61a5d3d.cjs"),y=`{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMapTypeIdChanged": "maptypeid_changed",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onRightClick": "rightclick",
    "onTilesLoaded": "tilesloaded"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`;class s extends m.PureComponent{fitBounds(...e){return this.context[o.MAP].fitBounds(...e)}panBy(...e){return this.context[o.MAP].panBy(...e)}panTo(...e){return this.context[o.MAP].panTo(...e)}panToBounds(...e){return this.context[o.MAP].panToBounds(...e)}constructor(e,t){super(e,t),M.invariant(!!this.context[o.MAP],"Did you wrap <GoogleMap> component with withGoogleMap() HOC?"),i.construct(d.propTypes,c,this.props,this.context[o.MAP])}componentDidMount(){i.componentDidMount(this,this.context[o.MAP],p)}componentDidUpdate(e){i.componentDidUpdate(this,this.context[o.MAP],p,c,e)}componentWillUnmount(){i.componentWillUnmount(this)}render(){const{children:e}=this.props;return h.jsx("div",{children:e})}}r(s,"displayName","GoogleMap"),r(s,"propTypes",{__jscodeshiftPlaceholder__:null,defaultExtraMapTypes:a.PropTypes.arrayOf(a.PropTypes.arrayOf(a.PropTypes.any))}),r(s,"contextTypes",{[o.MAP]:a.PropTypes.object});const d=s,p={},c={extraMapTypes(n,e){e.forEach(t=>n.mapTypes.set(...t))}};exports.GoogleMap=d;exports.Map=s;exports.__jscodeshiftPlaceholder__=y;exports.default=s;

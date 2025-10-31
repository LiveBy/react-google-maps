"use strict";var p=Object.defineProperty;var h=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>(h(s,typeof e!="symbol"?e+"":e,t),t);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../browser-4026cc69.cjs"),y=require("react"),n=require("../index-5d68b4f3.cjs"),a=require("../utils/MapChildHelper.js"),o=require("../constants-c61a5d3d.cjs"),f=`{
  "eventMapOverrides": {
    "onDblClick": "dblclick"
  },
  "getInstanceFromComponent": "this.state[GROUND_LAYER]"
}`,r=class r extends y.PureComponent{constructor(e,t){super(e,t),m.warning(!e.url||!e.bounds,`
For GroundOveray, url and bounds are passed in to constructor and are immutable
 after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (
 See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)
 Hence, use the corresponding two props provided by \`react-google-maps\`.
 They're prefixed with _default_ (defaultUrl, defaultBounds).

 In some cases, you'll need the GroundOverlay component to reflect the changes
 of url and bounds. You can leverage the React's key property to remount the
 component. Typically, just \`key={url}\` would serve your need.
 See https://github.com/tomchentw/react-google-maps/issues/655
`);const l=new google.maps.GroundOverlay(e.defaultUrl||e.url,e.defaultBounds||e.bounds);a.construct(r.propTypes,d,this.props,l),l.setMap(this.context[o.MAP]),this.state={[o.GROUND_LAYER]:l}}componentDidMount(){a.componentDidMount(this,this.state[o.GROUND_LAYER],i)}componentDidUpdate(e){a.componentDidUpdate(this,this.state[o.GROUND_LAYER],i,d,e)}componentWillUnmount(){a.componentWillUnmount(this);const e=this.state[o.GROUND_LAYER];e&&e.setMap(null)}render(){return!1}};u(r,"propTypes",{__jscodeshiftPlaceholder__:null,defaultUrl:n.PropTypes.string,defaultBounds:n.PropTypes.object,url:n.PropTypes.string,bounds:n.PropTypes.object}),u(r,"contextTypes",{[o.MAP]:n.PropTypes.object});let c=r;const i={},d={};exports.GroundOverlay=c;exports.__jscodeshiftPlaceholder__=f;exports.default=c;

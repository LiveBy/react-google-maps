"use strict";var d=Object.defineProperty;var y=(n,e,s)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var i=(n,e,s)=>(y(n,typeof e!="symbol"?e+"":e,s),s);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("../browser-4026cc69.cjs"),m=require("react"),t=require("../index-5d68b4f3.cjs"),a=require("../utils/MapChildHelper.js"),o=require("../constants-c61a5d3d.cjs"),r=class r extends m.PureComponent{constructor(e,s){super(e,s),h.warning(!e.url||!e.bounds,`
For GroundOveray, url and bounds are passed in to constructor and are immutable
 after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (
 See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)
 Hence, use the corresponding two props provided by \`react-google-maps\`.
 They're prefixed with _default_ (defaultUrl, defaultBounds).

 In some cases, you'll need the GroundOverlay component to reflect the changes
 of url and bounds. You can leverage the React's key property to remount the
 component. Typically, just \`key={url}\` would serve your need.
 See https://github.com/tomchentw/react-google-maps/issues/655
`);const c=new google.maps.GroundOverlay(e.defaultUrl||e.url,e.defaultBounds||e.bounds);a.construct(r.propTypes,p,this.props,c),c.setMap(this.context[o.MAP]),this.state={[o.GROUND_LAYER]:c}}componentDidMount(){a.componentDidMount(this,this.state[o.GROUND_LAYER],l)}componentDidUpdate(e){a.componentDidUpdate(this,this.state[o.GROUND_LAYER],l,p,e)}componentWillUnmount(){a.componentWillUnmount(this);const e=this.state[o.GROUND_LAYER];e&&e.setMap(null)}render(){return!1}getBounds(){return this.state[o.GROUND_LAYER].getBounds()}getOpacity(){return this.state[o.GROUND_LAYER].getOpacity()}getUrl(){return this.state[o.GROUND_LAYER].getUrl()}};i(r,"propTypes",{defaultUrl:t.PropTypes.string,defaultBounds:t.PropTypes.object,url:t.PropTypes.string,bounds:t.PropTypes.object,defaultOpacity:t.PropTypes.number,opacity:t.PropTypes.number,onDblClick:t.PropTypes.func,onClick:t.PropTypes.func}),i(r,"contextTypes",{[o.MAP]:t.PropTypes.object});let u=r;const l={onDblClick:"dblclick",onClick:"click"},p={opacity(n,e){n.setOpacity(e)}};exports.GroundOverlay=u;exports.default=u;

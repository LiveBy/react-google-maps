"use strict";var l=Object.defineProperty;var d=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>(d(s,typeof e!="symbol"?e+"":e,t),t);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("react"),m=require("../index-5d68b4f3.cjs"),r=require("../utils/MapChildHelper.js"),o=require("../constants-c61a5d3d.cjs"),M=`{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[POLYLINE]"
}`,n=class n extends h.PureComponent{constructor(e,t){super(e,t);const i=new google.maps.Polyline;r.construct(n.propTypes,a,this.props,i),i.setMap(this.context[o.MAP]),this.state={[o.POLYLINE]:i}}componentDidMount(){r.componentDidMount(this,this.state[o.POLYLINE],p)}componentDidUpdate(e){r.componentDidUpdate(this,this.state[o.POLYLINE],p,a,e)}componentWillUnmount(){r.componentWillUnmount(this);const e=this.state[o.POLYLINE];e&&e.setMap(null)}render(){return!1}};u(n,"propTypes",{__jscodeshiftPlaceholder__:null}),u(n,"contextTypes",{[o.MAP]:m.PropTypes.object});let c=n;const p={},a={};exports.Polyline=c;exports.__jscodeshiftPlaceholder__=M;exports.default=c;

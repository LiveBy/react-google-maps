"use strict";var d=Object.defineProperty;var m=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>(m(n,typeof e!="symbol"?e+"":e,t),t);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("../../browser-99223509.cjs"),M=require("react"),h=require("../../index-5d68b4f3.cjs"),r=require("../../utils/MapChildHelper.js"),o=require("../../constants-c61a5d3d.cjs"),A=`{
  "eventMapOverrides": {
    "onCircleComplete": "circlecomplete",
    "onMarkerComplete": "markercomplete",
    "onOverlayComplete": "overlaycomplete",
    "onPolygonComplete": "polygoncomplete",
    "onPolylineComplete": "polylinecomplete",
    "onRectangleComplete": "rectanglecomplete"
  },
  "getInstanceFromComponent": "this.state[DRAWING_MANAGER]"
}`,s=class s extends M.PureComponent{constructor(e,t){super(e,t),u.invariant(google.maps.drawing,'Did you include "libraries=drawing" in the URL?');const i=new google.maps.drawing.DrawingManager;r.construct(s.propTypes,a,this.props,i),i.setMap(this.context[o.MAP]),this.state={[o.DRAWING_MANAGER]:i}}componentDidMount(){r.componentDidMount(this,this.state[o.DRAWING_MANAGER],p)}componentDidUpdate(e){r.componentDidUpdate(this,this.state[o.DRAWING_MANAGER],p,a,e)}componentWillUnmount(){r.componentWillUnmount(this);const e=this.state[o.DRAWING_MANAGER];e&&e.setMap(null)}render(){return!1}};c(s,"propTypes",{__jscodeshiftPlaceholder__:null}),c(s,"contextTypes",{[o.MAP]:h.PropTypes.object});let l=s;const p={},a={};exports.DrawingManager=l;exports.__jscodeshiftPlaceholder__=A;exports.default=l;

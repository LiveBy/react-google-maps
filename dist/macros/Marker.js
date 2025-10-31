"use strict";var R=Object.defineProperty;var h=(n,e,o)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var i=(n,e,o)=>(h(n,typeof e!="symbol"?e+"":e,o),o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const M=require("react/jsx-runtime"),m=require("react"),c=require("../index-5d68b4f3.cjs"),p=require("../utils/MapChildHelper.js"),t=require("../constants-c61a5d3d.cjs"),C=`{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[MARKER]"
}`,s=class s extends m.PureComponent{constructor(e,o){super(e,o);const r=new google.maps.Marker;p.construct(s.propTypes,d,this.props,r);const u=this.context[t.MARKER_CLUSTERER];u?u.addMarker(r,!!this.props.noRedraw):r.setMap(this.context[t.MAP]),this.state={[t.MARKER]:r}}getChildContext(){return{[t.ANCHOR]:this.context[t.ANCHOR]||this.state[t.MARKER]}}componentDidMount(){p.componentDidMount(this,this.state[t.MARKER],l)}componentDidUpdate(e){p.componentDidUpdate(this,this.state[t.MARKER],l,d,e)}componentWillUnmount(){p.componentWillUnmount(this);const e=this.state[t.MARKER];if(e){const o=this.context[t.MARKER_CLUSTERER];o&&o.removeMarker(e,!!this.props.noRedraw),e.setMap(null)}}render(){const{children:e}=this.props;return M.jsx("div",{children:e})}};i(s,"propTypes",{__jscodeshiftPlaceholder__:null,noRedraw:c.PropTypes.bool}),i(s,"contextTypes",{[t.MAP]:c.PropTypes.object,[t.MARKER_CLUSTERER]:c.PropTypes.object}),i(s,"childContextTypes",{[t.ANCHOR]:c.PropTypes.object});let a=s;const l={},d={};exports.Marker=a;exports.__jscodeshiftPlaceholder__=C;exports.default=a;

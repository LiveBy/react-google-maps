"use strict";var b=Object.defineProperty;var R=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var a=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("react"),n=require("../../index-5d68b4f3.cjs"),M=require("../../markerwithlabel-5ada69ed.cjs"),E=require("../../index-d7652fce.cjs"),i=require("../../utils/MapChildHelper.js"),s=require("../../constants-c61a5d3d.cjs"),_=`{
  "KlassNameOverrride": "Marker",
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
  "getInstanceFromComponent": "this.state[MARKER_WITH_LABEL]"
}`,r=class r extends d.PureComponent{constructor(e,o){super(e,o);const m=M.makeMarkerWithLabel(google.maps),l=new m;i.construct(r.propTypes,h,this.props,l);const p=this.context[s.MARKER_CLUSTERER];p?p.addMarker(l,!!this.props.noRedraw):l.setMap(this.context[s.MAP]),this.state={[s.MARKER_WITH_LABEL]:l},this.containerElement=document.createElement("div")}componentDidMount(){i.componentDidMount(this,this.state[s.MARKER_WITH_LABEL],u),this.state[s.MARKER_WITH_LABEL].set("labelContent",this.containerElement)}componentDidUpdate(e){i.componentDidUpdate(this,this.state[s.MARKER_WITH_LABEL],u,h,e)}componentWillUnmount(){i.componentWillUnmount(this);const e=this.state[s.MARKER_WITH_LABEL];if(e){const o=this.context[s.MARKER_CLUSTERER];o&&o.removeMarker(e,!!this.props.noRedraw),e.setMap(null)}}render(){return!!this.containerElement&&E.ReactDOM.createPortal(d.Children.only(this.props.children),this.containerElement)}};a(r,"propTypes",{__jscodeshiftPlaceholder__:null,children:n.PropTypes.node,labelAnchor:n.PropTypes.object,labelClass:n.PropTypes.string,labelStyle:n.PropTypes.object,labelVisible:n.PropTypes.bool,noRedraw:n.PropTypes.bool}),a(r,"defaultProps",{labelVisible:!0}),a(r,"contextTypes",{[s.MAP]:n.PropTypes.object,[s.MARKER_CLUSTERER]:n.PropTypes.object});let c=r;const u={},h={labelAnchor(t,e){t.set("labelAnchor",e)},labelClass(t,e){t.set("labelClass",e)},labelStyle(t,e){t.set("labelStyle",e)},labelVisible(t,e){t.set("labelVisible",e)}};exports.MarkerWithLabel=c;exports.__jscodeshiftPlaceholder__=_;exports.default=c;

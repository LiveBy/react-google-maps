"use strict";var h=Object.defineProperty;var m=(t,e,o)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var a=(t,e,o)=>(m(t,typeof e!="symbol"?e+"":e,o),o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const O=require("../browser-99223509.cjs"),_=require("../index-c9c79dc5.cjs"),p=require("react"),M=require("../index-d7652fce.cjs"),l=require("../index-5d68b4f3.cjs"),i=require("../utils/MapChildHelper.js"),n=require("../constants-c61a5d3d.cjs"),N=`{
  "prohibitedPropNames": [
    "content"
  ],
  "eventMapOverrides": {
    "onCloseClick": "closeclick",
    "onDomReady": "domready"
  },
  "getInstanceFromComponent": "this.state[INFO_WINDOW]"
}`,s=class s extends p.PureComponent{constructor(e,o){super(e,o);const c=new google.maps.InfoWindow;i.construct(s.propTypes,u,this.props,c),c.setMap(this.context[n.MAP]),this.state={[n.INFO_WINDOW]:c}}componentWillMount(){!_.canUseDOM||this.containerElement||(this.containerElement=document.createElement("div"))}componentDidMount(){i.componentDidMount(this,this.state[n.INFO_WINDOW],d),this.state[n.INFO_WINDOW].setContent(this.containerElement),I(this.state[n.INFO_WINDOW],this.context[n.ANCHOR])}componentDidUpdate(e){i.componentDidUpdate(this,this.state[n.INFO_WINDOW],d,u,e)}componentWillUnmount(){i.componentWillUnmount(this);const e=this.state[n.INFO_WINDOW];e&&e.setMap(null)}render(){return M.ReactDOM.createPortal(p.Children.only(this.props.children),this.containerElement)}};a(s,"propTypes",{__jscodeshiftPlaceholder__:null}),a(s,"contextTypes",{[n.MAP]:l.PropTypes.object,[n.ANCHOR]:l.PropTypes.object});let r=s;const I=(t,e)=>{e?t.open(t.getMap(),e):t.getPosition()?t.open(t.getMap()):O.invariant(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")},d={},u={};exports.InfoWindow=r;exports.__jscodeshiftPlaceholder__=N;exports.default=r;

var u = Object.defineProperty;
var f = (n, o, t) => o in n ? u(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var l = (n, o, t) => (f(n, typeof o != "symbol" ? o + "" : o, t), t);
import { _ as P } from "../../lodash-9da1000b.js";
import { i as C } from "../../browser-fe3e0b83.js";
import { c as E } from "../../index-22f0280c.js";
import i from "react";
import { R as c } from "../../index-87ad0b90.js";
import { P as s } from "../../index-e8d4cd90.js";
import { componentDidMount as M, componentDidUpdate as g, componentWillUnmount as A, construct as U } from "../../utils/MapChildHelper.js";
import { M as a, S as e } from "../../constants-e344191b.js";
const r = class r extends i.PureComponent {
  constructor() {
    super(...arguments);
    l(this, "state", {
      [e]: null
    });
  }
  componentWillMount() {
    !E || this.containerElement || (C(
      google.maps.places,
      'Did you include "libraries=places" in the URL?'
    ), this.containerElement = document.createElement("div"));
  }
  componentDidMount() {
    let t = this.state[e];
    i.version.match(/^16/) && (t = this.handleInitializeSearchBox()), M(this, t, m), this.handleMountAtControlPosition();
  }
  componentWillUpdate(t) {
    this.props.controlPosition !== t.controlPosition && this.handleUnmountAtControlPosition();
  }
  componentDidUpdate(t) {
    g(
      this,
      this.state[e],
      m,
      d,
      t
    ), this.props.children !== t.children && this.handleRenderChildToContainerElement(), this.props.controlPosition !== t.controlPosition && this.handleMountAtControlPosition();
  }
  componentWillUnmount() {
    A(this), this.handleUnmountAtControlPosition(), !i.version.match(/^16/) && this.containerElement && (c.unmountComponentAtNode(this.containerElement), this.containerElement = null);
  }
  handleInitializeSearchBox() {
    const t = new google.maps.places.SearchBox(
      this.containerElement.querySelector("input")
    );
    return U(r.propTypes, d, this.props, t), this.setState({
      [e]: t
    }), t;
  }
  handleMountAtControlPosition() {
    p(this.props.controlPosition) && (this.mountControlIndex = -1 + this.context[a].controls[this.props.controlPosition].push(
      this.containerElement.firstChild
    ));
  }
  handleUnmountAtControlPosition() {
    if (p(this.props.controlPosition)) {
      const t = this.context[a].controls[this.props.controlPosition].removeAt(this.mountControlIndex);
      t !== void 0 && this.containerElement.appendChild(t);
    }
  }
  render() {
    return i.version.match(/^16/) ? c.createPortal(
      i.Children.only(this.props.children),
      this.containerElement
    ) : !1;
  }
  /**
   * Returns the bounds to which query predictions are biased.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[e].getBounds();
  }
  /**
   * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
   * @type Array<PlaceResult>nullplaces_changed
   * @public
   */
  getPlaces() {
    return this.state[e].getPlaces();
  }
};
l(r, "propTypes", {
  /**
   * Where to put `<SearchBox>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: s.number,
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: s.any,
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: s.any,
  /**
   * function
   */
  onPlacesChanged: s.func
}), l(r, "contextTypes", {
  [a]: s.object
});
let h = r;
const p = P.isNumber, m = {
  onPlacesChanged: "places_changed"
}, d = {
  bounds(n, o) {
    n.setBounds(o);
  }
};
export {
  h as SearchBox,
  h as default
};

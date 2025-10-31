var m = Object.defineProperty;
var u = (n, t, e) => t in n ? m(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => (u(n, typeof t != "symbol" ? t + "" : t, e), e);
import { i as h } from "../../browser-fe3e0b83.js";
import c from "react";
import { R as g } from "../../index-87ad0b90.js";
import { P as i } from "../../index-e8d4cd90.js";
import { construct as f, componentDidMount as y, componentDidUpdate as D, componentWillUnmount as P } from "../../utils/MapChildHelper.js";
import { S as o } from "../../constants-e344191b.js";
const s = class s extends c.PureComponent {
  constructor() {
    super(...arguments);
    a(this, "state", {
      [o]: null
    });
  }
  componentDidMount() {
    h(
      google.maps.places,
      'Did you include "libraries=places" in the URL?'
    );
    const e = g.findDOMNode(this), p = new google.maps.places.SearchBox(
      e.querySelector("input") || e
    );
    f(s.propTypes, l, this.props, p), y(this, p, d), this.setState({
      [o]: p
    });
  }
  componentDidUpdate(e) {
    D(
      this,
      this.state[o],
      d,
      l,
      e
    );
  }
  componentWillUnmount() {
    P(this);
  }
  render() {
    return c.Children.only(this.props.children);
  }
  /**
   * Returns the bounds to which query predictions are biased.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[o].getBounds();
  }
  /**
   * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
   * @type Array<PlaceResult>nullplaces_changed
   * @public
   */
  getPlaces() {
    return this.state[o].getPlaces();
  }
};
a(s, "displayName", "StandaloneSearchBox"), a(s, "propTypes", {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: i.any,
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: i.any,
  /**
   * function
   */
  onPlacesChanged: i.func
});
let r = s;
const x = r, d = {
  onPlacesChanged: "places_changed"
}, l = {
  bounds(n, t) {
    n.setBounds(t);
  }
};
export {
  x as StandaloneSearchBox,
  x as default
};

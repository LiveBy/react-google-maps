var m = Object.defineProperty;
var d = (o, e, t) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var s = (o, e, t) => (d(o, typeof e != "symbol" ? e + "" : e, t), t);
import { i as h } from "../../browser-fe3e0b83.js";
import r from "react";
import { R as u } from "../../index-87ad0b90.js";
import { construct as f, componentDidMount as D, componentDidUpdate as M, componentWillUnmount as S } from "../../utils/MapChildHelper.js";
import { S as i } from "../../constants-e344191b.js";
const U = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`, n = class n extends r.PureComponent {
  constructor() {
    super(...arguments);
    s(this, "state", {
      [i]: null
    });
  }
  componentDidMount() {
    h(
      google.maps.places,
      'Did you include "libraries=places" in the URL?'
    );
    const t = u.findDOMNode(this), a = new google.maps.places.SearchBox(
      t.querySelector("input") || t
    );
    f(n.propTypes, l, this.props, a), D(this, a, c), this.setState({
      [i]: a
    });
  }
  componentDidUpdate(t) {
    M(
      this,
      this.state[i],
      c,
      l,
      t
    );
  }
  componentWillUnmount() {
    S(this);
  }
  render() {
    return r.Children.only(this.props.children);
  }
};
s(n, "displayName", "StandaloneSearchBox"), s(n, "propTypes", {
  __jscodeshiftPlaceholder__: null
});
let p = n;
const v = p, c = {}, l = {};
export {
  v as StandaloneSearchBox,
  U as __jscodeshiftPlaceholder__,
  v as default
};

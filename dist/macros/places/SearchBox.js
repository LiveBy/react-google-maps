var d = Object.defineProperty;
var u = (n, o, t) => o in n ? d(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var e = (n, o, t) => (u(n, typeof o != "symbol" ? o + "" : o, t), t);
import { _ as P } from "../../lodash-9da1000b.js";
import { i as f } from "../../browser-fe3e0b83.js";
import { c as C } from "../../index-22f0280c.js";
import l from "react";
import { R as M } from "../../index-87ad0b90.js";
import { P as c } from "../../index-e8d4cd90.js";
import { componentDidMount as A, componentDidUpdate as E, componentWillUnmount as U, construct as x } from "../../utils/MapChildHelper.js";
import { M as r, S as s } from "../../constants-4d431d90.js";
const T = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`, i = class i extends l.PureComponent {
  constructor() {
    super(...arguments);
    e(this, "state", {
      [s]: null
    });
  }
  componentWillMount() {
    !C || this.containerElement || (f(
      google.maps.places,
      'Did you include "libraries=places" in the URL?'
    ), this.containerElement = document.createElement("div"));
  }
  componentDidMount() {
    let t = this.state[s];
    t = this.handleInitializeSearchBox(), A(this, t, h), this.handleMountAtControlPosition();
  }
  componentWillUpdate(t) {
    this.props.controlPosition !== t.controlPosition && this.handleUnmountAtControlPosition();
  }
  componentDidUpdate(t) {
    E(
      this,
      this.state[s],
      h,
      m,
      t
    ), this.props.children !== t.children && this.handleRenderChildToContainerElement(), this.props.controlPosition !== t.controlPosition && this.handleMountAtControlPosition();
  }
  componentWillUnmount() {
    U(this), this.handleUnmountAtControlPosition();
  }
  handleInitializeSearchBox() {
    const t = new google.maps.places.SearchBox(
      this.containerElement.querySelector("input")
    );
    return x(i.propTypes, m, this.props, t), this.setState({
      [s]: t
    }), t;
  }
  handleMountAtControlPosition() {
    p(this.props.controlPosition) && (this.mountControlIndex = -1 + this.context[r].controls[this.props.controlPosition].push(
      this.containerElement.firstChild
    ));
  }
  handleUnmountAtControlPosition() {
    if (p(this.props.controlPosition)) {
      const t = this.context[r].controls[this.props.controlPosition].removeAt(this.mountControlIndex);
      t !== void 0 && this.containerElement.appendChild(t);
    }
  }
  render() {
    return M.createPortal(
      l.Children.only(this.props.children),
      this.containerElement
    );
  }
};
e(i, "propTypes", {
  __jscodeshiftPlaceholder__: null,
  /**
   * Where to put `<SearchBox>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: c.number
}), e(i, "contextTypes", {
  [r]: c.object
});
let a = i;
const p = P.isNumber, h = {}, m = {};
export {
  a as SearchBox,
  T as __jscodeshiftPlaceholder__,
  a as default
};

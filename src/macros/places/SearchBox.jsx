/* global google */
import _ from "lodash"
import invariant from "invariant"
import canUseDOM from "can-use-dom"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, SEARCH_BOX } from "../../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`

/**
 * A wrapper around `liveby.maps.places.SearchBox` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
export class SearchBox extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    /**
     * Where to put `<SearchBox>` inside a `<GoogleMap>`
     *
     * @example liveby.maps.ControlPosition.TOP_LEFT
     * @type number
     */
    controlPosition: PropTypes.number,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  state = {
    [SEARCH_BOX]: null,
  }

  componentWillMount() {
    if (!canUseDOM || this.containerElement) {
      return
    }
    invariant(
      liveby.maps.places,
      `Did you include "libraries=places" in the URL?`
    )
    this.containerElement = document.createElement(`div`)
  }

  componentDidMount() {
    let searchBox = this.state[SEARCH_BOX]
    searchBox = this.handleInitializeSearchBox()
    componentDidMount(this, searchBox, eventMap)
    this.handleMountAtControlPosition()
  }

  componentWillUpdate(nextProp) {
    if (this.props.controlPosition !== nextProp.controlPosition) {
      this.handleUnmountAtControlPosition()
    }
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[SEARCH_BOX],
      eventMap,
      updaterMap,
      prevProps
    )
    if (this.props.children !== prevProps.children) {
      this.handleRenderChildToContainerElement()
    }
    if (this.props.controlPosition !== prevProps.controlPosition) {
      this.handleMountAtControlPosition()
    }
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    this.handleUnmountAtControlPosition()
  }

  handleInitializeSearchBox() {
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    const searchBox = new liveby.maps.places.SearchBox(
      this.containerElement.querySelector("input")
    )
    construct(SearchBox.propTypes, updaterMap, this.props, searchBox)
    this.setState({
      [SEARCH_BOX]: searchBox,
    })
    return searchBox
  }

  handleMountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      this.mountControlIndex =
        -1 +
        this.context[MAP].controls[this.props.controlPosition].push(
          this.containerElement.firstChild
        )
    }
  }

  handleUnmountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      const child = this.context[MAP].controls[
        this.props.controlPosition
      ].removeAt(this.mountControlIndex)
      if (child !== undefined) {
        this.containerElement.appendChild(child)
      }
    }
  }

  render() {
    return ReactDOM.createPortal(
      React.Children.only(this.props.children),
      this.containerElement
    )
  }
}

export default SearchBox

const isValidControlPosition = _.isNumber

const eventMap = {}

const updaterMap = {}

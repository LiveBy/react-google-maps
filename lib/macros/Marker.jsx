/* global google */

import PropTypes from "prop-types"
import React, { useContext, useEffect, useRef, useState } from "react"

import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  construct,
} from "../utils/MapChildHelper"

import { ANCHOR, MAP, MARKER, MARKER_CLUSTERER } from "../constants"
import { MapContext } from "../withGoogleMap"

export const __jscodeshiftPlaceholder__ = `{
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
}`

/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */

// Modern React 19+ functional Marker component
export function Marker(props) {
  const { children, noRedraw, ...rest } = props

  // Get map and markerClusterer from context
  const mapContext = useContext(MapContext) || {}
  const map = mapContext[MAP]
  const markerClusterer = mapContext[MARKER_CLUSTERER]

  const markerRef = useRef(null)
  const [markerInstance, setMarkerInstance] = useState(null)

  // Create marker on mount
  useEffect(() => {
    const marker = new google.maps.Marker()
    construct(Marker.propTypes, updaterMap, props, marker)
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!noRedraw)
    } else if (map) {
      marker.setMap(map)
    }
    markerRef.current = marker
    setMarkerInstance(marker)
    return () => {
      if (markerClusterer) {
        markerClusterer.removeMarker(marker, !!noRedraw)
      }
      marker.setMap(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update marker on prop changes
  useEffect(() => {
    if (markerInstance) {
      componentDidUpdate(
        { props },
        markerInstance,
        eventMap,
        updaterMap,
        {} // prevProps not tracked in this migration
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, markerInstance])

  // Mount events
  useEffect(() => {
    if (markerInstance) {
      componentDidMount({ props }, markerInstance, eventMap)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerInstance])

  // Provide ANCHOR context for children
  const AnchorContext = React.createContext(null)

  return (
    <AnchorContext.Provider value={markerInstance}>
      <div>{children}</div>
    </AnchorContext.Provider>
  )
}

Marker.propTypes = {
  __jscodeshiftPlaceholder__: null,
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: PropTypes.bool,
}

export default Marker

const eventMap = {}

const updaterMap = {}

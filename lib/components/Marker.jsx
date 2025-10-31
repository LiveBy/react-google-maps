/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
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
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: PropTypes.bool,

  /**
   * @type Animation
   */
  defaultAnimation: PropTypes.any,

  /**
   * @type boolean
   */
  defaultClickable: PropTypes.bool,

  /**
   * @type string
   */
  defaultCursor: PropTypes.string,

  /**
   * @type boolean
   */
  defaultDraggable: PropTypes.bool,

  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: PropTypes.any,

  /**
   * @type string|MarkerLabel
   */
  defaultLabel: PropTypes.any,

  /**
   * @type number
   */
  defaultOpacity: PropTypes.number,

  /**
   * @type MarkerOptions
   */
  defaultOptions: PropTypes.any,

  /**
   * @type MarkerPlace
   */
  defaultPlace: PropTypes.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: PropTypes.any,

  /**
   * @type MarkerShape
   */
  defaultShape: PropTypes.any,

  /**
   * @type string
   */
  defaultTitle: PropTypes.string,

  /**
   * @type boolean
   */
  defaultVisible: PropTypes.bool,

  /**
   * @type number
   */
  defaultZIndex: PropTypes.number,

  /**
   * @type Animation
   */
  animation: PropTypes.any,

  /**
   * @type boolean
   */
  clickable: PropTypes.bool,

  /**
   * @type string
   */
  cursor: PropTypes.string,

  /**
   * @type boolean
   */
  draggable: PropTypes.bool,

  /**
   * @type string|Icon|Symbol
   */
  icon: PropTypes.any,

  /**
   * @type string|MarkerLabel
   */
  label: PropTypes.any,

  /**
   * @type number
   */
  opacity: PropTypes.number,

  /**
   * @type MarkerOptions
   */
  options: PropTypes.any,

  /**
   * @type MarkerPlace
   */
  place: PropTypes.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: PropTypes.any,

  /**
   * @type MarkerShape
   */
  shape: PropTypes.any,

  /**
   * @type string
   */
  title: PropTypes.string,

  /**
   * @type boolean
   */
  visible: PropTypes.bool,

  /**
   * @type number
   */
  zIndex: PropTypes.number,

  /**
   * function
   */
  onDblClick: PropTypes.func,

  /**
   * function
   */
  onDragEnd: PropTypes.func,

  /**
   * function
   */
  onDragStart: PropTypes.func,

  /**
   * function
   */
  onMouseDown: PropTypes.func,

  /**
   * function
   */
  onMouseOut: PropTypes.func,

  /**
   * function
   */
  onMouseOver: PropTypes.func,

  /**
   * function
   */
  onMouseUp: PropTypes.func,

  /**
   * function
   */
  onRightClick: PropTypes.func,

  /**
   * function
   */
  onAnimationChanged: PropTypes.func,

  /**
   * function
   */
  onClick: PropTypes.func,

  /**
   * function
   */
  onClickableChanged: PropTypes.func,

  /**
   * function
   */
  onCursorChanged: PropTypes.func,

  /**
   * function
   */
  onDrag: PropTypes.func,

  /**
   * function
   */
  onDraggableChanged: PropTypes.func,

  /**
   * function
   */
  onFlatChanged: PropTypes.func,

  /**
   * function
   */
  onIconChanged: PropTypes.func,

  /**
   * function
   */
  onPositionChanged: PropTypes.func,

  /**
   * function
   */
  onShapeChanged: PropTypes.func,

  /**
   * function
   */
  onTitleChanged: PropTypes.func,

  /**
   * function
   */
  onVisibleChanged: PropTypes.func,

  /**
   * function
   */
  onZindexChanged: PropTypes.func,
}

// Instance methods for marker (optional: can be exposed via ref if needed)
// e.g., useImperativeHandle(ref, () => ({ ... }))

export default Marker

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed",
}

const updaterMap = {
  animation(instance, animation) {
    instance.setAnimation(animation)
  },

  clickable(instance, clickable) {
    instance.setClickable(clickable)
  },

  cursor(instance, cursor) {
    instance.setCursor(cursor)
  },

  draggable(instance, draggable) {
    instance.setDraggable(draggable)
  },

  icon(instance, icon) {
    instance.setIcon(icon)
  },

  label(instance, label) {
    instance.setLabel(label)
  },

  opacity(instance, opacity) {
    instance.setOpacity(opacity)
  },

  options(instance, options) {
    instance.setOptions(options)
  },

  place(instance, place) {
    instance.setPlace(place)
  },

  position(instance, position) {
    instance.setPosition(position)
  },

  shape(instance, shape) {
    instance.setShape(shape)
  },

  title(instance, title) {
    instance.setTitle(title)
  },

  visible(instance, visible) {
    instance.setVisible(visible)
  },

  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex)
  },
}

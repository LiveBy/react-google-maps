/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
import invariant from "invariant"

import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"

import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  construct,
} from "../utils/MapChildHelper"

import { MAP } from "../constants"
import { MapContext } from "../withGoogleMap"

/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
// Modern React 19+ functional StreetViewPanorama component
export function StreetViewPanorama(props) {
  const { children, ...rest } = props
  const mapContext = useContext(MapContext) || {}
  const map = mapContext[MAP]
  const streetViewPanorama = map ? map.getStreetView() : null

  // Mount: construct and invariant
  useEffect(() => {
    if (!map) {
      invariant(
        false,
        `Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?`
      )
      return
    }
    construct(
      StreetViewPanorama.propTypes,
      updaterMap,
      props,
      streetViewPanorama
    )
    // Mount events
    componentDidMount({ props }, streetViewPanorama, eventMap)
    return () => {
      componentWillUnmount({})
      if (streetViewPanorama) {
        streetViewPanorama.setVisible(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update
  useEffect(() => {
    if (streetViewPanorama) {
      componentDidUpdate(
        { props },
        streetViewPanorama,
        eventMap,
        updaterMap,
        {} // prevProps not tracked in this migration
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, streetViewPanorama])

  return <div>{children}</div>
}

StreetViewPanorama.propTypes = {
  /**
   * @type Array<StreetViewLink>
   */
  defaultLinks: PropTypes.any,

  /**
   * @type boolean
   */
  defaultMotionTracking: PropTypes.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  defaultOptions: PropTypes.any,

  /**
   * @type string
   */
  defaultPano: PropTypes.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: PropTypes.any,

  /**
   * @type StreetViewPov
   */
  defaultPov: PropTypes.any,

  /**
   * @type boolean
   */
  defaultVisible: PropTypes.bool,

  /**
   * @type number
   */
  defaultZoom: PropTypes.number,

  /**
   * @type Array<StreetViewLink>
   */
  links: PropTypes.any,

  /**
   * @type boolean
   */
  motionTracking: PropTypes.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  options: PropTypes.any,

  /**
   * @type string
   */
  pano: PropTypes.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: PropTypes.any,

  /**
   * @type StreetViewPov
   */
  pov: PropTypes.any,

  /**
   * @type boolean
   */
  visible: PropTypes.bool,

  /**
   * @type number
   */
  zoom: PropTypes.number,

  /**
   * function
   */
  onCloseClick: PropTypes.func,

  /**
   * function
   */
  onPanoChanged: PropTypes.func,

  /**
   * function
   */
  onPositionChanged: PropTypes.func,

  /**
   * function
   */
  onPovChanged: PropTypes.func,

  /**
   * function
   */
  onResize: PropTypes.func,

  /**
   * function
   */
  onStatusChanged: PropTypes.func,

  /**
   * function
   */
  onVisibleChanged: PropTypes.func,

  /**
   * function
   */
  onZoomChanged: PropTypes.func,
}

// Instance methods for StreetViewPanorama (optional: can be exposed via ref if needed)

export default StreetViewPanorama

const eventMap = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed",
}

const updaterMap = {
  links(instance, links) {
    instance.setLinks(links)
  },

  motionTracking(instance, motionTracking) {
    instance.setMotionTracking(motionTracking)
  },

  options(instance, options) {
    instance.setOptions(options)
  },

  pano(instance, pano) {
    instance.setPano(pano)
  },

  position(instance, position) {
    instance.setPosition(position)
  },

  pov(instance, pov) {
    instance.setPov(pov)
  },

  visible(instance, visible) {
    instance.setVisible(visible)
  },

  zoom(instance, zoom) {
    instance.setZoom(zoom)
  },
}

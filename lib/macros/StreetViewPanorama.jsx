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

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onCloseClick": "closeclick"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`

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
  __jscodeshiftPlaceholder__: null,
}

export default StreetViewPanorama

const eventMap = {}

const updaterMap = {}

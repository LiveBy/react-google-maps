/* global google */
import invariant from "invariant"
import _ from "lodash"
import PropTypes from "prop-types"
import React from "react"
import warning from "warning"
import { MAP } from "./constants"

export const MapContext = React.createContext(null)

export function withGoogleMap(BaseComponent) {
  function Container(props) {
    const { containerElement, mapElement, ...restProps } = props
    const [map, setMap] = React.useState(null)

    React.useEffect(() => {
      invariant(
        !!containerElement && !!mapElement,
        `Required props containerElement or mapElement is missing. You need to provide both of them.\nThe \`google.maps.Map\` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized.`
      )
    }, [containerElement, mapElement])

    const handleComponentMount = React.useCallback(
      (node) => {
        if (map || node === null) {
          return
        }
        warning(
          `undefined` !== typeof google,
          `Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\nIf you're looking for built-in support to load it for you, use the "async/ScriptjsLoader" instead.\nSee https://github.com/tomchentw/react-google-maps/pull/168`
        )
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
        const mapInstance = new google.maps.Map(node)
        setMap(mapInstance)
      },
      [map]
    )

    if (map) {
      return React.cloneElement(
        containerElement,
        {},
        React.cloneElement(mapElement, {
          ref: handleComponentMount,
        }),
        <MapContext.Provider value={{ [MAP]: map }}>
          <BaseComponent {...restProps} />
        </MapContext.Provider>
      )
    } else {
      return React.cloneElement(
        containerElement,
        {},
        React.cloneElement(mapElement, {
          ref: handleComponentMount,
        }),
        <div />
      )
    }
  }

  Container.displayName = `withGoogleMap(${
    BaseComponent.displayName || BaseComponent.name
  })`
  Container.propTypes = {
    containerElement: PropTypes.node.isRequired,
    mapElement: PropTypes.node.isRequired,
  }
  return Container
}

export default withGoogleMap

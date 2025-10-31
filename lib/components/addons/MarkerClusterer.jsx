import MarkerClustererPlus from "marker-clusterer-plus"
import PropTypes from "prop-types"
import React, { useContext, useEffect, useRef, useState } from "react"

import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  construct,
} from "../../utils/MapChildHelper"

import { ANCHOR, MAP, MARKER_CLUSTERER } from "../../constants"
import { MapContext } from "../../withGoogleMap"

/**
 * A wrapper around `MarkerClusterer`
 *
 * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
 */
// Modern React 19+ functional MarkerClusterer component
export function MarkerClusterer(props) {
  const { children, ...rest } = props
  const mapContext = useContext(MapContext) || {}
  const map = mapContext[MAP]

  const markerClustererRef = useRef(null)
  const [markerClustererInstance, setMarkerClustererInstance] = useState(null)

  // Create MarkerClusterer on mount
  useEffect(() => {
    const markerClusterer = new MarkerClustererPlus()
    construct(MarkerClusterer.propTypes, updaterMap, props, markerClusterer)
    markerClusterer.setMap(map)
    markerClustererRef.current = markerClusterer
    setMarkerClustererInstance(markerClusterer)
    return () => {
      markerClusterer.setMap(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update MarkerClusterer on prop changes
  useEffect(() => {
    if (markerClustererInstance) {
      componentDidUpdate(
        { props },
        markerClustererInstance,
        eventMap,
        updaterMap,
        {} // prevProps not tracked in this migration
      )
      markerClustererInstance.repaint()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, markerClustererInstance])

  // Mount events
  useEffect(() => {
    if (markerClustererInstance) {
      componentDidMount({ props }, markerClustererInstance, eventMap)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerClustererInstance])

  // Provide ANCHOR and MARKER_CLUSTERER context for children
  const ClustererContext = React.createContext({})

  return (
    <ClustererContext.Provider
      value={{
        [ANCHOR]: markerClustererInstance,
        [MARKER_CLUSTERER]: markerClustererInstance,
      }}
    >
      <div>{children}</div>
    </ClustererContext.Provider>
  )
}

MarkerClusterer.propTypes = {
  /**
   * @type boolean
   */
  defaultAverageCenter: PropTypes.bool,

  /**
   * @type number
   */
  defaultBatchSizeIE: PropTypes.number,

  /**
   * @type number
   */
  defaultBatchSize: PropTypes.number,

  /**
   * @type function
   */
  defaultCalculator: PropTypes.func,

  /**
   * @type string
   */
  defaultClusterClass: PropTypes.string,

  /**
   * @type boolean
   */
  defaultEnableRetinaIcons: PropTypes.bool,

  /**
   * @type number
   */
  defaultGridSize: PropTypes.number,

  /**
   * @type boolean
   */
  defaultIgnoreHidden: PropTypes.bool,

  /**
   * @type string
   */
  defaultImageExtension: PropTypes.string,

  /**
   * @type string
   */
  defaultImagePath: PropTypes.string,

  /**
   * @type Array
   */
  defaultImageSizes: PropTypes.array,

  /**
   * @type number
   */
  defaultMaxZoom: PropTypes.number,

  /**
   * @type number
   */
  defaultMinimumClusterSize: PropTypes.number,

  /**
   * @type Array
   */
  defaultStyles: PropTypes.array,

  /**
   * @type string
   */
  defaultTitle: PropTypes.string,

  /**
   * @type boolean
   */
  defaultZoomOnClick: PropTypes.bool,

  /**
   * @type boolean
   */
  averageCenter: PropTypes.bool,

  /**
   * @type number
   */
  batchSizeIE: PropTypes.number,

  /**
   * @type number
   */
  batchSize: PropTypes.number,

  /**
   * @type function
   */
  calculator: PropTypes.func,

  /**
   * @type string
   */
  clusterClass: PropTypes.string,

  /**
   * @type boolean
   */
  enableRetinaIcons: PropTypes.bool,

  /**
   * @type number
   */
  gridSize: PropTypes.number,

  /**
   * @type boolean
   */
  ignoreHidden: PropTypes.bool,

  /**
   * @type string
   */
  imageExtension: PropTypes.string,

  /**
   * @type string
   */
  imagePath: PropTypes.string,

  /**
   * @type Array
   */
  imageSizes: PropTypes.array,

  /**
   * @type number
   */
  maxZoom: PropTypes.number,

  /**
   * @type number
   */
  minimumClusterSize: PropTypes.number,

  /**
   * @type Array
   */
  styles: PropTypes.array,

  /**
   * @type string
   */
  title: PropTypes.string,

  /**
   * @type boolean
   */
  zoomOnClick: PropTypes.bool,

  /**
   * function
   */
  onClick: PropTypes.func,

  /**
   * function
   */
  onClusteringBegin: PropTypes.func,

  /**
   * function
   */
  onClusteringEnd: PropTypes.func,

  /**
   * function
   */
  onMouseOut: PropTypes.func,

  /**
   * function
   */
  onMouseOver: PropTypes.func,
}

export default MarkerClusterer

const eventMap = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
}

const updaterMap = {
  averageCenter(instance, averageCenter) {
    instance.setAverageCenter(averageCenter)
  },

  batchSizeIE(instance, batchSizeIE) {
    instance.setBatchSizeIE(batchSizeIE)
  },

  batchSize(instance, batchSize) {
    instance.setBatchSize(batchSize)
  },

  calculator(instance, calculator) {
    instance.setCalculator(calculator)
  },

  clusterClass(instance, clusterClass) {
    instance.setClusterClass(clusterClass)
  },

  enableRetinaIcons(instance, enableRetinaIcons) {
    instance.setEnableRetinaIcons(enableRetinaIcons)
  },

  gridSize(instance, gridSize) {
    instance.setGridSize(gridSize)
  },

  ignoreHidden(instance, ignoreHidden) {
    instance.setIgnoreHidden(ignoreHidden)
  },

  imageExtension(instance, imageExtension) {
    instance.setImageExtension(imageExtension)
  },

  imagePath(instance, imagePath) {
    instance.setImagePath(imagePath)
  },

  imageSizes(instance, imageSizes) {
    instance.setImageSizes(imageSizes)
  },

  maxZoom(instance, maxZoom) {
    instance.setMaxZoom(maxZoom)
  },

  minimumClusterSize(instance, minimumClusterSize) {
    instance.setMinimumClusterSize(minimumClusterSize)
  },

  styles(instance, styles) {
    instance.setStyles(styles)
  },

  title(instance, title) {
    instance.setTitle(title)
  },

  zoomOnClick(instance, zoomOnClick) {
    instance.setZoomOnClick(zoomOnClick)
  },
}

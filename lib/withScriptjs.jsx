import React from "react"

const LOADING_STATE_BEGIN = `BEGIN`
const LOADING_STATE_LOADED = `LOADED`

export default (withScript = BaseComponent => {
  return ({ loadingElement = null, googleMapURL, ...restProps }) => {
    const [loadingState, setLoadingState] = React.useState(LOADING_STATE_BEGIN)
    return (
      <>
        <script
          async={true}
          src={googleMapURL}
          onLoad={() => setLoadingState(LOADING_STATE_LOADED)}
        />
        {loadingState === LOADING_STATE_LOADED ? (
          <BaseComponent {...restProps} />
        ) : (
          loadingElement
        )}
      </>
    )
  }
})

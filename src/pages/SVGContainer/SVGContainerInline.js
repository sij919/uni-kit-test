import React from 'react'
import checkUrl from '@/assets/images/svg/check.svg?url'
import Check from '@/assets/images/svg/check.svg'

function SVGContainerInline() {

  return (
    <div className="SVGContainerInline">
      <h1 className="component-title">SVG INLINE</h1>
      <div className="component-wrap">
        <span className="component-sub-title">&lt;img&gt; tag</span>
        <div>
          <img src={checkUrl} width="24" height="24" />
        </div>
        <span className="component-sub-title">React Component</span>
        <div>
          <Check width="24" height="24" />
        </div>
        <span className="component-sub-title">Style - background-image</span>
        <div>
          <div className="svg-inline"></div>
        </div>
      </div>
    </div>
  )
}

export default SVGContainerInline


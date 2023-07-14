import React from 'react';
import '@/assets/scss/tools/_sprite-style.scss';

function ImageContainerSprite() {

  return (
    <div className="ImageContainerSprite">
      <h1 className="component-title">SPRITE 이미지 생성</h1>
      <div className="component-wrap">
        <span className="component-sub-title">SPRITE 이미지 생성</span>
				<div className="retina">
          <span className="component-sub-title">@1x (retina)</span>
          <span className="retina-1x-profile"></span>
          <span className="retina-1x-favorite"></span>
          <span className="retina-1x-warning"></span>
          <span className="retina-1x-vip"></span>
          <span className="retina-1x-money"></span>
          <span className="retina-1x-memo"></span>
        </div>
				<div className="retina">
          <span className="component-sub-title">@2x (retina)</span>
          <span className="retina-2x-profile"></span>
          <span className="retina-2x-favorite"></span>
          <span className="retina-2x-warning"></span>
          <span className="retina-2x-vip"></span>
          <span className="retina-2x-money"></span>
          <span className="retina-2x-memo"></span>
        </div>
				<div className="retina">
          <span className="component-sub-title">@3x (retina)</span>
          <span className="retina-3x-profile"></span>
          <span className="retina-3x-favorite"></span>
          <span className="retina-3x-warning"></span>
          <span className="retina-3x-vip"></span>
          <span className="retina-3x-money"></span>
          <span className="retina-3x-memo"></span>
        </div>
      </div>
    </div>
  )
}

export default ImageContainerSprite


import React from 'react';
import imgXraySkeletal from '@/assets/images/common/img-xray-skeletal.gif';
import imgXrayHand from '@/assets/images/common/img-xray-hand.jpg';
import imgXrayChest from '@/assets/images/common/img-xray-chest.png';
import imgXrayBody from "@/assets/images/common/img-xray-body.jpg";

function ImageContainerOptimize() {
  return (
    <div className="ImageContainerOptimize">
      <h1 className="component-title">이미지 크기 최적화</h1>
      <div className="component-wrap">
        <span className="component-sub-title">이미지 크기 최적화</span>
        <div className="image-optimize">
          <span className="component-sub-title">- 골격 엑스레이 (GIF)</span>
          <img src={imgXraySkeletal} alt="엑스레이-골격" />
          <span className="component-sub-title">- 손 엑스레이 (JPG)</span>
          <img src={imgXrayHand} alt="엑스레이-손" />
          <span className="component-sub-title">- 전신 엑스레이 (JPG)</span>
          <img src={imgXrayBody} alt="엑스레이-전신" />
          <span className="component-sub-title">- 흉부 엑스레이 (PNG)</span>
          <img src={imgXrayChest} alt="엑스레이-흉부" />
        </div>
      </div>
    </div>
  )
}

export default ImageContainerOptimize


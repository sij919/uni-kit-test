import HISToolTip from '@/components/HISToolTip/HISToolTip'
import React from 'react'

function HISToolTipDirectionCorner(props) {

  return (
    <>
      <HISToolTip label="애국가 1절" direction="leftTop">
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
      </HISToolTip>
      <HISToolTip label="애국가 2절" direction="rightTop">
        남산위에 저소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
      </HISToolTip>
      <HISToolTip label="애국가 3절" direction="leftBottom">
        가을하늘 공활한데 높고 구름없이 밝은달은 우리가슴 일편단심일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
      </HISToolTip>
      <HISToolTip label="애국가 4절" direction="rightBottom">
        이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
      </HISToolTip>
    </>
  )
}

export default HISToolTipDirectionCorner;


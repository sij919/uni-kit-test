import React from 'react'
import { HISToolTip } from '@/components/HISToolTip'

function HISToolTipDirection(props) {

  return (
    <>
      <HISToolTip label="애국가 1절" direction="top" ellipsis ellipsisWidth="100">
        동해물과 백두산이 마르고 닳도록
      </HISToolTip>
      <HISToolTip label="애국가 2절" direction="left">
        남산위에 저소나무 철갑을 두른듯
      </HISToolTip>
      <HISToolTip label="애국가 3절" direction="right">
        가을하늘 공활한데 높고 구름없이
      </HISToolTip>
      <HISToolTip label="애국가 4절" direction="bottom">
        이 기상과 이 맘으로 충성을 다하여
      </HISToolTip>
    </>
  )
}

export default HISToolTipDirection;


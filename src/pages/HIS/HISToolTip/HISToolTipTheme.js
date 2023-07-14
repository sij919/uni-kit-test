import HISToolTip from '@/components/HISToolTip/HISToolTip'
import React from 'react'

function HISToolTipTheme(props) {

  return (
    <>
      <HISToolTip label="애국가 1절" theme="default">
        동해물과 백두산이 마르고 닳도록
      </HISToolTip>
      <HISToolTip label="애국가 2절" theme="dark">
        남산위에 저소나무 철갑을 두른듯
      </HISToolTip>
      <HISToolTip label="애국가 3절" theme="red">
        가을하늘 공활한데 높고 구름없이
      </HISToolTip>
    </>
  )
}

export default HISToolTipTheme;


import React from 'react'
import { HISParagraph } from 'components/HISParagraph'

function HISParagraphFontSize() {

  return (
    <>
      <p>
        Font Size - small 12px / default 16px / medium 18px / large 20px
      </p>
      <HISParagraph fontSize="small">
        애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다.<br/>내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
      </HISParagraph>
      <HISParagraph fontSize="default">
        애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다.<br/>내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
      </HISParagraph>
      <HISParagraph fontSize="medium">
        애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다.<br/>내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
      </HISParagraph>
      <HISParagraph fontSize="large">
        애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다.<br/>내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
      </HISParagraph>
    </>
  )
}

export default HISParagraphFontSize;
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISParagraphDefault,
  HISParagraphFontSize,
  HISParagraphWeight,
  HISParagraphColor
} from '@/pages/HIS/HISParagraph';
import { PrismCodePage } from "@/pages/PrismCode";

const HISParagraphDefaultCode = `
  import React from "react";
  import { HISParagraph } from 'components/HISParagraph'

  function HISParagraphDefault () {
    return (
      <>
        <HISParagraph>
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
      </>
    )
  }

  export default HISParagraphDefault;
`;

const HISParagraphFontSizeCode = `
  import React from "react";
  import { HISParagraph } from 'components/HISParagraph'

  function HISParagraphFontSize () {
    return (
      <>
        <HISParagraph fontSize="small">
          애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph fontSize="default">
          애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph fontSize="medium">
          애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph fontSize="large">
          애기 한 별들을 다하지 피어나듯이 있습니다. 무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
      </>
    )
  }

  export default HISParagraphFontSize;
`;

const HISParagraphWeightCode = `
  import React from "react";
  import { HISParagraph } from 'components/HISParagraph'

  function HISParagraphWeight () {
    return (
      <>
        <HISParagraph weight="light">
          애기 한 별들을 다하지 피어나듯이 있습니다.
        </HISParagraph>
        <HISParagraph weight="regular">
          애기 한 별들을 다하지 피어나듯이 있습니다.
        </HISParagraph>
        <HISParagraph weight="medium">
          애기 한 별들을 다하지 피어나듯이 있습니다.
        </HISParagraph>
        <HISParagraph weight="bold">
          애기 한 별들을 다하지 피어나듯이 있습니다.
        </HISParagraph>
        <HISParagraph weight="extra-bold">
          애기 한 별들을 다하지 피어나듯이 있습니다.
        </HISParagraph>
      </>
    )
  }

  export default HISParagraphWeight;
`;

const HISParagraphColorCode = `
  import React from "react";
  import { HISParagraph } from 'components/HISParagraph'

  function HISParagraphColor () {
    return (
      <>
        <HISParagraph color="black">
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph color="gray02">
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph color="point">
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph color="success">
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
        <HISParagraph color="warning">
          무엇인지 위에도 쓸쓸함과 노새, 가을로 봅니다. 내 이국 계집애들의 까닭입니다. 위에 언덕 계집애들의 쓸쓸함과 하나에 버리었습니다.
        </HISParagraph>
      </>
    )
  }

  export default HISParagraphColor;
`;


function HISParagraphPage () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISParagraph">
        <h3>HISParagraph</h3>
        <h4>HISParagraphDefault</h4>
        <div className="component-wrap">
          <HISParagraphDefault />
        </div>
        <PrismCodePage code={HISParagraphDefaultCode} language="javascript" />

        <h4>HISParagraphFontSize</h4>
        <div className="component-wrap">
          <HISParagraphFontSize />
        </div>
        <PrismCodePage code={HISParagraphFontSizeCode} language="javascript" />

        <h4>HISParagraphWeight</h4>
        <div className="component-wrap">
          <HISParagraphWeight />
        </div>
        <PrismCodePage code={HISParagraphWeightCode} language="javascript" />

        <h4>HISParagraphColor</h4>
        <div className="component-wrap">
          <HISParagraphColor />
        </div>
        <PrismCodePage code={HISParagraphColorCode} language="javascript" />
      </div>
    </>
  )
}


export default HISParagraphPage
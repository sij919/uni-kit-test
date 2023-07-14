import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { HISRadioButtonDefault } from '@/pages/HIS/HISRadioButton';
import { PrismCodePage } from '@/pages/PrismCode';

const RadioButtonState = `
  import React from 'react';
  import { HISRadioButton } from 'components/HISRadioButton';

  function HISRadioButtonDefault () {
    return (
      <>
                    <HISRadioButtonGroup>
                      <HISRadioButton id="default" name="default">
                        기본
                      </HISRadioButton>
                      <HISRadioButton id="hover" name="hover">
                        마우스오버
                      </HISRadioButton>
                      <HISRadioButton id="click" name="click" checked>
                        클릭
                      </HISRadioButton>
                      <HISRadioButton id="disabled" name="disabled" disabled>
                        비활성화
                      </HISRadioButton>
                      <HISRadioButton id="checked-disabled" name="checked-disabled" checked disabled>
                        비활성화 선택상태
                      </HISRadioButton>
                      <HISRadioButton id="required1" name="required1" required>
                        필수
                      </HISRadioButton>
                      <HISRadioButton id="required2" name="required2" checked required>
                        필수 선택
                      </HISRadioButton>
                    </HISRadioButtonGroup>
                </>
    )
  }

  export default HISRadioButtonDefault
`;

function HISRadioButtonPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISRadioButton">
        <h3>HISRadioButton</h3>
        <p>
          - https://www.notion.so/douzone-tes/HISRadioButton-79d712d1c5324b059d7b9bc04adbb5bf<br />
          - 사용 가능한 모든 옵션을 노출 후 단일 옵션을 선택하는 기능(Radio 사이즈 14px, 텍스트 크기 12px)
        </p>
        <h4>State</h4>
        <div className="component-wrap">
          <HISRadioButtonDefault />
        </div>
        <PrismCodePage code={RadioButtonState} language="jsx" />
      </div>
    </>
  )
}

export default HISRadioButtonPage

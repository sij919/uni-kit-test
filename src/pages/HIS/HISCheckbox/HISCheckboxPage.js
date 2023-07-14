import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { HISCheckboxDefault } from 'pages/HIS/HISCheckbox';
import { PrismCodePage } from '@/pages/PrismCode';

const HISCheckboxState = `
  import React from 'react';
  import { HISCheckbox } from 'components/HISCheckbox';

  const Checkbox = () => {
    return (
      <>
                    <HISCheckbox id="checkbox-default">
                      기본
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-hover">
                      마우스오버
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-checked" checked>
                      클릭
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-disabled" disabled>
                      비활성화
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-checked-disabled" checked disabled>
                      비활성화 선택
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-required" required>
                      필수 선택
                    </HISCheckbox>
                    <HISCheckbox id="checkbox-checked-required" checked required>
                      필수 선택상태
                    </HISCheckbox>
              </>
    )
  }

  export default Checkbox
`;

function HISCheckboxPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISCheckbox">
        <h3>HISCheckbox</h3>
        <p>
          - https://www.notion.so/douzone-tes/HISCheckbox-2ce5eb4c1c884ea3976bc1e0f7ce5ad0?pvs=4<br />
          - 목록에서 하나 이상의 옵션을 선택하는 기능 (Checkbox 사이즈 14px, 텍스트 크기 12px)
        </p>
        <h4>State</h4>
        <div className="component-wrap">
          <HISCheckboxDefault />
        </div>
        <PrismCodePage code={HISCheckboxState} language="jsx" />
      </div>
    </>

  )
}

export default HISCheckboxPage

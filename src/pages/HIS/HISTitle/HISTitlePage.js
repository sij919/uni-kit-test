import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { HISTitleDefault, HISTitlePopup } from '@/pages/HIS/HISTitle';
import { PrismCodePage } from "@/pages/PrismCode";

const HISTitlePageCode = `
  import React from "react";
  import { HISTitle } from 'components/HISTitle';

  function HISTitleType () {
    return (
      <>
        <div className="component-wrap">
          <HISTitle type="h1" title="h1 사이즈의 타이틀입니다." />
          <HISTitle type="h2" title="h2 사이즈의 타이틀입니다." />
          <HISTitle type="h3" title="h3 사이즈의 타이틀입니다." />
          <HISTitle type="h4" title="h4 사이즈의 타이틀입니다." />
          <HISTitle type="h5" title="h5 사이즈의 타이틀입니다." />
          <HISTitle
            purpose="page"
            type="h2"
            title="모든 옵션이 들어간 HISTitle 입니다."
            size="38"
            color="orange"
            lineHeight="3"
            subTitle="기본 서브타이틀"
            subTitleAlign="bottom"
            subTitleCustom={
              <>
                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >서브타이틀 커스텀</span>
              </>
            }
            bullet={
              <>
                <span
                  className="bullet"
                  style={{
                    position: 'relative',
                    top: '-10px',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'black',
                    margin: '0 5px',
                  }}
                ></span>
              </>
            }
          />
        </div>
      </>
    )
  }

  export default HISTitleType;
`;

const HISTitlePopupCode = `
  import React from "react";
  import { HISTitle } from 'components/HISTitle';

  function HISTitleType () {
    return (
      <>
        <div className="component-wrap">
          <HISTitle
            purpose="popup"
            type="h1"
            title="H1 제목입니다."
          />
          <HISTitle
            purpose="popup"
            type="h2"
            title="H2 제목입니다."
          />
          <HISTitle
            purpose="popup"
            type="h3"
            title="H3 제목입니다."
          />
          <HISTitle
            purpose="popup"
            type="h4"
            title="H4 제목입니다."
          />
        </div>
      </>
    )
  }

  export default HISTitleType;
`;


function HISTitlePage () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISTitle">
        <h3>HISTitle</h3>
        <p>전체적인 페이지에 대한 타이포그래피 설계 입니다.</p>

        <HISTitleDefault />
        <PrismCodePage code={HISTitlePageCode} language="javascript" />

        <HISTitlePopup />
        <PrismCodePage code={HISTitlePopupCode} language="javascript" />
      </div>

    </>

  )
}

export default HISTitlePage;
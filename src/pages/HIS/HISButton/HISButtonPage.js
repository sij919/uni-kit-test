import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISButtonDefault,
  HISButtonOptionSize,
  HISButtonOptionColor,
  HISButtonIcon,
  HISButtonIconText
  } from 'pages/HIS/HISButton';
import { PrismCodePage } from '@/pages/PrismCode';

const HISButtonDefaultCode = `// Create(생성)
<HISButton labelText="추가" theme="default" state="create" size="small" />
<HISButton labelText="추가" theme="focus" state="create" size="small" />
<HISButton labelText="추가" theme="click" state="create" size="small" />
<HISButton labelText="추가" size="small" disabled />

// Read(읽기)
<HISButton labelText="조회" theme="default" state="read" size="small" />
<HISButton labelText="조회" theme="focus" state="read" size="small" />
<HISButton labelText="조회" theme="click" state="read" size="small" />
<HISButton labelText="조회" size="small" disabled />

// Update(갱신)
<HISButton labelText="저장" theme="default" state="update" size="small" />
<HISButton labelText="저장" theme="focus" state="update" size="small" />
<HISButton labelText="저장" theme="click" state="update" size="small" />
<HISButton labelText="저장" size="small" disabled />

// Delete(삭제)
<HISButton labelText="삭제" theme="default" state="delete" size="small" />
<HISButton labelText="삭제" theme="focus" state="delete" size="small" />
<HISButton labelText="삭제" theme="click" state="delete" size="small" />
<HISButton labelText="삭제" size="small" disabled />`;

const HISButtonColorCode = `
<HISButton labelText="추가" size="small" state="create" />
<HISButton labelText="조회" size="small" state="read" />
<HISButton labelText="저장" size="small" state="update" />
<HISButton labelText="삭제" size="small" state="delete" />`;

function HISButtonPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISButton">
        <h3>HISButton</h3>
        <p>
          다국어 지원으로 가변폭 설정(좌우 여백 8px)
        </p>

        <h4>State</h4>
        <div className="component-wrap">
          <HISButtonDefault />
        </div>
        <PrismCodePage code={HISButtonDefaultCode} language="jsx" />

        <h4>Size</h4>
        <div className="component-wrap">
          <HISButtonOptionSize />
        </div>

        <h4>Color</h4>
        <p>
          버튼컬러는 State 참조하여 기본 / 마우스오버 / 마우스클릭 / 비활성화 색상 설정
        </p>
        <div className="component-wrap">
          <HISButtonOptionColor />
        </div>
        <PrismCodePage code={HISButtonColorCode} language="jsx" />

        <h4>Icon</h4>
        <div className="component-wrap">
          <HISButtonIcon />
        </div>

        <h4>Icon + Text Type</h4>
        <div className="component-wrap">
          <HISButtonIconText />
        </div>
      </div>
    </>
  )
}

export default HISButtonPage
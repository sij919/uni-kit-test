import React from 'react';
import {
  HISButton
} from 'components/HISButton';
import { PrismCodePage } from '@/pages/PrismCode';

const HISButtonSmallSizeCode =
`<HISButton labelText="Default" theme="default" state="create" size="small" />
<HISButton labelText="Disabled" size="small" disabled />`;

const HISButtonMediumSizeCode =
`<HISButton labelText="Default" theme="default" state="create" size="medium" />
<HISButton labelText="Disabled" size="medium" disabled />`;

const HISButtonLargeSizeCode =
`<HISButton labelText="Default" theme="default" state="create" size="large" />
<HISButton labelText="Disabled" size="large" disabled />`;

function HISButtonOptionSize() {
  return (
    <>
      <div className="component-wrap-subject">Small</div>
      <p>
        테이블 or 리스트 내 삽입되는 버튼 (height 24px 이하 사용, 최소 폭 42px, 텍스트 기준으로 좌우 패딩 8px)
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          theme="default"
          state="create"
          size="small"
        />
        <HISButton
          labelText="Over"
          theme="focus"
          state="create"
          size="small"
        />
        <HISButton
          labelText="Click"
          theme="click"
          state="create"
          size="small"
        />
        <HISButton
          labelText="Disabled"
          size="small"
          disabled
        />
      </div>
      <PrismCodePage code={HISButtonSmallSizeCode} language="jsx" />

      <div className="component-wrap-subject">Medium</div>
      <p>
        기본 버튼 (Contents 내부 영역 사용, 최소 폭 46px, 텍스트 기준으로 좌우 패딩 12px)
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          theme="default"
          state="create"
          size="medium"
        />
        <HISButton
          labelText="Over"
          theme="focus"
          state="create"
          size="medium"
        />
        <HISButton
          labelText="Click"
          theme="click"
          state="create"
          size="medium"
        />
        <HISButton
          labelText="Disabled"
          size="medium"
          disabled
        />
      </div>
      <PrismCodePage code={HISButtonMediumSizeCode} language="jsx" />

      <div className="component-wrap-subject">Large</div>
      <p>
        페이지 하단 반영 버튼 (Contents 외부 영역 사용, 최소 폭 54px, 텍스트 기준으로 좌우 패딩 16px)
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          theme="default"
          state="create"
          size="large"
        />
        <HISButton
          labelText="Over"
          theme="focus"
          state="create"
          size="large"
        />
        <HISButton
          labelText="Click"
          theme="click"
          state="create"
          size="large"
        />
        <HISButton
          labelText="Disabled"
          size="large"
          disabled
        />
      </div>
      <PrismCodePage code={HISButtonLargeSizeCode} language="jsx" />
    </>
  )
}

export default HISButtonOptionSize
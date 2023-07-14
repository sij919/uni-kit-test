import React from 'react';
import {
  HISButton
} from 'components/HISButton';

function HISButtonOptionColor() {
  return (
    <>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <span>기본 버튼 색상</span>
        <HISButton
          labelText="추가"
          size="small"
          state="create"
        />
        <HISButton
          labelText="조회"
          size="small"
          state="read"
        />
        <HISButton
          labelText="저장"
          size="small"
          state="update"
        />
        <HISButton
          labelText="삭제"
          size="small"
          state="delete"
        />
      </div>
    </>
  );
}

export default HISButtonOptionColor
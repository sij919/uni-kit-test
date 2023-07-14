import React from "react";
import { HISTitle } from 'components/HISTitle'

function HISTitleDefault () {
  return (
    <>
      <h4>Popup</h4>
      <div className="component-wrap">
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 32 / Letter Spacing -50 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              purpose="popup"
              type="h1"
              title="H1 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 25 / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              purpose="popup"
              type="h2"
              title="H2 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 20 / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              purpose="popup"
              type="h3"
              title="H3 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 16 / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              purpose="popup"
              type="h4"
              title="H4 제목입니다."
              stye={{marginTop: '0 !important'}}
            />
          </dd>
        </dl>
      </div>
    </>
  )
}


export default HISTitleDefault;
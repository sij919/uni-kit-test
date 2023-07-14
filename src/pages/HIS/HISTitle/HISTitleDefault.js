import React from "react";
import { HISTitle } from 'components/HISTitle';

function HISTitleDefault () {
  return (
    <>
      <h4>Page</h4>
      <div className="component-wrap">
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 50 / Letter Spacing -50 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h1"
              title="H1 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 40 / Letter Spacing -50 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h2"
              title="H2 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 32 / Letter Spacing -50 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h3"
              title="H3 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 25  / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h4"
              title="H4 제목입니다."
              stye={{marginTop: '0 !important'}}
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 20 / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h5"
              title="H5 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>Noto Sans CJK KR Medium / Font Size 16  / Letter Spacing -30 / Line height 1.5 / Scale 1.25 기준 설정</dt>
          <dd>
            <HISTitle
              type="h6"
              title="H6 제목입니다."
            />
          </dd>
        </dl>
        <dl>
          <dt>
            <p>Option - <span className="tag">purpose</span>, <span className="tag">type</span>, <span className="tag">color</span>, <span className="tag">size</span>, <span className="tag">lineHeight</span>, <span className="tag">letterSpacing</span>, <span className="tag">sub</span></p>
          </dt>
          <dd>
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
          </dd>
        </dl>
      </div>
    </>
  )
}


export default HISTitleDefault;
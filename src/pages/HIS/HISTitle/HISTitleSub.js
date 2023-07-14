import React from "react";
import { HISTitle } from 'components/HISTitle';

function HISTitleSub () {
  return (
    <>
      <div className="component-wrap">
        <HISTitle
          title="타이틀입니다."
          sub={
            <>
              <span>서브 타이틀은 &lt;Fragment&gt; 사이에 태그도 삽입 가능합니다.&lt;/Fragment&gt;</span>
            </>
          }
          subColor="pink"
        />
        <br />
        <HISTitle title="타이틀입니다." sub="서브타이틀의 포지션을 우측으로" subPosition='right' subColor='green' />
        <br />
        <HISTitle title="타이틀입니다." sub="서브타이틀의 포지션을 타이틀 아래로" subPosition='bottom' subColor='blue' />
      </div>
    </>
  )
}

export default HISTitleSub;
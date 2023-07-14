import React, { useState } from 'react'
import { HISPopOver, HISPopOverContent, HISPopOverPanel } from '@/components/HISPopOver';

function HISPopOverOutButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const popOverOption = {
    position: "left",
    width: "300px",
    height: "100%",
    active: isOpen ? "on" : "off",
  }
  return (
    <>
      <div style={{display: "flex", gap: "0 20px"}}>
        <button onClick={handleOpen}>{isOpen ? "닫기" : "열기"}</button>
        <div style={{width: "1000px", height: "400px", border: "1px solid #d6d6d6"}}>
          <HISPopOver>
            <HISPopOverContent
              {...popOverOption}
            >
              계절이 지나가는 하늘에는 가을로 가득 차 있습니다. <br /><br />
              나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다...<br /><br />
              가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.<br /><br />
              별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니
            </HISPopOverContent>
            <HISPopOverPanel
              {...popOverOption}
            >
              어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이했던 아이들의 이름과, 패, 경, 옥 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, '프랑시스 잠', '라이너 마리아 릴케', 이런 시인의 이름을 불러 봅니다.
            </HISPopOverPanel>
          </HISPopOver>
        </div>
      </div>
    </>
  )
}

export default HISPopOverOutButton;


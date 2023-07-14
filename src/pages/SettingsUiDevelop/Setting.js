import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { PrismCodePage } from "@/pages/PrismCode";

const homebrewCode = `/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”`;
const gitCode = `brew install git`;
const nodeCode = `brew install node@14.19.0`;
const bashCode = [
  `git clone http://14.41.55.45:8089/microfront/his-ui-kit.git`,
  `cd his-ui-kit`,
  `git checkout publishing`,
  `git pull origin publishing`,
  `mkdir HIS-UI-KIT`,
  `cd HIS-UI-KIT`
];
const pythonCode = [
  `python -V`,
  `brew install python3`,
  `python3 -V`,
  `which python3`,
  `echo "alias python=[python3 경로]" >> ~/.zshrc`,
  `echo "alias python=/opt/homebrew/bin/python3" >> ~/.zshrc`,
  `pip3 install --upgrade pip`,
  `xcode-select --install`
]
const nodeenvCode = [
  `sudo pip3 install nodeenv`,
  `nodeenv --node=18.14.2 --npm=9.5.0 env-18.14.2`,
  `-rw-r--r--    1 jojoldu  staff   172B  5  1 21:49 README.md
drwxr-xr-x    7 jojoldu  staff   224B  5  1 22:59 env-18.14.2
drwxr-xr-x  438 jojoldu  staff    14K  5  1 22:19 node_modules
-rw-r--r--    1 jojoldu  staff   477B  5  1 21:50 ormconfig.json
-rw-r--r--    1 jojoldu  staff   485K  5  1 22:19 package-lock.json
-rw-r--r--    1 jojoldu  staff   491B  5  1 21:52 package.json
drwxr-xr-x    5 jojoldu  staff   160B  5  1 21:49 src
-rw-r--r--    1 jojoldu  staff   298B  5  1 21:49 tsconfig.json`,
  `. env-18.14.2/bin/activate`,
  `deactivate_node`,
  ``,
];
const yarnCode = `npm install -g yarn`;

function Setting() {
  const location = useLocation();
  return (
    <>
      {
        location.state
        ? <Header title={location.state} />
        : <Header title="Settings" />
      }
      <h2 className="guide-title"><span>UI Develop</span></h2>
      <div className="guide-box" id="Homebrew">
        <h3>Homebrew 설치하기</h3>
        <p>Mac 사용자는 <span className="tag">Homebrew</span> 를 설치하면 Apple(또는 Linux 시스템)에서 제공하지 않는 유용한 패키지 관리자를 사용할 수 있습니다.</p>
        <PrismCodePage code={homebrewCode} language="bash" />
      </div>

      <div className="guide-box" id="Git">
        <h3>Git 설치하기</h3>
        <p>코드 형상 관리를 위해 Homebrew 설치 후 <span className='tag'>git</span> 을 설치합니다. </p>
        <PrismCodePage code={gitCode} language="bash" />
      </div>

      <div className="guide-box" id="Node">
        <h3>Node.js 설치하기</h3>
        <p>Node 개발 환경을 구성하고 프로젝트별로 Node 환경을 다르게 관리하기 위해 nodeenv를 통해 가상 환경을 구축합니다.</p>

        <h4>Node.js 설치</h4>
        <PrismCodePage code={nodeCode} language="bash" />

        <h4>Node 가상 환경 구성</h4>
        <p>HIS UI KIT를 <span className="tag">Git</span> 또는 <span className="tag">프로젝트 폴더</span>를 생성하여 개발 환경을 구성합니다.</p><br />
        <p>• 폴더 구성</p>
        <p>- Git</p>
        <p>1. HIS UI KIT Cloning</p>
        <PrismCodePage code={bashCode[0]} language="bash" />
        <p>2. HIS UI KIT 이동</p>
        <PrismCodePage code={bashCode[1]} language="bash" />
        <p>3. <span className="tag">publishing</span>으로 브랜치 변경</p>
        <PrismCodePage code={bashCode[2]} language="bash" />
        <p>4. <span className="tag">publishing</span> 브랜치 데이터 가져오기</p>
        <PrismCodePage code={bashCode[3]} language="bash" />
        <p>- 프로젝트 폴더</p>
        <p>1. HIS UI KIT 폴더 생성</p>
        <PrismCodePage code={bashCode[4]} language="bash" />
        <p>2. HIS UI KIT 이동</p>
        <PrismCodePage code={bashCode[5]} language="bash" />
        <h4>Python 업그레이드</h4>
        <p>Node 가상 환경을 구현하는 nodeenv는 pip3 명령어를 사용하며 해당 명령어는 Python 3.x.x에서 지원함으로 Python 3.x.x으로 업그레이드 합니다.</p><br />
        <p>1. Python 설치 여부 확인</p>
        <PrismCodePage code={pythonCode[0]} language="bash" />
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '50%', paddingBottom: '0' }}>
            <div className="guide-contents-description">
              <h5>• Python 3.x.x가 없거나 2.x.x 버전인 경우</h5>
              <p>Brew를 통해 설치</p>
              <PrismCodePage code={pythonCode[1]} language="bash" />
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '50%', paddingBottom: '0' }}>
            <div className="guide-contents-description">
              <h5>• Python 버전 확인이 안되는 경우</h5>
              <p>Python 3 코드를 통해 버전 확인</p>
              <PrismCodePage code={pythonCode[2]} language="bash" />
            </div>
          </div>
        </div>
        <p>2. 별칭(Alias) 등록을 위해 <span className="tag">Python 설치 경로</span> 확인</p>
        <PrismCodePage code={pythonCode[3]} language="bash" />
        <p>3. <span className="tag">별칭(Alias)</span> 지정 - 별칭(Alias)를 통해 Python3를 Python 기본값으로 사용</p>
        <PrismCodePage code={pythonCode[4]} language="bash" />
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '100%', paddingBottom: '0' }}>
            <div className="guide-contents-description">
              <h5>예) <span className="tag">/opt/homebrew/bin/python3</span> ▶︎ <span className="blue">[python3 경로]</span>에 작성</h5>
              <PrismCodePage code={pythonCode[5]} language="bash" />
            </div>
          </div>
        </div>
        <p>4. Python3 업그레이드 (nodeenv 설치 시 pip3 명령어를 사용함으로 pip3명령어를 지원하는 Python3 설치 후 <span className="tag">pip → pip3 업그레이드</span> 필요)</p>
        <PrismCodePage code={pythonCode[6]} language="bash" />
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '100%', paddingBottom: '0' }}>
            <h5>• <span className="red">xcode</span> or <span className="blue">xcrun</span> 에러 발생 시</h5>
            <p>
              CommandLineTools이 없는 경우 발생하며 xcode를 설치함으로 해결 → Python 설치 전 GCC 설치 필요, GCC 설치 시 <u>CommandLineTools</u> or <u>OSX-GCC-Installer</u> 패키지 다운로드가 필요함.
            </p>
            <PrismCodePage code={pythonCode[7]} language="bash" />
          </div>
        </div>

        <h4>nodeenv로 Node 가상 환경 구성</h4>
        <p>1. <span className="tag">nodeenv</span> 설치 (전역)</p>
        <PrismCodePage code={nodeenvCode[0]} language="bash" />
        <p>2. 특정 버전의 Node 환경 구성 (<span className="tag">Node 18.14.2</span> / <span className="tag">npm 9.5.0</span>으로 임의 구성)</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '50%', paddingBottom: '0' }}>
            <div className="guide-contents-description">
              <h5>• env 폴더 생성</h5>
              <p>--node=<span className="blue">[Node 버전]</span>: 설치하고자 하는 Node 버전 입력</p>
              <p>--npm=<span className="blue">[npm 버전]</span>: 설치하고자 하는 Node 버전에 맞는 npm 버전 입력 (Node.js Release 참고)</p>
              <p>env-<span className="blue">[Node 버전]</span>: 생성하고자 하는 폴더 이름 입력</p>
              <PrismCodePage code={nodeenvCode[1]} language="bash" />
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '50%', paddingBottom: '0' }}>
            <div className="guide-contents-description">
              <h5>• 폴더 구조</h5>
              <PrismCodePage code={nodeenvCode[2]} language="bash" />
            </div>
          </div>
        </div>
        <h4>가상 환경 확인</h4>
        <p>1. 가상 환경 활성화</p>
        <p><span className="tag">. <span className="red">[가상환경폴더명]</span>/bin/activate</span></p>
        <PrismCodePage code={nodeenvCode[3]} language="bash" />
        <p>2. 가상 환경 비활성화</p>
        <PrismCodePage code={nodeenvCode[4]} language="bash" />
      </div>

      <div className="guide-box" id="Yarn">
        <h3>Yarn 설치하기</h3>
        <p>node module 패키지 매니저로 npm 보다는 설치가 빠른 yarn 으로 전역에 설치합니다.</p>
        <PrismCodePage code={yarnCode} language="bash" />
      </div>
    </>
  )
}

export default Setting;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GNB() {
  // 1. LNB 메뉴들 마크업으로 MAP 빼고 마크업으로만 정리
  // 2. 메뉴 클릭시 해당 페이지로 이동
  const [dataMenu, setDataMenu] = useState([
    {
      title: 'Settings',
      id: 1,
      depth2: [
        {
          title: 'UI Develop',
          id: 1,
          depth3: [
            {
              title: 'Setting',
              id: 1,
            },
            {
              title: 'Plugin',
              id: 2,
            }
          ]
        },
      ]
    },
    {
      title: 'Components',
      id: 2,
      depth2: [
        {
          title: 'UI Kit',
          id: 2,
          depth3: [
            {
              title: 'HISCheckbox',
              id: 1,
            },
            {
              title: 'HISCheckboxGroup',
              id: 2,
            },
            {
              title: 'HISTitle',
              id: 3,
            },
            {
              title: 'HISRadioButton',
              id: 4,
            },
            {
              title: 'HISTable',
              id: 5,
            },
            {
              title: 'HISTab',
              id: 6,
            },
            {
              title: 'HISToggleSwitch',
              id: 7,
            },
            {
              title: 'HISInput',
              id: 8,
            },
            {
              title: 'HISToolTip',
              id: 9,
            },
            {
              title: 'HISGridLayout',
              id: 10,
            },
            {
              title: 'HISParagraph',
              id: 11,
            },
            {
              title: 'HISPopOver',
              id: 12,
            },
            {
              title: 'HISButton',
              id: 13,
            }
          ]
        },
        {
          title: 'Blocks',
          id: 3,
          depth3: [
            {
              title: 'Header',
              id: 1,
            },
            {
              title: 'Footer',
              id: 2,
            },
            {
              title: 'Container',
              id: 3,
            },
            {
              title: 'Search',
              id: 4,
            },
          ]
        },
        {
          title: 'Templates',
          id: 4,
          depth3: [
            {
              title: 'Template1',
              id: 1,
            },
            {
              title: 'Template2',
              id: 2,
            },
            {
              title: 'Template3',
              id: 3,
            },
          ],
        }
      ]
    },
    {
      title: 'Styles',
      id: 3,
      depth2: [
        {
          title: 'UI Kit',
          id: 5,
          depth3: [
            {
              title: 'GridFlex',
              id: 1,
            },
            {
              title: 'GridGrid',
              id: 2,
            }
          ]
        },
      ]
    }
  ]);

  // const curLocation = useLocation().pathname;

  // useEffect(() => {
  //   // 라우터 값이 바뀔 때 해당 섹션으로 이동
  //   if (curLocation.split('/')[1]) {
  //     setTimeout(function() {
  //       const positionIdValue = curLocation.split('/')[1];
  //       const positionOffset = '#' + positionIdValue;
  //       const positionMove = document.querySelector(positionOffset).offsetTop - 80;
  //       window.scrollTo({
  //         left: 0,
  //         top: positionMove,
  //         behavior: 'smooth',
  //       });
  //     }, 50);
  //   }
  // }, [curLocation]);

  const [toggleState, setToggleState] = useState({
    menu1 : false,
    menu2 : false,
    menu3 : false,
    menu4 : false,
  });

  const [menuState, setMenuState] = useState(0);


  const handleToggle = (menu) => {
    setToggleState({
      ...toggleState,
      [menu] : !toggleState[menu],
    });
  }

  const handleClick = (e, idx) => {
    setMenuState(idx);
  }

  return (
    <div className="gnb">
      <h1 className="title">HIS UI KIT</h1>
      <ul>
        {dataMenu.map(d1 => {
          return (
            <li key={d1.id}>
              <h2 className="title">{d1.title}</h2>
              <ul>
                {d1.depth2.map(d2 => {
                  return (
                    <li key={d2.id}>
                      <button
                        onClick={() => handleToggle('menu'+d2.id)}
                        className={toggleState['menu'+d2.id] ? 'active' : ''}
                      >
                        {d2.title}
                      </button>
                      <ul>
                        {d2.depth3.map(d3 => {
                          return (
                            <li key={d3.id}>
                              <Link to={d3.title} state={d1.title}
                                onClick={e => handleClick(e, d3.id)}
                                className={menuState === d3.id? 'active' : ''}>
                                <button>
                                  {d3.title}
                                </button>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GNB
import React from "react";
import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

function HISTabDefault () {
  return (
    <>
      <p>
        Noto Sans CJK KR / Font Size 12px / Line height 1.3 / Scale 1.2<br />
        Default - Font Size Medium(14px)
      </p>
      <HISTab>
        <HISTabMenuGroup>
          <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
          <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
          <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
        </HISTabMenuGroup>
        <HISTabPanel panelValue={1}>
          HISTabPanel1<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu massa, elementum vitae nisl nec, lobortis maximus nisl. Morbi viverra tincidunt ipsum, sed iaculis felis pellentesque non. Aliquam faucibus sem a varius cursus. Proin pharetra sem nisi, nec condimentum tortor auctor nec. Nulla fringilla dictum dictum. Nullam viverra suscipit mi vel lacinia. Vestibulum eget arcu magna. Quisque rutrum metus vitae faucibus imperdiet. Nulla id varius erat, et mollis magna.<br />
          Integer tincidunt lobortis sem eget efficitur. Sed bibendum erat eget rhoncus tincidunt. Sed pharetra dapibus finibus. Aliquam erat volutpat. Praesent mattis et orci scelerisque posuere. Nullam et purus quis mi ornare consequat. Aliquam pretium iaculis varius. Nunc quis elementum mi, vel maximus orci.<br />
          Sed vestibulum, odio pulvinar luctus scelerisque, lectus quam tincidunt nunc, vel scelerisque leo tellus a est. Nulla finibus accumsan interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis congue nibh eu diam ornare, sit amet euismod leo malesuada. Pellentesque nibh odio, pellentesque eget dictum et, blandit viverra ante. Proin pulvinar turpis consequat, consectetur eros id, sodales mauris. Vestibulum eleifend mi libero, in ullamcorper lorem vestibulum a. Duis odio mi, pretium id quam id, semper mattis sapien. Aenean blandit erat ipsum, ut pharetra velit fringilla sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut hendrerit, quam malesuada ornare laoreet, sem tortor maximus sapien, at aliquam est nunc ut erat. Morbi non sollicitudin dui, eu pellentesque augue. Etiam nec neque suscipit, pretium turpis et, rutrum nulla. Vestibulum maximus dui sit amet lectus varius molestie.<br />
          Fusce congue nulla ut pellentesque ullamcorper. Curabitur eget metus eu ex scelerisque euismod accumsan non lectus. Nulla mauris nunc, facilisis eu tellus vel, consequat luctus elit. Nulla sit amet vulputate lectus. Vivamus accumsan in eros ut vehicula. Aliquam congue pulvinar est, non varius dui. Aliquam convallis aliquam justo, ut ornare mauris malesuada in. In neque nulla, eleifend ac mauris ut, mattis finibus nulla. Fusce tempus nulla nunc, sit amet vehicula nisl aliquet id.
        </HISTabPanel>
        <HISTabPanel panelValue={2}>
          HISTabPanel2<br /><br />
          <table>
            <colgroup>
              <col width="20%" span="4"/>
            </colgroup>
            <thead>
              <tr>
                <th>heading1</th>
                <th>heading2</th>
                <th>heading3</th>
                <th>heading4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data1-1</td>
                <td>data1-2</td>
                <td>data1-3</td>
                <td>data1-4</td>
              </tr>
              <tr>
                <td>data2-1</td>
                <td>data2-2</td>
                <td>data2-3</td>
                <td>data2-4</td>
              </tr>
            </tbody>
          </table>
        </HISTabPanel>
        <HISTabPanel panelValue={3}>
          HISTabPanel3<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu massa, elementum vitae nisl nec, lobortis maximus nisl. Morbi viverra tincidunt ipsum, sed iaculis felis pellentesque non. Aliquam faucibus sem a varius cursus. Proin pharetra sem nisi, nec condimentum tortor auctor nec. Nulla fringilla dictum dictum. Nullam viverra suscipit mi vel lacinia. Vestibulum eget arcu magna. Quisque rutrum metus vitae faucibus imperdiet. Nulla id varius erat, et mollis magna.<br />
          Integer tincidunt lobortis sem eget efficitur. Sed bibendum erat eget rhoncus tincidunt. Sed pharetra dapibus finibus. Aliquam erat volutpat. Praesent mattis et orci scelerisque posuere. Nullam et purus quis mi ornare consequat. Aliquam pretium iaculis varius. Nunc quis elementum mi, vel maximus orci.<br />
          Sed vestibulum, odio pulvinar luctus scelerisque, lectus quam tincidunt nunc, vel scelerisque leo tellus a est. Nulla finibus accumsan interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis congue nibh eu diam ornare, sit amet euismod leo malesuada. Pellentesque nibh odio, pellentesque eget dictum et, blandit viverra ante. Proin pulvinar turpis consequat, consectetur eros id, sodales mauris. Vestibulum eleifend mi libero, in ullamcorper lorem vestibulum a. Duis odio mi, pretium id quam id, semper mattis sapien. Aenean blandit erat ipsum, ut pharetra velit fringilla sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut hendrerit, quam malesuada ornare laoreet, sem tortor maximus sapien, at aliquam est nunc ut erat. Morbi non sollicitudin dui, eu pellentesque augue. Etiam nec neque suscipit, pretium turpis et, rutrum nulla. Vestibulum maximus dui sit amet lectus varius molestie.<br />
          Fusce congue nulla ut pellentesque ullamcorper. Curabitur eget metus eu ex scelerisque euismod accumsan non lectus. Nulla mauris nunc, facilisis eu tellus vel, consequat luctus elit. Nulla sit amet vulputate lectus. Vivamus accumsan in eros ut vehicula. Aliquam congue pulvinar est, non varius dui. Aliquam convallis aliquam justo, ut ornare mauris malesuada in. In neque nulla, eleifend ac mauris ut, mattis finibus nulla. Fusce tempus nulla nunc, sit amet vehicula nisl aliquet id.
        </HISTabPanel>
      </HISTab>
    </>
  )
}

export default HISTabDefault;
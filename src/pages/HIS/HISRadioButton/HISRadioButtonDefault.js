import React from 'react';
import {
  HISRadioButton
} from 'components/HISRadioButton';

function HISRadioButtonDefault () {

  return (
    <>
      <table className="component-table">
        <thead>
          <tr>
            <th>State(상태)</th>
            <th>Default(기본)</th>
            <th>Over(마우스오버)</th>
            <th>Click(마우스클릭)</th>
            <th>Disable(비활성화)</th>
            <th>Disable(비활성화)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>RadioButton +<br/>Text</th>
            <td>
              <HISRadioButton
                id="radiobutton-default1"
                name="default1"
              >
                기본
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-hover1"
               name="hover1"
              >
                마우스오버
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-checked1"
               name="checked1"
               checked
              >
                클릭
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-disabled1"
               name="radiobutton-disabled1"
               disabled
              >
                비활성화
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
                id="radiobutton-checked-disabled1"
                name="radiobutton-checked-disabled1"
                checked
                disabled
              >
                비활성화 선택상태
              </HISRadioButton>
            </td>
          </tr>
          <tr>
            <th>RadioButton</th>
            <td>
              <HISRadioButton
                id="radiobutton-default2"
                name="radiobutton-default2"
              >
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-hover2"
               name="radiobutton-hover2"
              >
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-checked2"
               name="radiobutton-checked2"
               checked
              >
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-disabled2"
               name="radiobutton-disabled2"
               disabled
              >
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
                id="radiobutton-checked-disabled2"
                name="radiobutton-checked-disabled2"
                checked
                disabled
              >
              </HISRadioButton>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="component-table">
        <thead>
          <tr>
            <th>State(상태)</th>
            <th>Required(필수)</th>
            <th>Required Check(필수 선택)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>RadioButton +<br/>Text</th>
            <td>
              <HISRadioButton
                id="radiobutton-required"
                name="radiobutton-required"
                required
              >
                필수
              </HISRadioButton>
            </td>
            <td>
              <HISRadioButton
               id="radiobutton-checked-required"
               name="radiobutton-checked-required"
               checked
               required
              >
                필수 선택
              </HISRadioButton>
            </td>
          </tr>
          <tr>
            <th>RadioButton</th>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default HISRadioButtonDefault
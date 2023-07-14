import React from "react";
import {
  HISCheckbox,
} from "components/HISCheckbox";

function HISCheckboxDefault () {
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
            <th>Checkbox + Text</th>
            <td>
              <HISCheckbox
                id="checkbox-default1"
              >
                기본
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-hover1"
              >
                마우스오버
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-checked1"
                checked
              >
                클릭
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-disabled1"
                disabled
              >
                비활성화
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-checked-disabled1"
                checked
                disabled
              >
                비활성화 선택
              </HISCheckbox>
            </td>
          </tr>
          <tr>
            <th>Checkbox</th>
            <td>
              <HISCheckbox
                id="checkbox-default2"
              >
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-hover2"
              >
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-checked2"
                checked
              >
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-disabled2"
                disabled
              >
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-checked-disabled2"
                checked
                disabled
              >
              </HISCheckbox>
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
            <th>Checkbox + Text</th>
            <td>
              <HISCheckbox
                id="checkbox-required"
                required
              >
                필수
              </HISCheckbox>
            </td>
            <td>
              <HISCheckbox
                id="checkbox-checked-required1"
                checked
                required
              >
                필수 선택
              </HISCheckbox>
            </td>
          </tr>
          <tr>
            <th>Checkbox</th>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default HISCheckboxDefault
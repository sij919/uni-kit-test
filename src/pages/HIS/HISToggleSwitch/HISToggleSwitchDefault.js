import React from "react";
import {
  HISToggleSwitch,
} from "components/HISToggleSwitch";

function HISToggleSwitchDefault () {

  return (
    <>
      <table className="component-table">
        <thead>
          <tr>
            <th>State(상태)</th>
            <th>Off</th>
            <th>On</th>
          </tr>
          <tr>
            <th>Toggle</th>
            <td>
              <HISToggleSwitch id="toggle-switch-off" />
            </td>
            <td>
              <HISToggleSwitch id="toggle-switch-on" theme="hover" checked />
            </td>
          </tr>
          <tr>
            <th>Toggle+Text<br />Type 1</th>
            <td>
              <HISToggleSwitch id="off-out" theme="on-off-out" />
            </td>
            <td>
              <HISToggleSwitch id="on-out" theme="on-off-out" checked />
            </td>
          </tr>
          <tr>
            <th>Toggle+Text<br />Type 2</th>
            <td>
              <HISToggleSwitch id="off-in" theme="on-off-in" />
            </td>
            <td>
              <HISToggleSwitch id="on-in" theme="on-off-in" checked />
            </td>
          </tr>
          <tr>
            <th>Toggle+Text<br />Outside Left</th>
            <td>
              <div className="component-flex-center">
                <HISToggleSwitch id="off-left" theme="on-off-left">
                  Text Left
                </HISToggleSwitch>
              </div>
            </td>
            <td>
              <div className="component-flex-center">
                <HISToggleSwitch id="on-left" theme="on-off-left" checked>
                  Text Left
                </HISToggleSwitch>
              </div>
            </td>
          </tr>
          <tr>
            <th>Toggle+Text<br />Outside Right</th>
            <td>
              <div className="component-flex-center">
                <HISToggleSwitch id="off-right" theme="on-off-right">
                  Text Right
                </HISToggleSwitch>
              </div>
            </td>
            <td>
              <div className="component-flex-center">
                <HISToggleSwitch id="on-right" theme="on-off-right" checked>
                  Text Right
                </HISToggleSwitch>
              </div>
            </td>
          </tr>
        </thead>
      </table>
    </>
  )
}

export default HISToggleSwitchDefault
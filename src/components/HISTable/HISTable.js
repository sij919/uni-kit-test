import React from "react";

function HISTable({type, headingPosition, thAlign, tdAlign, thBgColor, tdBgColor, borderRadius}) {
  return(
    <>
      <div className="table-wrap">
        <table className={`${type} ${borderRadius}`}>
          {
            headingPosition === 'column' || headingPosition === 'both' ?
            <thead>
              <tr className={`${thAlign} ${thBgColor}`}>
                {
                  headingPosition === 'both'
                  ?<th></th>
                  :<th>heading1</th>
                }
                <th>heading2</th>
                <th>heading3</th>
                <th>heading4</th>
                <th>heading5</th>
              </tr>
            </thead>
            : null
          }
          {
            headingPosition === 'column'?
            <tbody>
              <tr className={`${tdAlign} ${tdBgColor}`}>
                  <td>data1</td>
                  <td>data2</td>
                  <td>data3</td>
                  <td>data4</td>
                  <td>data5</td>
              </tr>
              <tr className={`${tdAlign} ${tdBgColor}`}>
                  <td>data1</td>
                  <td>data2</td>
                  <td>data3</td>
                  <td>data4</td>
                  <td>data5</td>
              </tr>
            </tbody>
            :
            <tbody>
              <tr className={`${thAlign} ${tdAlign} ${thBgColor} ${tdBgColor}`}>
                <th>heading1</th>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
                <td>data4</td>
              </tr>
              <tr className={`${thAlign} ${tdAlign} ${thBgColor} ${tdBgColor}`}>
                <th>heading2</th>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
                <td>data4</td>
              </tr>
              <tr className={`${thAlign} ${tdAlign} ${thBgColor} ${tdBgColor}`}>
                <th>heading3</th>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
                <td>data4</td>
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  )
}

HISTable.defaultProps = {
  type: "h3", //h3, h2, h1
  headingPosition: "column", //column, row, both
  thAlign: "th-align-center", //th-align-left, th-align-center, th-align-right
  tdAlign: "td-align-center", //td-align-left, td-align-center, td-align-right
  thBgColor: "", //th-bg-grey, th-bg-pink, th-bg-blue, th-bg-green
  tdBgColor: "", //td-bg-grey, td-bg-pink, td-bg-blue, td-bg-green
  borderRadius: ""  // border-small, border-medium, border-big
}

export default HISTable;
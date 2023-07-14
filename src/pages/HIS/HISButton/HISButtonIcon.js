import React from 'react';
import {
  HISButton
} from 'components/HISButton';
import { PrismCodePage } from '@/pages/PrismCode';

const HISButtonIconMediumCode =
`// arrow-up
<HISButton type="icon" size="medium" icon={{normal: "arrow-up"}} />
// arrow-down
<HISButton type="icon" size="medium" icon={{normal: "arrow-down"}} />
// arrow-left
<HISButton type="icon" size="medium" icon={{normal: "arrow-left"}} />
// arrow-right
<HISButton type="icon" size="medium" icon={{normal: "arrow-right"}} />
// search
<HISButton type="icon" size="medium" icon={{normal: "search"}} />
// trashcan
<HISButton type="icon" size="medium" icon={{normal: "trashcan"}} />
// setting
<HISButton type="icon" size="medium" icon={{normal: "setting"}} />
// attach
<HISButton type="icon" size="medium" icon={{normal: "attach"}} />
// search-document
<HISButton type="icon" size="medium" icon={{normal: "search-document"}} />
// calendar
<HISButton type="icon" size="medium" icon={{normal: "calendar"}} />
// document
<HISButton type="icon" size="medium" icon={{normal: "document"}} />
// note
<HISButton type="icon" size="medium" icon={{normal: "note"}} />
// reset
<HISButton type="icon" size="medium" icon={{normal: "reset"}} />
// refresh
<HISButton type="icon" size="medium" icon={{normal: "refresh"}} />
// download
<HISButton type="icon" size="medium" icon={{normal: "download"}} />
// excel-save
<HISButton type="icon" size="medium" icon={{normal: "excel-save"}} />
// excel-upload
<HISButton type="icon" size="medium" icon={{normal: "excel-upload"}} />
// edit
<HISButton type="icon" size="medium" icon={{normal: "edit"}} />
// maximize
<HISButton type="icon" size="medium" icon={{normal: "maximize"}} />
// add
<HISButton type="icon" size="medium" icon={{normal: "add"}} />
// minus
<HISButton type="icon" size="medium" icon={{normal: "minus"}} />
// close
<HISButton type="icon" size="medium" icon={{normal: "close"}} />
// view-list
<HISButton type="icon" size="medium" icon={{normal: "view-list"}} />
// print
<HISButton type="icon" size="medium" icon={{normal: "print"}} />
// filter
<HISButton type="icon" size="medium" icon={{normal: "filter"}} />
// graph
<HISButton type="icon" size="medium" icon={{normal: "graph"}} />
// save
<HISButton type="icon" size="medium" icon={{normal: "save"}} />
// selective
<HISButton type="icon" size="medium" icon={{normal: "selective"}} />`;

const HISButtonIconLargeCode =
`// arrow-up
<HISButton type="icon" size="large" icon={{normal: "arrow-up"}} />
// arrow-down
<HISButton type="icon" size="large" icon={{normal: "arrow-down"}} />
// arrow-left
<HISButton type="icon" size="large" icon={{normal: "arrow-left"}} />
// arrow-right
<HISButton type="icon" size="large" icon={{normal: "arrow-right"}} />
// search
<HISButton type="icon" size="large" icon={{normal: "search"}} />
// trashcan
<HISButton type="icon" size="large" icon={{normal: "trashcan"}} />
// setting
<HISButton type="icon" size="large" icon={{normal: "setting"}} />
// attach
<HISButton type="icon" size="large" icon={{normal: "attach"}} />
// search-document
<HISButton type="icon" size="large" icon={{normal: "search-document"}} />
// calendar
<HISButton type="icon" size="large" icon={{normal: "calendar"}} />
// document
<HISButton type="icon" size="large" icon={{normal: "document"}} />
// note
<HISButton type="icon" size="large" icon={{normal: "note"}} />
// reset
<HISButton type="icon" size="large" icon={{normal: "reset"}} />
// refresh
<HISButton type="icon" size="large" icon={{normal: "refresh"}} />
// download
<HISButton type="icon" size="large" icon={{normal: "download"}} />
// excel-save
<HISButton type="icon" size="large" icon={{normal: "excel-save"}} />
// excel-upload
<HISButton type="icon" size="large" icon={{normal: "excel-upload"}} />
// edit
<HISButton type="icon" size="large" icon={{normal: "edit"}} />
// maximize
<HISButton type="icon" size="large" icon={{normal: "maximize"}} />
// add
<HISButton type="icon" size="large" icon={{normal: "add"}} />
// minus
<HISButton type="icon" size="large" icon={{normal: "minus"}} />
// close
<HISButton type="icon" size="large" icon={{normal: "close"}} />
// view-list
<HISButton type="icon" size="large" icon={{normal: "view-list"}} />
// print
<HISButton type="icon" size="large" icon={{normal: "print"}} />
// filter
<HISButton type="icon" size="large" icon={{normal: "filter"}} />
// graph
<HISButton type="icon" size="large" icon={{normal: "graph"}} />
// save
<HISButton type="icon" size="large" icon={{normal: "save"}} />
// selective
<HISButton type="icon" size="large" icon={{normal: "selective"}} />`;

function HISButtonIcon() {
  return (
    <>
      <div className="component-wrap-subject">Medium</div>
      <p>
        정사각형 모양의 사이즈 26px 아이콘 버튼, Radius 3px
      </p>
      <div className="component-wrap component-wrap-horizontal">
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "arrow-up" }}
            />
            <div>arrow-up</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "download" }}
            />
            <div>download</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "arrow-down" }}
            />
            <div>arrow-down</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "excel-save" }}
            />
            <div>excel-save</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "arrow-left" }}
            />
            <div>arrow-left</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "excel-upload" }}
            />
            <div>excel-upload</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "arrow-right" }}
            />
            <div>arrow-right</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "edit" }}
            />
            <div>edit</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "search" }}
            />
            <div>search</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "maximize" }}
            />
            <div>maximize</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "trashcan" }}
            />
            <div>trashcan</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "add" }}
            />
            <div>add</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "setting" }}
            />
            <div>setting</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "minus" }}
            />
            <div>minus</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "attach" }}
            />
            <div>attach</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "close" }}
            />
            <div>close</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "search-document" }}
            />
            <div>search-document</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "view-list" }}
            />
            <div>view-list</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "calendar" }}
            />
            <div>calendar</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "print" }}
            />
            <div>print</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "document" }}
            />
            <div>document</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "filter" }}
            />
            <div>filter</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "note" }}
            />
            <div>note</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "graph" }}
            />
            <div>graph</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "reset" }}
            />
            <div>reset</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "save" }}
            />
            <div>save</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "refresh" }}
            />
            <div>refresh</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="medium"
              icon={{ normal: "selective" }}
            />
            <div>selective</div>
          </div>
        </div>
      </div>
      <PrismCodePage code={HISButtonIconMediumCode} language="jsx" />

      <div className="component-wrap-subject">Large</div>
      <p>
        정사각형 모양의 사이즈 30px 아이콘 버튼, Radius 4px
      </p>
      <div className="component-wrap component-wrap-horizontal">
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "arrow-up" }}
            />
            <div>arrow-up</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "download" }}
            />
            <div>download</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "arrow-down" }}
            />
            <div>arrow-down</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "excel-save" }}
            />
            <div>excel-save</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "arrow-left" }}
            />
            <div>arrow-left</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "excel-upload" }}
            />
            <div>excel-upload</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "arrow-right" }}
            />
            <div>arrow-right</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "edit" }}
            />
            <div>edit</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "search" }}
            />
            <div>search</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "maximize" }}
            />
            <div>maximize</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "trashcan" }}
            />
            <div>trashcan</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "add" }}
            />
            <div>add</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "setting" }}
            />
            <div>setting</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "minus" }}
            />
            <div>minus</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "attach" }}
            />
            <div>attach</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "close" }}
            />
            <div>close</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "search-document" }}
            />
            <div>search-document</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "view-list" }}
            />
            <div>view-list</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "calendar" }}
            />
            <div>calendar</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "print" }}
            />
            <div>print</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "document" }}
            />
            <div>document</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "filter" }}
            />
            <div>filter</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "note" }}
            />
            <div>note</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "graph" }}
            />
            <div>graph</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "reset" }}
            />
            <div>reset</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "save" }}
            />
            <div>save</div>
          </div>
        </div>
        <div className="component-wrap-contents">
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "refresh" }}
            />
            <div>refresh</div>
          </div>
          <div className="component-wrap-icon">
            <HISButton
              type="icon"
              size="large"
              icon={{ normal: "selective" }}
            />
            <div>selective</div>
          </div>
        </div>
      </div>
      <PrismCodePage code={HISButtonIconLargeCode} language="jsx" />
    </>
  );
}

export default HISButtonIcon
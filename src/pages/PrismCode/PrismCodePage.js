import React, { useEffect } from "react";
import Prism from "prismjs";
import "./PrismCustom.scss";

function PrismCodePage({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default PrismCodePage
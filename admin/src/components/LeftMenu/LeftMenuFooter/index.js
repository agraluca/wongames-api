import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered By{" "}
        <a
          key="website"
          href="https://oladev.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luca Agra
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;

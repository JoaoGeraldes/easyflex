import React from "react";
import { FlexContainer, FlexItem } from "./components/Easyflex";
import "./styles/Easyflex.css";

function App() {
  return (
    <FlexContainer className="testing" xaxis="space1" yaxis="bottom">
      <FlexItem>
        <div className="custom">1</div>
      </FlexItem>
      <FlexItem>
        <div className="custom">2</div>
      </FlexItem>
      <FlexItem>
        <div className="custom">3</div>
      </FlexItem>
    </FlexContainer>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import Welcome from "../../containers/Welcome";

const WELCOMEPage = () => {
  const {
    welcome: { list },
  } = useSelector((state) => state.store);
  return (
    <>
      <Welcome>
        <h1>{list?.team}</h1> <br />
        <h2>{list?.greetings}</h2> <br />
        <h3>시작하기</h3>
      </Welcome>
    </>
  );
};

export default WELCOMEPage;

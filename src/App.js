import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resize } from "./helpers/Util";
import { fetchWelcome } from "./redux/welcomeSlice";
import WELCOMEPage from "./pages/WELCOME/WELCOMEPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  //테스트용 개발시 삭제
  useEffect(() => {
    dispatch(fetchWelcome("welcome"));
    const id = setInterval(() => {
      dispatch(fetchWelcome("welcome"));
    }, window.COMMON_CONFIG.setInterval * 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  //
  return (
    <>
      <div className="container">
        <WELCOMEPage />
      </div>
    </>
  );
};

export default App;

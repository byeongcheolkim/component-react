import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const S = {
  Main: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
};
const Welcome = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

Welcome.propTypes = {
  children: PropTypes.node,
};

export default Welcome;

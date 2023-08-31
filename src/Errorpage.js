import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h2>UH OH ! You're lost.</h2>
          <p>
            The page you are looking for does not exist.How you got here is a
            mystery.But yo u can click the button below to fo back Homepage.
          </p>
          <NavLink to="/">
            <Button> Go Back to Home page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h1 {
      font-size: 10rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default Errorpage;

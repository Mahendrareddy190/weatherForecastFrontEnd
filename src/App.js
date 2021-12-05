import React, { useEffect, useState } from "react";
import Home from "../src/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/PropagateLoader";

const App = () => {
  const override = css`
    display: flex;
    justify-content: center;
    margin: 350px 0 0 0;
    border-color: red;
    @media screen and (max-width: 600px) {
      margin: 388px 0 0 0px;
    }
  `;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loading ? (
            <RiseLoader
              color="#F71071"
              loading={loading}
              css={override}
              size={30}
            />
          ) : (
            <Home />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

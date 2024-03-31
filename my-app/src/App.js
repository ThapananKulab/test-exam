import React from "react";
import { userContext } from "./context";
import Header from "./context-header";
import Content from "./context-content";
import Header2 from "./context-header2";
import Content2 from "./context-content2";
import Test1 from "./test";
import Test2 from "./test2";
import Test3 from "./test3";

export default function App() {
  let [user, setUser] = React.useState();
  return (
    <>
      <userContext.Provider value={"Tom Jerry"}>
        <Header />
        <Content />
      </userContext.Provider>
      <br />

      <userContext.Provider value={[user, setUser]}>
        <Header2 />
        <Content2 />
      </userContext.Provider>
      <Test1 />
      <Test2 />
      <Test3 />
    </>
  );
}

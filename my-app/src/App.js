import React from "react";
import { userContext } from "./context";
import Header from "./context-header";
import Content from "./context-content";
import Header2 from "./context-header2";
import Content2 from "./context-content2";

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
    </>
  );
}

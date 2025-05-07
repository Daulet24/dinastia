import React from "react";
import { Header } from "./features/header";
import { Home } from "./features/main";
import { Main } from "./features/main2";
import { Benefits } from "./features/benefits";
import "./shared/styles/global.scss";
import { IdealComplement } from "./features/idealcomplement";
import { EnvironmentArchitecture } from "./features/EnvironmentArchitecture";
import { Overview } from "./features/overview";
import { About } from "./features/about";
import { ApplicationSection } from "./features/application";
import { CollaborationSection } from "./features/colloboration";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen px-1 py-0 ">
        <Header />
        <Home />
        <Main />
        <Benefits />
        <IdealComplement />
        <EnvironmentArchitecture />
        <Overview />
        <About />
        <ApplicationSection />
        <CollaborationSection />
      </div>
    </>
  );
}

export default App;

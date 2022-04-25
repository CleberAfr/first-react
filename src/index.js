import React from "react";   //import React from "react";  <<<=== Importar sempre 
import ReactDOM  from "react-dom"; //import ReactDOM  from "react-dom";  <<<=== Importar sempre 
import './style.css';
import Header from'./Header.js';
import Footer from "./Footer";
import MainContent from "./MainContent"

function Page() {     //existencia de funçoes facilita ter codigos modulares | camelCase: temporaryName / pascalCase: TemporaryName = <TemporaryName/>
  return (
          <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
  )
    
}





ReactDOM.render(<Page/>, document.getElementById("root"))
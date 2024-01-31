
import './App.css';
import AboutComp from './AboutComp';
import LeftWrap from './LeftWrap';

import ComSkills from './ComSkills';
import CompProg from './CompProg';

import CompFooter from './CompFooter';


function App() {
  return (
    <div className="container-fluid App">
      <header className="App-header row justify-content-left align-content-center">
        <LeftWrap />
      </header>
      <div className="row about pt-5 ">
        <AboutComp />
      </div>
      <div className="row skills pt-5 text-center text-dark">
        <ComSkills />
      </div>

      <div className="row projects pt-5  text-dark">

        <CompProg />
      </div>

      <div className="container-fluid fot p-5 text-light">
        <CompFooter />
      </div>


    </div>
  );
}

export default App;

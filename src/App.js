import './App.css';
import MyChart from './MyChart';
import TutoChart from './components/TutoChart';

function App() {
  return (
    <div className="App">
      <TutoChart/>
      <MyChart scale="4H"/>
    </div>
  );
}

export default App;

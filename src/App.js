import './App.css';
import MyChart from './components/MyChart';
import TutoChart from './components/TutoChart';

function App() {
  return (
    <div className="App">
      <TutoChart/>
      <MyChart scale="a"/>
    </div>
  );
}

export default App;

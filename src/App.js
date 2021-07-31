import './App.css';
import MyChart from './components/MyChart';
import TutoChart from './components/TutoChart';

function App() {
  return (
    <div className="App">
      <TutoChart/>
      <MyChart scale="1D"/>
    </div>
  );
}

export default App;

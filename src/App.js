import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Trending from './components/Trending';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Trending />
    </div>
  );
}

export default App;

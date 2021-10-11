import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { useStateValue } from './Components/StateProvider';
import Widget from './Components/Widget';
//admin  admin
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? 
    (<Login />) : (
      <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      </>
    )}
      

    </div>
  );
}

export default App;

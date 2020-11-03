import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed'
import './App';
import Widgets from './Widgets/Widgets';
import Login from './Login/Login'
import { useStateValue } from './stateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      { !user ? (
        <Login/>
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              {/* <Widgets/> */}
            </div>
          </>
        )}
    </div>
  );
}

export default App;

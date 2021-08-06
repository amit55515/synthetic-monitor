import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LogPage from '../src/components/LogPage/LogPage';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/logs' component={LogPage} />
        </Switch>
    </div>
  );
}

export default App;

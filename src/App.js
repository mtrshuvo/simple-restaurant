import './App.css';
import MainComponents from '../src/components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import myStore from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>           
    </div>
  );
}

export default App;

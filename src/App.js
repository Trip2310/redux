
import './App.css';
import Cart from './Components/Cart'
import store from './store'
import { Provider } from 'react-redux';
import Props from './Action/Props'

function App() {
  return (
  //   <>
  //  <Provider store={store}>
  //    <Cart/>
  //    </Provider>  


  //   </>

  <>
  <Props value="name">
  <h2>name</h2>
  <h3>job</h3>
  </Props>
  </>
  );
}

export default App;

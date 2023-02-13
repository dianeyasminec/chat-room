import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Chats from './components/Chats';
import Ui from './components/Ui'

function App() {
  return (
    <div className="App">
      <h1 className='lead text-center m-5'>Live Chat Room </h1>
      <Home/>
      <Chats/>
      <Ui/>
    </div>
  );
}

export default App;

import Body from './components/layouts/Body';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { useAppState } from './context/AppContext';
import useHandleSubmit from './utils/handleSubmit';
import './App.css'
import './theme/global.css'

function App() {
  const state = useAppState();
  const handleSubmit = useHandleSubmit();
  return (
    <div className="App">
      <Header/>
      
      <Body/>

      <Footer/>
    </div>
  );
}

export default App;

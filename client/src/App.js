import './App.scss';

import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Jump from './components/Jump/Jump';

function App() {
  return (
    <div className="App">
      <About></About>
      <Jump></Jump>
      <TimeLine></TimeLine>
      <Gallery></Gallery>
      <Faq></Faq>
      <div className='space'></div>
    </div>
  );
}

export default App;

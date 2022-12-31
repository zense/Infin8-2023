import './App.scss';

import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <TimeLine></TimeLine>
      <Gallery></Gallery>
      <Faq></Faq>
      <div className='space'></div>
    </div>
  );
}

export default App;

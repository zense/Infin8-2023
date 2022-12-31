import './App.scss';

import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';

function App() {
  return (
    <div className="App">
      <TimeLine></TimeLine>
      <Faq></Faq>
      <div className='space'></div>
    </div>
  );
}

export default App;

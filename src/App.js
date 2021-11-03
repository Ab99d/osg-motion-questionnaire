import MotionQuestionnaireEn from './pages-motion/MotionQuestionnaireEn'
import MotionQuestionnaireAr from './pages-motion/MotionQuestionnaireAr'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MotionQuestionnaireEn} />
          <Route path="/ar" component={MotionQuestionnaireAr} />
        </div>
      </Router>
    );
  }

  export default App;

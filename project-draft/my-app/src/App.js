// import Calendar from './Calendar';
import Reading from './Reading';
import MoodCheck from './MoodCheck';
import Nav from './Nav';
import Predictions from './Predictions';
import Container from './Container';

const App = () => {
    return (
      <div className="app">
        <Nav />

        {/* <Cover/> */}
        <Predictions />
        <Container />
        {/* <Calendar/> */}
        {/* <Reading/> */}
        <MoodCheck />

      </div>
    );
  };

  export default App;
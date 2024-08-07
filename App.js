import './index.css';
import MyContent from './MyContent';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';


function App() {
  return (
    <div className="App">
      <MyHeader/>
      <div className='content'>
        <MyContent/>
        <div className='add-content'>
          <MyFooter/>
        </div>
      </div>
    </div>
  );
}

export default App;


import './App.css';
//import {Component} from 'react'
//import FirstComponent from './components/learning-example/FirstComponent'
//import LearningJavaScript from './components/LearningJavascript';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
        <Counter/>
        <PlayingWithProperties Property1="value1" Property2="value2"></PlayingWithProperties>
    </div>
    
  );
}

function PlayingWithProperties(Properties){
  console.log(Properties);
  return(
<></>
  )
}

/* class ThirdComponent extends Component
{
render(){
return(
<div className="ThirdComponent"> Third Component</div>
)
}
} */

export default App;

import './Counter.css'
import {useState} from 'react'



export default function Counter(){

const [count, setCount] = useState(0);

function ButtonIncrementPressed(){

    setCount(count+1);
    console.log(count);
}


    return(
        
       <div className="Counter">
            <span className="Count">{count}</span>
            <div>
                <button className="counterButton"
                        onClick={ButtonIncrementPressed}
                        >+1 </button>      
            </div>
        </div>
    )
}
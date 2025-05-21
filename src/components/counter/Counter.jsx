import './Counter.css'

import {useState} from 'react'


export default function Counter() {
const [count, setCount] = useState(0);

    function updateTotalCount({by}){
        setCount(count+by);
    }
    
    return(
        <>
        <span className="TotalCount">{count}</span>
            <CounterButton by={1} updateTotalCountFun={updateTotalCount}/>
            
        </>

    )
}

function CounterButton({by, updateTotalCountFun}){

const [count, setCount] = useState(0);

function ButtonIncrementPressed(){

    setCount(count+by);
    console.log(count+by);
    updateTotalCountFun(by);
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
// Counter.propTypes = {
//     by:propTypes.number
// }

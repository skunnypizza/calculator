import React, {useState} from 'react'



function CalculatorUI(){
    const [inputNum, setInputNum] = useState(' ');
    const [result, setResult] = useState (0);

    function Add(){
        if(inputNum.length===0){
            return;
        }
        if(result===0){
            setResult(parseInt(inputNum));
            setInputNum('');
        } else {
            setResult(parseInt(inputNum)+result);
            setInputNum('');
        }
    }

    function Minus(){
        if(inputNum.length===0){
            return;
        }
        if(result===0){
            setResult(parseInt(inputNum));
            setInputNum('');
        } else {
            setResult(result-parseInt(inputNum));
            setInputNum('');
        }
    }

    function Multiply(){
        if(inputNum.length===0){
            return;
        }
        if(result===0){
            setResult(parseInt(inputNum));
            setInputNum('');
        } else {
            setResult(result*parseInt(inputNum));
            setInputNum('');
        }
    }

    function Divide(){
        if(inputNum.length===0){
            return;
        }
        if(result===0){
            setResult(parseInt(inputNum));
            setInputNum('');
        } else {
            if(parseInt(inputNum)!==0){
                setResult(result/parseInt(inputNum));
            } else {
                setResult(0);
            }
            setInputNum('');
        }
    }

    function NumClick(props){
        setInputNum(inputNum+props);
    }

    function ClearAll(){
        setInputNum(''); 
        setResult(0);
    }

    function GetResult(){

    }



    return (
    <div >
        <h1>Input:{inputNum}</h1>
        <h1>Result:{result}</h1>
    <table class="center">
      <tr>
        <td><button class="button" id='btn1'   onClick={()=>NumClick(1)}>1</button></td>
        <td><button class="button" id='btn2'   onClick={()=>NumClick(2)}>2</button></td>
        <td><button class="button" id='btn3'   onClick={()=>NumClick(3)}>3</button></td>
        <td><button class="button" id='btnClr' onClick={ClearAll}>CL</button></td>
        <td><button class="button" id='btnClr' onClick={GetResult}>=</button></td>

      </tr>
      <tr>
        <td><button class="button" id='btn4'   onClick={()=>NumClick(4)}>4</button></td>
        <td><button class="button" id='btn5'   onClick={()=>NumClick(5)}>5</button></td>
        <td><button class="button" id='btn6'   onClick={()=>NumClick(6)}>6</button></td>
        <td><button class="button" id='btnPls' onClick={Add}>+</button></td>
        <td><button class="button" id='btnPls' onClick={Multiply}>X</button></td>

      </tr>
      <tr>
        <td><button class="button" id='btn7'   onClick={()=>NumClick(7)}>7</button></td>
        <td><button class="button" id='btn8'   onClick={()=>NumClick(8)}>8</button></td>
        <td><button class="button" id='btn9'   onClick={()=>NumClick(9)}>9</button></td>
        <td><button class="button" id='btnSub' onClick={Minus}>-</button></td>
        <td><button class="button" id='btnPls' onClick={Divide}>/</button></td>

      </tr>
      <tr>
          <td></td>
          <td><button class="button" id='btn0'   onClick={()=>NumClick(0)}>0</button></td>
          <td></td>

      </tr>
    </table>
    </div>
    )
}

export default CalculatorUI;
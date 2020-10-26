import React, {useState} from 'react'
import Parser from 'math-expression-evaluator'

function CalculatorUI(){
    const [inputNum, setInputNum] = useState(' ');
    const [result, setResult] = useState (0);

    function Add(){
        if(inputNum.length===0){
            return;
        } else {
            InsertOperator('+');
        }
    }

    function Minus(){
        if(inputNum.length===0){
            return;
        } else {
            InsertOperator('-');
        }
    }

    function Multiply(){     
        if(inputNum.length===0){
            return;
        } else {
            InsertOperator('*');
        }    
    }

    function Divide(){
        if(inputNum.length===0){
            return;
        } else {
            InsertOperator('/');
        }    
    }

    function InsertOperator(operator){

        let strLength=inputNum.length;
            if(!isNaN(inputNum[strLength-1])){
                setInputNum(inputNum+operator);
            } else {
                var tempStr = inputNum.substr(0, strLength-1)+operator;
                setInputNum(tempStr);
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
        setResult(Parser.eval(inputNum));
    }



    return (
    <div >
       
    <table class="table">
        <thead>
            <tr>
                <th colspan ='5'>Input: {inputNum}</th>
            </tr>
            <tr>
                <th colspan ='5'>Result: {result}</th>
            </tr>

        </thead>
    <tbody>

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
          <td><button class="button" id='btn00' onClick={()=>NumClick('00')}>00</button></td>
          <td><button class="button" id='btn0' onClick={()=>NumClick(0)}>0</button></td>
          <td><button class="button" id='btn0' onClick={()=>NumClick('.')}>.</button></td>

      </tr>
      </tbody>

    </table>
    </div>
    )
}

export default CalculatorUI;
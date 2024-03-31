//class
// import React from "react";
// export class Calculator extends React.Component{
//     n1 =15
//     n2 = 5

//     calculator = (op) => {
//         let c =  `${this.n1} ${op} ${this.n2}`
//         let r = eval(c)
//         alert(`${c}=${r}`)
//     }
//     render(){
//         return(
//             <div style={{textAlign:'center',marginTop:20}}>
//                 <span>{this.n1}</span>&nbsp;
//                 <button onClick={()=>this.calculator('+')}>+</button>&nbsp;
//                 <button onClick={()=>this.calculator('-')}>-</button>&nbsp;
//                 <button onClick={this.calculator.bind(this,'*')}>*</button>&nbsp;
//                 <button onClick={this.calculator.bind(this,'/')}>/</button>&nbsp;
//                 <span>{this.n2}</span>
//             </div>
//         )
//     }
// }

//function
import React from "react";

export default function Calculator() {
  const n1 = 20
  const n2 = 4

  const calculator2 = (op) => {
    let c = `${n1} ${op} ${n2}`;
    let r = eval(c);
    alert(`${c} = ${r}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <span>{n1}</span>&nbsp;
      <button onClick={() => calculator2('+')}>+</button>&nbsp;
      <button onClick={() => calculator2('-')}>-</button>&nbsp;
      <button onClick={() => calculator2('*')}>*</button>&nbsp;
      <button onClick={() => calculator2('/')}>/</button>&nbsp;
      <span>{n2}</span>
    </div>
  );
}




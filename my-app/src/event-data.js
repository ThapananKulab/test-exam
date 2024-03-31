import React from 'react';

export function Table() {

    const data = [
      ['Php', 100],
      ['Angular', 200],
      ['NodeJs', 150],
      ['NextJs', 300],
      ['.Net', 120]
    ]
    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = '#FAEDCB';
    }
    const onMouseOutRow = (ev) =>{
        ev.target.parentNode.style.backgroundColor = 'white';
    }
    return (
        <table border="1" cellPadding={5} style={{ margin: 'auto', marginTop: 30}}>
          <tr style={{backgroundColor:'#C9E4DE'}}><th>Product</th><th>Price</th></tr>
          {
            data.map(item => {
              return (
                <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
                  <td>{item[0]}</td><td>{item[1]}</td>
                </tr>
              );
            })
          }
        </table>
        
      );
    }

    
export function EventData2(){
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop': 'Start'
        ev.target.innerText = s
    }

    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
        return (
            <div style={{textAlign:'center',marginTop:20}}>
                <button onClick={(ev) => onClickStartStop(ev)}>Start</button>
                <br/><br/>
                <button onClick={(ev) => onClickAdd(ev)}>10 + 20</button>
                <br/><br/>
                <button onClick={(ev) => onClickAdd(ev)}>30 * 40</button>
                <br/><br/>
            </div>
        )
}

export class EventData1 extends React.Component{
    onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop': 'Start'
        ev.target.innerText = s
    }

    onclickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
    render(){
        return (
            <div style={{textAlign:'center',marginTop:20}}>
                <button onClick={(ev) => this.onClickStartStop(ev)}>Start</button>
                <br/><br/>
                <button onClick={(ev) => this.onClickAdd(ev)}>10 + 20</button>
                <br/><br/>
                <button onClick={this.onClickAdd.bind(this)}>30 * 40</button>
                <br/><br/>
            </div>
        )
    }
}
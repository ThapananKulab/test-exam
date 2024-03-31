import React, {Component} from 'react'
export default class Button extends Component{

    constructor(){
        super()
        this.onClickButtonOK = this.onClickButtonOK.bind(this)
    }
    onClickButtonOK(){
        this.showAlert('Hello World')
    }
    render(){
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}




// import React, {Component} from 'react'
// export default class Button extends Component{

//     constructor(){
//         super()
//         this.onClickButtonOK = this.onClickButtonOK.bind(this)
//     }
//     showAlert(msg){
//         alert(msg)
//     }
//     onClickButtonOK(){
//         this.showAlert('Hello World')
//     }
//     render(){
//         return <button onClick={this.onClickButtonOK}>OK</button>
//     }
// }
import React from 'react'

export default function RefsArray(){

    const table = React.useRef()
    const tr = React.useRef([])
    
    const data=[
        ['Php', 100],
        ['Angular', 200],
        ['NodeJs', 150],
        ['NextJs', 300],
        ['.Net', 120]
    ];

    const onClickButton = (i) => {
        const index = tr.current[i].rowIndex;
        table.current.deleteRow(index);
      };
    
      const onMouseOverRow = (i) => {
        tr.current[i].style.backgroundColor = 'rgba(255, 209, 220, 0.6)';
      };
      
    
      const onMouseOutRow = (i) => {
        tr.current[i].style.backgroundColor = 'white';
      };

    const TableStyles = {margin:'auto',marginTop:30}

    return (
        <table ref={table} border="1" cellPadding={5} style={TableStyles}>
            <tr style= {{ backgroundColor: "#ffd1dc"}}>
                <th>Product</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>{
                data.map((item,i)=>{
                    return(
                        <tr ref={(el) =>  (tr.current[i]=el)}
                        onMouseOver={()=>onMouseOverRow(i)}
                        onMouseOut={()=>onMouseOutRow(i)}
                        >
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>
                            <button onClick={()=>onClickButton(i)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>

    )
}
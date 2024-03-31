import React from 'react'

export default function MsgBox2(props) {
  const divStyle = {
    margin: '10px',
    padding: '5px',
    color: props.color,
    backgroundColor: '#ccc',
    fontSize: props.fontSize,
    border: 'solid 1px black',
  };

  return <div style={divStyle}>{props.text}</div>;
}

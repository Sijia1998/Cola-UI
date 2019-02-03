import React, { Component } from 'react';
// import './style.css'

const style = {
  position: 'fixed',
  width: '400px',
  height: '200px',
  zIndex: 99999,
  background: 'red',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  margin: 'auto'
}

class Alter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { position, title } = this.props
    console.log(position, title)
    return <div className={style}>
      {position === 'center' ? <p>Hello,Cola-UI,{title}</p> : <p>请传入参数</p>}
    </div>;
  }
}

export default Alter;

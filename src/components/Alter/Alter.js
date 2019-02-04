import React, { Component } from 'react';
import './style.less'

class Alter extends Component {
  constructor(props) {
    super(props);
  }

  isShow() {
    return <div><p>是否进行下一步操作</p></div>
  }

  render() {
    const { position, title } = this.props
    console.log(position, title)
    return <div className="cola-alter-style">
      {position === 'center' ? this.isShow() : <p>请传入参数</p>}
    </div>;
  }
}

export default Alter;

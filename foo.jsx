import React, {Component} from 'react';

export default class Foo extends Component {
  componentDidMount() {
    console.log('executed componentDidMount');
  }

  render() {
    const {onButtonClick} = this.props;
    return <div>
      <button onClick={onButtonClick}>button</button>
    </div>
  }
}
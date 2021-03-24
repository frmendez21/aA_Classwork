import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {selectedIndex: 0}
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(idx) {
    this.setState({selectedIndex: idx})
  }

  render() {
    const propsArray = this.props.tabsObj.map((obj, idx) => {
      return <Header 
        key={idx} 
        title={obj.title} 
        idx={idx}
        updateIndex={this.updateIndex}
      />
    })
    
    const content = this.props.tabsObj[this.state.selectedIndex].content;

    return (
      <ul className="tabs">
        <span className="tabsTitle"> {propsArray} </span>
        <span className="tabsContent"> {content} </span>
      </ul>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.tabSelected = this.tabSelected.bind(this);
  }

  tabSelected () {
    this.props.updateIndex(this.props.idx);
  } 

  render() {
    return (
      <li onClick={this.tabSelected}>
        {this.props.title}
      </li>
    )
  }
}
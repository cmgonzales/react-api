import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs className = 'nav'>
          
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Link
            </DropdownToggle>
        <DropdownMenu>
              <DropdownItem Github>
              <a href =  'www.github.com/cmgonzales'>Github</a></DropdownItem>
              </DropdownMenu>
          </Dropdown>
          <h1 className ="navs">San Francisco Crime Records</h1>
        </Nav>
      </div>
    );
  }
}
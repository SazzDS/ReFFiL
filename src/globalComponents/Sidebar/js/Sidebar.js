import React from "react";
import ReactDOM from "react-dom";
import "../css/Sidebar.css";
import classNames from "classnames";
import {AiOutlineMenu, AiOutlineSetting} from 'react-icons/ai';
import {
  Link
} from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  componentDidMount = () => {
    document.addEventListener("click", this.handleClickOutside, true);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClickOutside, true);
  };
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showMenu: false
      });
    }
  };

  render() {
    const showMenu = this.state.showMenu;
    const sidebarClass = classNames({
      sidebar: true,
      "sidebar-menu-expanded": showMenu,
      "sidebar-menu-collapsed": !showMenu
    });
    const columnClass = classNames({
      "col-md-2": showMenu,
      "col-md-1": !showMenu
    });
    const columnClass2 = classNames({
      "col-md-1": showMenu,
      "": !showMenu
    });

    const elementsClass = classNames({
      "expanded-element": true,
      "is-hidden": !showMenu
    });

    return (
      <>
        <div className={columnClass}>
          <nav className={sidebarClass}>
            <AiOutlineMenu
              className="menuIcon"
              onClick={this.toggleMenu}
            />
            <ul>
              <li>
                <Link className="expandable" to="/Setting" title="Setting">
                  <AiOutlineSetting />
                  <span className={elementsClass}>Setting</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Sidebar;
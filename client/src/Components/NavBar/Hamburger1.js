import React from "react";
import { PropTypes } from "prop-types";
import "./Hamburger1.css";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";
import Logo from "../logo.png";
class Hamburger1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleLogout = () => {
    this.props.logoutUser();
  };

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  //   handleLinkClick() {
  //     this.setState({ menuOpen: false });

  //   }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 10,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        // background: "black",
        width: "100%",
        color: "white",
        fontFamily: "Lobster",
        right: 40,
      },
      logo: {
        margin: "0 auto",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    };
    const menu = [
      { val: "", link: "" },
      { val: "Home", link: "/home" },
      { val: "Grade", link: "/grade" },
      { val: "Attendance", link: "/attendance" },
      { val: "IN/OUT", link: "/summary" },
      { val: "Grievance", link: "/complaint" },
    ];
    const menuItems = menu.map((item, index) => {
      return (
        <MenuItem key={index} delay={`${index * 0.1}s`} onClick={() => {}}>
          <Link to={item.link}>
            <span className="middle1">{item.val} </span>
          </Link>
        </MenuItem>
      );
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <div style={styles.logo}>
            <a className="logo" href="">
              {" "}
              <img
                src={Logo}
                alt="Mahindra University"
                class="navbar-brand"
                width="240"
              />
            </a>
          </div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
          <MenuItem key={5} delay={`${5 * 0.1}s`} onClick={() => {}}>
            <a
              className="middle1"
              style={({ float: "right" }, { fontSize: "25" })}
              href="/login"
              onClick={this.handleLogout}
            >
              Sign Out
            </a>
          </MenuItem>
        </Menu>
        <div style={styles.body}></div>
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "black",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        // background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
      },
      line: {
        height: "2px",
        width: "20px",
        background: "black",
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

/* Main.jsx */
class Main1 extends React.Component {
  render() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      },
    };

    return (
      <div style={styles.main}>
        <Hamburger1 />
      </div>
    );
  }
}

export default Main1;

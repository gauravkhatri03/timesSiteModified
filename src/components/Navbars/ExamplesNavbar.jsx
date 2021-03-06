import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by DTU TIMES dev team"
              tag={Link}
            >
              <span>DTU </span>
              TIMES
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    DTU TIMES
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  HOME
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  ABOUT US
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  EDITIONS
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  BLOG
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  SOCIETIES
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  GALLERY
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  TEAM
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  CONTACT US
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;

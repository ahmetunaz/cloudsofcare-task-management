import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

// users
import defaultAvatar from "../../../assets/images/users/empty-avatar.png";

import { connect } from "react-redux";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }));
  }

  userAvatar = user => {
    if (user.avatar)
      return `https://cdn.discordapp.com/avatars/${user.userId}/${user.avatar}.webp?size=160`;
    return defaultAvatar;
  };

  render() {
    const { auth } = this.props;

    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item"
            id="page-header-user-dropdown"
            tag="button"
          >
            {auth?.user && (
              <>
                <img
                  className="rounded-circle header-profile-user"
                  src={this.userAvatar(auth.user)}
                  alt=""
                />{" "}
                <span className="d-none d-xl-inline-block ms-1">
                  {auth.user.name}
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </>
            )}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>{this.props.t("Logout")}</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

ProfileMenu.propTypes = {
  t: PropTypes.any,
  auth: PropTypes.object,
};

const mapStateToProps = state => {
  const { auth } = state.Auth;
  return { auth };
};

export default withRouter(
  connect(mapStateToProps, {})(withTranslation()(ProfileMenu))
);

import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

//i18n
import { withTranslation } from "react-i18next";

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      {/* <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="ri-notification-3-line" />
          <span className="noti-dot"></span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0">{props.t("Notifications")} </h6>
              </Col>
              <div className="col-auto">
                <Link to="/#" className="small">
                  {" "}
                  View All
                </Link>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-xs">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="ri-shopping-cart-line"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Your order is placed</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">If several languages coalesce the grammar</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <img src={avatar3} className="rounded-circle avatar-xs" alt="user-pic" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">James Lemire</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">It will seem like simplified English.</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-xs">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Your item is shipped</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">If several languages coalesce the grammar</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <img src={avatar4} className="rounded-circle avatar-xs" alt="user-pic" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Salena Layfield</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hour ago</p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link className="btn btn-sm btn-link font-size-14 text-center" to="#">
              <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">{props.t("View More..")}</span>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown> */}
    </React.Fragment>
  );
};

export default withTranslation()(NotificationDropdown);

NotificationDropdown.propTypes = {
  t: PropTypes.any
};
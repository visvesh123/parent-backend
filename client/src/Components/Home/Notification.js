import React, { Component } from "react";
import { List, Typography, Divider, message, Avatar, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import "./Notification.css";
import { connect } from "react-redux";
import { fetchNotifications } from "./../../actions/index";
import { logoutUser } from "../../actions/authAction";
import Item from "antd/lib/list/Item";
import { ListGroup, ListGroupItem } from "reactstrap";
import Timetable from "./Modals/TimeTable";
import moment from "moment";

const { Title, Text } = Typography;

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleClick() {
    this.props.logoutUser();
  }

  render() {
    const [items] = this.props.notification;
    if (!items) return null;

    return (
      <div style={{ marginBottom: 30 + "px" }}>
        <div className="signout" id="notification">
          {/* <button >Signout</button> */}
          <Timetable
            url="https://docs.google.com/document/d/e/2PACX-1vTtBdTSiwWA9DrVXVCojhx1W-UeGngSc2WP4MufsVHXbVxGwA3caZpi8eQxmErThw/pub?embedded=true"
            buttonLabel="Time table for FALL-2020"
            className="modal-color"
          />

          <Timetable
            url=""
            buttonLabel="Exam Schedule Spring-2020"
            className="modal-color"
          />

          {/* <a className="signout-btn" href="#"> 
            TimeTable
          </a> */}
          <a
            className="signout-btn sign"
            href="/login"
            onClick={this.handleClick}
          >
            Signout
          </a>
        </div>
        <div>
          <h2 className="head_ph">Announcements</h2>
        </div>

        <div className="demo-infinite-container">
          <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}>
            <List
              dataSource={items}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<Title level={3}>{item.SUBJECT}</Title>}
                    description={<Text>{item.DESCRIPTION}</Text>}
                  />
                  <div>{moment(item.CREATED).format("L")}</div>
                </List.Item>
              )}
            ></List>
          </InfiniteScroll>
        </div>
        {/* <ListGroup> 
          <ListGroupItem tag="a" href="#" action>
            <div>
              {items.map((e, index) => (
                <div className="each">
                  <h3 className="title">{e.SUBJECT}</h3>
                  <p className="content">{e.DESCRIPTION}</p>
                </div>
              ))}
            </div>
          </ListGroupItem>
        </ListGroup> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.notifications);
  return {
    notification: state.notifications,
    auth: state.auth,
  };
};

Notifications.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  fetchNotifications: fetchNotifications,
  logoutUser: logoutUser,
})(Notifications);

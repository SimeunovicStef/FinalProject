import React from "react";
import { userRequests } from '../../services/userServices'
import { Row } from '../../components/Row/Row'
import DashboardEnclose from './DashboardEnclose'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  getInfo() {
    userRequests.posts(posts => this.setState({ posts }));
    userRequests.users(users => this.setState({ users }));
    userRequests.comments(comments => this.setState({ comments, loading: false }));
  }
  componentDidMount() {
    this.getInfo();
  }

  render() {


    return (
      <Row>
        <DashboardEnclose icon="font" number={this.state.posts} text="Total posts" />
        <DashboardEnclose icon="user-friends" number={this.state.users} text="Total users" />
        <DashboardEnclose icon="comment" number={this.state.comments} text="Total comments" />
      </Row>
    );
  }
}

export default Dashboard;



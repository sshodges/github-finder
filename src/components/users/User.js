import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    // Gets login variable from URL
    this.props.getUser(this.props.match.params.username);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;

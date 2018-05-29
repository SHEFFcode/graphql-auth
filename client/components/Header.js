import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/LogOut';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div></div>;
    };

    if (user) {
      return (
        <li><a onClick={this.onLogoutClick.bind(this)}>LogOut</a></li>
      );
    } else {
      return (
        <div>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">LogIn</Link></li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left" to="/">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
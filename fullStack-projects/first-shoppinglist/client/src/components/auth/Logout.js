import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

class Logout extends React.Component{
  static propTypes = { logout: PropTypes.func.isRequired }

  render(){
    return(
      <>
        <NavLink
          href='#'
          onClick={this.props.logout}
        >
          Logout
        </NavLink>
      </>
    )
  }
}

export default connect(null, { logout })(Logout)
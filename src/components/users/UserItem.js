import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const UserItem = ( {user: {login, avatar_url, html_url}}) => {
  //const {login, avatar_url, html_url} = props.user; //This is the other way of assigning value from props
  return (
    <div className="card text-center">
    <img src={avatar_url} alt="Kuch Nhi" className="round-image" style={{width: '60px'}} />
    <h3>{login}</h3>
    <div>
    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
    More
    </Link>
    </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem

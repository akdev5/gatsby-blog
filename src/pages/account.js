import React from 'react'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../utils/auth'
import { Link } from 'gatsby'

import TemplateWrapper from '../layouts'

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : 'friend'}!</p>
}

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return (<TemplateWrapper>
      <p>Redirecting to login...</p>
    </TemplateWrapper>)
  }

  const user = getProfile()

  return (
    <TemplateWrapper>
      <nav>
        <Link to='/'>Home</Link>{'  '}
        <a
          href='#logout'
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path='/account' user={user} />
      </Router>
    </TemplateWrapper>
  )
}

export default Account

import React from 'react'
import { Link } from 'react-router-dom'

const LinkToForgetPass = ({ text, linkRoute }) => {
  return (
    <div>
      <Link to={linkRoute}>{text}</Link>
    </div>
  )
}

export default LinkToForgetPass
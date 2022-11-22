import React from 'react'
import PropTypes from 'prop-types'
import '../../../theme.css'
import './Card.css'

function Card({ children, highlight }) {
  const cardClassName = highlight ? 'card sale' : 'card'

  return <div className={cardClassName}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node,
  highlight: PropTypes.bool
}

export default Card

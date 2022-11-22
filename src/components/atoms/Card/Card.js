import React from 'react'
import PropTypes from 'prop-types'
import { CardDiv } from './styles'

function Card({ children, highlight }) {
  const cardClassName = highlight ? 'card sale' : 'card'

  return <CardDiv className={cardClassName}>{children}</CardDiv>
}

CardDiv.defaultProps = {
  headingColor: '#00F',
  textColor: 'red'
}

Card.propTypes = {
  children: PropTypes.node,
  highlight: PropTypes.bool
}

export default Card

import styled from 'styled-components'

const CardDiv = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ede;
  padding: 12px;
  h3 {
    color: ${props => props.headingColor};
  }
  p {
    color: ${props => props.textColor};
  }
`

export { CardDiv }

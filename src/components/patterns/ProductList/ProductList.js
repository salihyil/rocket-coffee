import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../../atoms/Loading'
import Error from '../../atoms/Error'
import ProductListItem from '../ProductListItem/ProductListItem'

const statusTypes = {
  loading: 'loading',
  errored: 'errored',
  loaded: 'loaded'
}

const ProductList = ({ status, ...otherProps }) => {
  const { data } = { ...otherProps }

  if (status === statusTypes.loading) {
    return <Loading />
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />
  }

  return (
    <div>
      {data.map(i => {
        return (
          <ProductListItem
            key={i.id}
            name={i.name}
            price={i.price}
            imageUrl={i.imageUrl}
            onAddToCart={e => console.log(e)}
          />
        )
      })}
    </div>
  )
}

ProductList.propTypes = {
  status: PropTypes.string
}

export default ProductList

import React, { Component } from 'react'
import CollectionPreview from '../../../components/collection-preview/collection-preview.component'

import { collections } from './shop.data'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage

import React from 'react';

<<<<<<< HEAD
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
=======
import SHOP_DATA from './shop.data';

import CollestionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherColletionProps }) => (
                        <CollestionPreview key={id} {...otherColletionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
>>>>>>> ac139425e9451ecd268720857dc21aaf1df0b886

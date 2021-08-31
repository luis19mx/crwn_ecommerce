import { connect } from 'react-redux';
import { Component } from 'react';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

class ShopPage extends Component {
  render() {
    const { collections } = this.props;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);

// const ShopPage = ({ collections }) => (
//   <div className="shop-page">
//     {collections.map(({ id, ...props }) => (
//       <CollectionPreview key={id} {...props} />
//     ))}
//   </div>
// );

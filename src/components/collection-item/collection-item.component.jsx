import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemCont, ImageCont, CollectionFooterCont, CustomButtonCont } from "./collection-item.styles";

const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
  <CollectionItemCont>
    <ImageCont 
    className='image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    />
    <CollectionFooterCont>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </CollectionFooterCont>
    <CustomButtonCont className='custom-button' onClick={() => addItem(item)} inverted>
      Add to cart
    </CustomButtonCont>
  </CollectionItemCont>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(collectionItem);
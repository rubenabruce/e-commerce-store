import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionPageCont, TitleCont, ItemsCont, CollectionItemCont } from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection; 
  return (
    <CollectionPageCont>
      <TitleCont>{title}</TitleCont>
      <ItemsCont>
        {
          items.map(item => (<CollectionItemCont key={item.id} item={item}/>))
        }
      </ItemsCont>
    </CollectionPageCont>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { CollectionOverviewCont } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewCont>
    {
      collections.map(({id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
  </CollectionOverviewCont>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
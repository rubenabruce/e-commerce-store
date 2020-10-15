import React from 'react';

import { CollectionPreviewCont, TitleCont, PreviewCont } from "./collection-preview.styles";

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewCont>
    <TitleCont>{title}</TitleCont>
    <PreviewCont>
      {items
        .filter((item, indx) => indx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </PreviewCont>
  </CollectionPreviewCont>
)

export default CollectionPreview;
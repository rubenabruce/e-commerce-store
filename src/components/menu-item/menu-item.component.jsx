import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemCont, BackgroundImageCont, ContentCont, TitleCont, SubtitleCont } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
  <MenuItemCont size={size} onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
    <BackgroundImageCont className='background-image' imageUrl={imageUrl}/>
    <ContentCont className='content'>
      <TitleCont>{title.toUpperCase()}</TitleCont>
      <SubtitleCont>SHOP NOW</SubtitleCont>
    </ContentCont>
  </MenuItemCont>
)

export default withRouter(MenuItem);
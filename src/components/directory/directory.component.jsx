import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { DirectoryMenuCont } from "./directory.styles";

import MenuItem from '../menu-item/menu-item.component'; 

const Directory = ({sections}) => (
  <DirectoryMenuCont>
    {  
      sections.map(({ id, ...otherSetionProps}) => (
        <MenuItem key={id} {...otherSetionProps}/>
      ))
    }
  </DirectoryMenuCont>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
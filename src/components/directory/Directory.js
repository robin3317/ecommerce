import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/MenuItem';
import { DirectoryContainer } from './Directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} otherProps={otherProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);

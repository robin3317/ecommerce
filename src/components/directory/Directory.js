import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/MenuItem';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} otherProps={otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);

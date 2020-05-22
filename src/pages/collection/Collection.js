import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

/* simplify version of above mapStateToProps */
/*
const makeMapStateToProps = (state, ownProps) => {
  const getCollection = selectCollection(ownProps.match.params.collectionId);

  const mapStateToProps = (state, ownProps) => {
    return {
      collection: getCollection(state, ownProps),
    };
  };

  return mapStateToProps;
};
*/

export default connect(mapStateToProps)(CollectionPage);

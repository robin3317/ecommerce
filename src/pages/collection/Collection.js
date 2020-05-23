import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
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

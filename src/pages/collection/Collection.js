import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './Collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
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

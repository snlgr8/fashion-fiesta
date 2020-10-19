import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import CollectionsPage from '../collections/collections.component';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionsPage);
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  componentWillMount() {}
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

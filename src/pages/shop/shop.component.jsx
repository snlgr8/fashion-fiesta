import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../components/firebase/firebase.util';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsPage from '../collections/collections.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionsPage);
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillMount() {}
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispacth) => ({
  updateCollections: (collectionMap) =>
    dispacth(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);

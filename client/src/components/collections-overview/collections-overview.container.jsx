import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import { compose } from 'redux';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapToStateProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionOverviewContainer = compose(
  connect(mapToStateProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;

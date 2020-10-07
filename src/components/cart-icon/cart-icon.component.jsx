import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
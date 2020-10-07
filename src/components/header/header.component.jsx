import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assests/FFlogo.svg';
import { auth } from '../firebase/firebase.util';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
        </div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ?null :
      <CartDropDown/>

    }
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser, 
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

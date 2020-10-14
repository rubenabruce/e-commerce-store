import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { ReactComponent as Logo} from '../../assets/crown.svg';

import { OptionContainerDiv, LogoContainer, HeaderContainer, OptionContainerLink, OptionsContainer } from "./header.styles";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionContainerLink to='/shop'>
        Shop
      </OptionContainerLink>
      <OptionContainerLink to='/shop'>
        Contact
      </OptionContainerLink>
      {
        currentUser ? (
          <OptionContainerDiv onClick={() => auth.signOut()}>Sign Out</OptionContainerDiv>
        ) : (
          <OptionContainerLink to='/signin'>
            Sign In
          </OptionContainerLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown/>
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
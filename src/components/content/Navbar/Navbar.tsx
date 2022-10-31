import { NavLink } from 'react-router-dom'
import icon from '../../../assets/svg/shopping-cart.svg'

import {
  StyledNavbar,
  StyledUnorderedList,
  StyledListItem,
  StyledShoppingCart,
  StyledIcon,
  StyledBadge,
} from './Navbar.styled'

export const Navbar = (): JSX.Element => {
  return (
    <StyledNavbar>
      <StyledUnorderedList>
        <StyledListItem>
          <NavLink to="/">Home</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/store">Store</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/about">About</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/contact">Contact</NavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledShoppingCart>
            <StyledIcon>
              <img src={icon} alt="Shopping Cart" width="20" height="20" />
            </StyledIcon>
            <StyledBadge>0</StyledBadge>
          </StyledShoppingCart>
        </StyledListItem>
      </StyledUnorderedList>
    </StyledNavbar>
  )
}

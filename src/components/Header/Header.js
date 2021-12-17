import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <TopDecorator />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconNav>
          <IconButton><Icon id="shopping-bag" /></IconButton>
          <IconButton><Icon id="search" /></IconButton>
          <IconButton onClick={() => setShowMobileMenu(true)}><Icon id="menu" /></IconButton>
        </IconNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const TopDecorator = styled.div`
  display: none;

  @media ${QUERIES.phone} {
    display: block;
    background-color: ${COLORS.gray[900]};
    height: 4px;
    width: 100%;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phone} {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  &:nth-of-type(2) {
    @media ${QUERIES.tablet} {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconNav = styled.nav`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    gap: 1.5rem;
    margin-left: 1.5rem;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Media from 'react-media';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { useIntl } from 'react-intl';

const Nav = styled.nav`
  width: 100%;
  min-height: 75px;
  position: relative;
  max-width: 1200px;
  margin: auto;
`;

const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  content: '';
  justify-content: space-between;
  align-items: center;

  margin: auto;
`;

const LogoContainer = styled.div``;

const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    background-color: #f89f6d;
    padding: 0;
    position: absolute;
    width: 100%;
    top: 75px;
    li {
      flex: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: 700;
    }
  }
`;

const NavListItem = styled.li`
  padding: 0 1rem;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
    :hover {
      transform: scale(1.3);
      color: ${(props) => props.theme.primaryColor};
    }
  }
  @media (max-width: 800px) {
    margin: 1rem 0;
  }
`;

const NavToggleButton = styled.div``;

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const intl = useIntl();

  const navItems = [
    {
      name: intl.formatMessage({ id: 'Home' }),
      path: '/',
    },
    { name: intl.formatMessage({ id: 'About Us' }), path: '/about' },
    { name: intl.formatMessage({ id: 'Ambassador' }), path: '/ambassador' },
    { name: intl.formatMessage({ id: 'Contact Us' }), path: '/contact' },
    { name: intl.formatMessage({ id: 'Brand Partner' }), path: '/brand' },
    { name: intl.formatMessage({ id: 'Blog' }), path: '/blog' },
  ];

  const NavList = () => {
    return (
      <StyledNavList>
        {navItems.map((navItem, index) => (
          <NavListItem key={index}>
            <Link
              to={navItem.path}
              activeStyle={{ borderBottom: '2px solid #f89f6d' }}
            >
              {navItem.name}
            </Link>
          </NavListItem>
        ))}
      </StyledNavList>
    );
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <img
            src="https://squareark-website-production.oss-cn-hongkong.aliyuncs.com/logo_sticker-high-reg.png"
            height="50"
          ></img>
        </LogoContainer>
        <Media
          queries={{
            small: '(max-width: 800px)',
          }}
        >
          {(matches) => (
            <>
              {matches.small ? (
                <>
                  <NavToggleButton>
                    <FaBars onClick={() => setMenuOpened(!menuOpened)} />
                  </NavToggleButton>
                  {menuOpened && <NavList />}
                </>
              ) : (
                <>
                  <NavList />
                </>
              )}
            </>
          )}
        </Media>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import theme from './../../globalStyles/theme';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;

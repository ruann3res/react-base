import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { useTheme } from 'styled-components';

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme();
  
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <div 
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24,
        }}
      >
        Olá Mundo! Este é o meu blog.
      </div>
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}

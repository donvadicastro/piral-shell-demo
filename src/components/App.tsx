import * as React from 'react';
import { ExtensionSlot, LayoutProps } from 'piral-core';
import { Menu } from 'piral-menu';

const App: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="main-wrapper">
      <header className="Header">
        <Menu type="general" />
        <ExtensionSlot name="header-items" />
      </header>
      {children}
    </div>
  </>
);

export default App;

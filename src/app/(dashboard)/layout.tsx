import * as React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps): React.JSX.Element {
  return <div>LAYOUT</div>;
}

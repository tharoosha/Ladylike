import React from 'react';
import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import './Layout.scss';
import './tailwind.scss';

export default function Layout() {
  return (
    <>
      <div className="topbar">
        <Area id="top-bar" />
      </div>
      <LoadingBar />

      <div className="header flex justify-between space-y-5">
        <Area
          id="header"
          noOuter
          coreComponents={[
            {
              component: { default: Area },
              props: {
                id: 'icon-wrapper',
                className: 'icon-wrapper flex justify-between space-x-10'
              },
              sortOrder: 20
            }
          ]}
        />
      </div>
      <main className="content">
        <Area id="content" noOuter />
      </main>
      <div className="footer">
        <Area id="footer" noOuter coreComponents={[]} />
      </div>
    </>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 1
};

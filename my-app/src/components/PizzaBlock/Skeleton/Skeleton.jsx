import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
	className='pizza-block'
    speed={2}
    width={320}
    height={500}
    viewBox="0 0 320 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="185" cy="128" r="117" />
    <rect x="105" y="253" rx="0" ry="0" width="177" height="31" />
    <rect x="63" y="291" rx="0" ry="0" width="265" height="68" />
    <rect x="66" y="376" rx="0" ry="0" width="121" height="36" />
    <rect x="205" y="377" rx="0" ry="0" width="123" height="35" />
  </ContentLoader>
);

export default Skeleton;

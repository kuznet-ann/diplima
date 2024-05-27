import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        speed={0}
        width={289}
        height={430}
        viewBox='0 0 289 430'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}>
        <rect
            x='0'
            y='0'
            rx='0'
            ry='0'
            width='290'
            height='290'
        />
        <rect
            x='0'
            y='318'
            rx='0'
            ry='0'
            width='291'
            height='31'
        />
        <rect
            x='173'
            y='367'
            rx='0'
            ry='0'
            width='110'
            height='44'
        />
        <rect
            x='0'
            y='368'
            rx='0'
            ry='0'
            width='101'
            height='40'
        />
    </ContentLoader>
);

export default Skeleton;

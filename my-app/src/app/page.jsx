import Link from 'next/link';
import React from 'react';

import MenuBlock from './../components/MenuBlock';
import { FooterBlock } from '../components/FooterBlock';

import './sass/style.scss';
import Image from 'next/image';
import { ProductList } from '../components/ProductsList';

function Page(props) {
    return (
        <>
            <div className='container'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquid
                perspiciatis non unde excepturi consequuntur fugit sunt iusto libero delectus, nihil
                temporibus labore minus. Veniam magni quaerat ullam ipsum quo.
            </div>
        </>
    );
}

export default Page;

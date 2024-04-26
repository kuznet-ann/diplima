import { Suspense } from 'react';

import MenuBlock from '../../components/MenuBlock';
import { ProductList } from '../../components/ProductsList';
import { FooterBlock } from '../../components/FooterBlock';

import '../sass/style.scss';

const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const getData = async () => {
    const response = await fetch(`http://localhost:3000/api/v1/products`, {
        next: {
            revalidate: 1,
        },
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

// const onSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const data = Object.fromEntries(formData);

//     await postData(data);
// };
const products = await getData();

async function Page(props) {
    return (
        <>
            <div className='container'>
                {/* <Suspense fallback={<p>Loading feed...</p>}> */}
                <ProductList items={products} />
                {/* </Suspense> */}
            </div>
        </>
    );
}

export default Page;

{
    /* <form onSubmit={onSubmit}>
                    <input
                        name='name'
                        placeholder='name'
                    />
                    <input
                        type='number'
                        name='price'
                        placeholder='name'
                        value={87.99}
                    />
                    <input
                        name='description'
                        placeholder='description'
                        value={'3456789iok'}
                    />
                    <input
                        type='number'
                        name='quantity'
                        placeholder='name'
                        value={43}
                    />
                    <input
                        type='checkbox'
                        name='available'
                        value={1}
                        checked
                    />
                    <input
                        type='number'
                        name='shape_id'
                        value={1}
                    />
                    <input
                        type='number'
                        name='material_id'
                        value={1}
                    />
                    <button type='submit'>submit</button>
                </form> */
}

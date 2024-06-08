'use client';

import React from 'react';
const postDataImage = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/images`, {
        body: data,
        cache: 'no-store',
        headers: {
            // 'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },

        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return new Response(null, {
        status: response.status,
    });
};

const onSubmit = async (event, router) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await postDataImage(formData);
    // if (response.status === 201) {
    //     router.push('/admin');
    // }
};

export default function AddImage({ images, id }) {
    return (
        <>
            <form
                onSubmit={(event) => onSubmit(event)}
                method='post'
                encType='multipart/form-data'>
                <input
                    name='image_file'
                    type='file'
                />
                <input
                    name='product_id'
                    type='text'
                    hidden
                    defaultValue={id}
                />
                <button type='submit'>Добавить картинку</button>
            </form>
            {images.length > 0 ? (
                images.map((img, i) => (
                    <img
                        onClick={() => changeImg(i)}
                        key={img.id}
                        src={`http://127.0.0.1:8000/storage/${img.path}`}
                        alt=''
                    />
                ))
            ) : (
                <p>Картинок нет</p>
            )}
        </>
    );
}

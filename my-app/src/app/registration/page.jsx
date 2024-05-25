'use client';
import RegForm from '../../components/RegForm';

import '../sass/style.scss';

const postData = async (data) => {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/users`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

async function Page(props) {
    return (
        <div className='container'>
            <RegForm x={onSubmit} />
        </div>
    );
}

export default Page;

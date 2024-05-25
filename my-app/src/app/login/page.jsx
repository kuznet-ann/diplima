import Link from 'next/link';
import '../sass/style.scss';

import LoginForm from '../../components/LoginForm';

async function Page(props) {
    return (
        <div className='container'>
            <LoginForm />
        </div>
    );
}

export default Page;

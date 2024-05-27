// import {
//     useRouter
// } from 'next/navigation';

// const router = useRouter();

export async function POST(request) {
    console.log('h1');
    const response = await fetch(`http://localhost:8000/api/v1/login`, {
        body: JSON.stringify(await request.json()),
        headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    if (!response.ok) {
        // Activates the closest `error.js` error boundary.
        throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return Response.json(data);
}
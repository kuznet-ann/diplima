import {
    cookies
} from 'next/headers'
export async function POST(request) {
    const response = await fetch(`http://localhost:8000/api/v1/login`, {
        body: JSON.stringify(
            await request.json()
        ),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        method: 'POST'
    });
    if (!response.ok) {
        // Activates the closest `error.js` error boundary.
        throw new Error(response.statusText);
    }

    console.log(response.headers.get('Content-Type'));

    // const data = await response.json();
    // cookies().set('sid', data.token, {
    //     expires: Date.now() + 3600
    // });
    // response.cookies.set('sid', data.token);
    return response;
    // return Response.json(data);
}
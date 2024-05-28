import {
    cookies
} from 'next/headers'

export async function POST(request) {
    const response = await fetch(`http://localhost:8000/api/v1/products`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        body: JSON.stringify(
            await request.json()
        ),
        method: "POST"
    });
    if (!response.ok) {
        throw new Error(response.status);
    }

    return new Response(null, {
        status: response.status
    });
}

export async function GET(request) {
    console.log(request.headers.get('Cookie'));
    const page = request.url;
    const param = page.slice(page.indexOf('?'));
    // console.log(page.indexOf('?'));
    const response = await fetch(`http://localhost:8000/api/v1/products/${param != 's' ? param : ''}`, {
        cache: 'no-store',
        headers: {
            'Accept': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
            Authorization: `Bearer ${request.headers.get('Cookie')}`
        },
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return Response.json(
        data
    )
}
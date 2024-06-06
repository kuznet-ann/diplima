import {
    cookies
} from 'next/headers'

export async function POST(request) {
    const response = await fetch(`http://localhost:8000/api/v1/users`, {
        cache: "no-store",
        body: JSON.stringify(
            await request.json()
        ),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        method: "POST",
    });
    // console.log(response);


    if (!response.ok) {
        throw new Error();
    }

    return new Response(null, {
        status: response.status
    });
}
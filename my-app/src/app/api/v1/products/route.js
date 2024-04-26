export async function GET(request, {
    params
}) {
    const response = await fetch(`http://localhost:8000/api/v1/products/`, {
        next: {
            revalidate: 1
        },
    });
    if (!response.ok) {
        throw new Error('Что-то не так');
    }
    const data = await response.json();
    return Response.json(
        data
    )
}

export async function POST(request) {
    // console.log(await request.json());
    const response = await fetch(`http://localhost:8000/api/v1/products`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        body: JSON.stringify(await request.json()),
        method: "POST"
    });
    if (!response.ok) {
        throw new Error('Что-то не так');
    }
    return new Response(null, {
        status: response.status
    });
}
export async function GET(request, {
    params
}) {
    const response = await fetch(`http://localhost:8000/api/v1/products/${params.slug}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
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

export async function PUT(request, {
    params
}) {
    const response = await fetch(`http://localhost:8000/api/v1/products/${params.slug}`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        body: JSON.stringify(await request.json()),
        method: "PUT",
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return new Response(null, {
        status: response.status
    });
}

export async function DELETE(request, {
    params
}) {
    const response = await fetch(`http://localhost:8000/api/v1/products/${params.slug}`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        method: "DELETE",
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return new Response(null, {
        status: response.status
    });
}
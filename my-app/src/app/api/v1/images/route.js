export async function POST(request) {
    const response = await fetch(`http://localhost:8000/api/v1/images`, {
        body: await request.formData(),
        cache: 'no-store',
        headers: {
            Accept: 'application/vnd.api+json',
        },
        method: "POST"
    });
    if (!response.ok) {
        throw new Error(response.status);
    }

    return new Response(null, {
        status: response.status
    });
}
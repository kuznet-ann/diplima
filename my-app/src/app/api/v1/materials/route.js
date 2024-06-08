export async function GET(request) {
    const response = await fetch(`http://localhost:8000/api/v1/materials`, {
        cache: 'no-store',
        headers: {
            'Accept': 'application/vnd.api+json',
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
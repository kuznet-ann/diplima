export async function GET(request) {
    const token = request.headers.get('Authorization');
    const response = await fetch(`http://localhost:8000/api/v1/order_product`, {
        cache: 'no-store',
        headers: {
            'Accept': 'application/vnd.api+json',
            'Authorization': `${token}`,
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
export async function GET(request, {
    params
}) {
    const response = await fetch(`http://localhost:8000/api/v1/products/${params.slug}`);
    if (!response.ok) {
        throw new Error('Что-то не так');
    }
    const data = await response.json();
    return Response.json(
        data
    )
}
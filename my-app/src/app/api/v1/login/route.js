export async function POST(request) {
    const response = await fetch(`http://localhost:8000/api/v1/login`, {
        body: JSON.stringify(
            await request.json()
        ),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },
        method: 'POST'
    });
    const daysCount = 7;
    const date = new Date();
    date.setDate(date.getDate() + daysCount);

    const data = await response.json();

    return Response.json(data, {
        headers: {
            'Set-Cookie': `sid=${data.token}; expires=${date.toUTCString()}; Max-Age=${daysCount*24*60*60}; path=/; HttpOnly`,
        },
        status: 200,
    });
}
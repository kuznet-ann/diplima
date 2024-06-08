export async function POST(request) {
    const token = request.headers.get('Authorization');
    const response = await fetch(`http://localhost:8000/api/v1/logout`, {
        cache: 'no-store',
        headers: {
            Accept: 'application/vnd.api+json',
            Authorization: token,

        },
        method: 'POST'
    });

    return new Response(null, {
        headers: {
            'Set-Cookie': `sid=deleted; expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0; path=/; HttpOnly`,
        },
        status: 202,
    });
}
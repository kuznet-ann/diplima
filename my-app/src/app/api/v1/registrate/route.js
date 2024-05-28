// import {
//     useRouter
// } from 'next/navigation';

// const router = useRouter();

export async function POST(request) {
    console.log('h1');
    const response = await fetch(`http://localhost:8000/api/v1/users`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        body: {
            'name': 'user',
            'phone': '7',
            'email': 'user1@example.com',
            'password': '12345678'
        },
        method: "POST",
        cache: "no-store"
    });
    console.log(response);


    if (!response.ok) {
        throw new Error(404);
    }
    // if (response.status === 401) {
    //     router.back();
    // }
    return new Response(null, {
        status: 404
    });
}
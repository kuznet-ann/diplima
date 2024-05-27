// ==============================
// Get information about products
// ==============================
export async function GET(request) {
    const page = request.url;
    const param = page.slice(page.indexOf('?'));
    // console.log(param);
    const response = await fetch(`http://localhost:8000/api/v1/products/${param ? param : ''}`, {
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return Response.json(
        data
    )


    // ============================
    // Get information about shapes
    // ============================
    // const response = await fetch(`http://localhost:8000/api/v1/shapes/`, {
    //     cache: 'no-store'
    // });
    // if (!response.ok) {
    //     throw new Error(response.status);
    // }
    // const data = await response.json();
    // return Response.json(
    //     data
    // )
}


// ==============================
// Add information about products
// ==============================
// export async function POST(request) {
//     // console.log(await request.json());
//     const response = await fetch(`http://localhost:8000/api/v1/products`, {
//         headers: {
//             'Content-Type': 'application/vnd.api+json',
//             // 'API-Key': process.env.DATA_API_KEY,
//         },
//         body: JSON.stringify(await request.json()),
//         method: "POST"
//     });
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return new Response(null, {
//         status: response.status
//     });
// }
export async function GET() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("sjdksdkjl");
    return new Response("This is the About API route.", {
        headers: { 'Content-Type': 'text/plain' },
    });
};
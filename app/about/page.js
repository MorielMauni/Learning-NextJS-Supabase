export default function about() {
    if (Math.random >= 0.5) throw new Error('error')
    return (
        <>
            <h1 className="mb-4 text-xl">About me</h1>
            <p>Hello, This is me</p>
        </>
    )
}
function HelloWorld() {
    return <h1>Hello, World!</h1>
}

export default function Page() {
    return (
        <div>
            <HelloWorld />
            <HelloWorld />
        </div>
    )
}
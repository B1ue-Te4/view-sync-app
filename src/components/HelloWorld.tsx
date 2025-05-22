type HelloWorldProps = { name: string }

export default function HelloWorld(props: HelloWorldProps) {

    const { name } = props

    return (
        <>
          <h1>Hello, {name}!</h1>
        </>
    )
}
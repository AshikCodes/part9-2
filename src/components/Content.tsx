interface ContextProps {
    name: string,
    exerciseCount: number
}

const Context = (props: ContextProps) => {
    return (
        <div>
            <p>{props.name} {props.exerciseCount}</p>
        </div>
    )
}

export default Context
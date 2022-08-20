
interface HeaderProps {
    coursename: string
}

const Header = (props: HeaderProps) => {
    return (
        <div>
            <h1>{props.coursename}</h1>
        </div>
    )
}

export default Header;
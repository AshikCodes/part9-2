// interface ContextProps {
//     name: string,
//     exerciseCount: number
// }
import Part from "./Part"
import { CoursePart } from "../types"

interface CourseList {
    courseParts: CoursePart[]
}

const Context = (props: CourseList) => {
    const courseParts = props.courseParts
    return (
        <div>
            {/* <p>{props.name} {props.exerciseCount}</p> */}
            {courseParts.map((course) => (
                <div key={course.type}>
                    <Part courseObj={course} />
                </div>
            ))}
        </div>
    )
}

export default Context
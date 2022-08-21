import {CoursePart}  from "../types";

type CourseList = {
    courseParts: CoursePart[]
}

const Total = (props: CourseList) => {
    const courseParts = props.courseParts;
    return (
    <div>
        <p>
            Number of exercises{" "}
            {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    </div>
    )
}

export {Total};
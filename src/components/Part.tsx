import {CoursePart}  from "../types";

const assertNever = (value: never) => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}

interface Course {
    courseObj: CoursePart
}

const Part = (props: Course): JSX.Element => {
    switch(props.courseObj.type){
        case "normal":
            return (
                <div>
                    <h3>
                        {props.courseObj.name}  {props.courseObj.exerciseCount} 
                    </h3>
                    <em>
                        {props.courseObj.description}
                    </em>
                </div>
            )
        case "groupProject":
            return (
                <div>
                    <h3>
                        {props.courseObj.name}  {props.courseObj.exerciseCount} 
                    </h3>
                    <p>
                        project exercises {props.courseObj.groupProjectCount}
                    </p>
                </div>
            )
        case "submission":
            return (
                <div>
                    <h3>
                        {props.courseObj.name}  {props.courseObj.exerciseCount} 
                    </h3>
                    <em>
                        {props.courseObj.description}
                    </em>
                    <p>
                        submit to {props.courseObj.exerciseSubmissionLink}
                    </p>
                </div>
            )
        case "special":
            return (
                <div>
                    <h3>
                        {props.courseObj.name}  {props.courseObj.exerciseCount} 
                    </h3>
                    <em>
                        {props.courseObj.description}
                    </em>
                    <p>
                        required skills: {props.courseObj.requirements.join(', ')}
                    </p> 
                </div>
            )
        default:
            return assertNever(props.courseObj);
    }
}

export default Part;
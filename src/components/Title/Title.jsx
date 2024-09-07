import "../../App.css"
import "./Title.css"

function Title({title}) {
  return (
    <h1 className="title text-center p-4 fw-bold mt-5 ">
       {title}
    </h1>
  )
}

export default Title
import "../../App.css"
import "./BoxInfo.css"

function BoxInfo({icon,head,text}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-white shadow p-3 gap-2 "> 
        
        {icon}
        <h3>{head}</h3>
        <p>{text}</p>

    </div>
  )
}

export default BoxInfo
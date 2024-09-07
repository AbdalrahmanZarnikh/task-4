import "../../App.css"
import "./Feature.css"

function Feature({icon,head,desc}) {
  return (
    <div className="d-flex w-100 gap-4 mb-5">
        {icon}
        <div>
            <h4 className="fw-bold text-secondary-emphasis">{head}</h4>
            <p>{desc}</p>
        </div>

    </div>
  )
}

export default Feature
import "../../App.css"

import "./Card2.css"

function Card2({icon,head,desc}) {
  return (
    <div className="d-flex align-items-center gap-3 bg-white w-100 p-3 shadow">
        {icon}
        <div>
            <h2 className="fw-bold">{head}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card2
import "../../App.css"
import "./ServiceCard.css"

function ServiceCard({icon,head,desc}) {
  return (
    <div className="w-100 d-flex flex-column align-items-center text-center mb-4">
        {icon}
        <h3 className="title p-3">{head}</h3>
        <p>{desc}</p>




  
   

    </div>
  )
}

export default ServiceCard
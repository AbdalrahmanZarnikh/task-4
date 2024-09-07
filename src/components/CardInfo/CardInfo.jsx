import "../../App.css"
import "./CardInfo.css"
function CardInfo({icon,head}) {
  return (
    <div className="bg-white card shadow p-4 py-5 rounded-0">
        
           {icon}
         <h3 className="fw-bold mb-3">{head}</h3>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas atque dolore. Voluptates.</p>
    </div>
  )
}

export default CardInfo
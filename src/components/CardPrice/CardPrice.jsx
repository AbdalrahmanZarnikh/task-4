import { Button } from "react-bootstrap";
import "../../App.css"
import "./CardPrice.css"
import { BiDollar } from "react-icons/bi";

function CardPrice({head,bg,number ,flag1,flag2,flag3}) {
  return (
    <div className="w-100 text-center shadow o">
     <h5 className="top p-3 rounded-1 position-relative" style={{backgroundColor:bg?"rgba(0, 179, 255, 0.719)":"rgba(128, 128, 128, 0.219)",color:bg?"white":"black"}}>
        {head}
        <span className="prime text-light  pp fw-bold" style={{display:flag3?"inline":"none"}}>Advanced</span>
     </h5>
     
     <div className="p-4">
        <div className="d-flex justify-content-center align-items-center">
        <h2 className=" fw-bold fs-2 rel d-flex justify-content-center"><BiDollar className="fs-4  ab"/> {number} </h2>
        <span className="fw-normal text-secondary fs-5 ">/ month</span>
        </div>
       
        <p>Aide dere</p>
        <p>Nec feugiat nisl</p>
        <p>Nulla at volutpat dola</p>
        <p style={{textDecoration:flag1 ? "line-through":"none",color:flag1?"rgba(128, 128, 128, 0.719)":"black"}}>Pharetera massa</p>
        <p style={{textDecoration:flag2 ? "line-through":"none",color:flag2 ?"rgba(128, 128, 128, 0.719)":"black"}} >Massa ultricies</p>
     </div>
       <div className="p-3" style={{backgroundColor:"rgba(128, 128, 128, 0.219)"}}>
       <Button variant="primary" className="prime text-white border border-none px-4  ">Buy Now</Button>
       </div>
    </div>
  )
}

export default CardPrice
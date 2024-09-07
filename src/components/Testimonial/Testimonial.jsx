import { Image } from "react-bootstrap"
import "../../App.css"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "./Testimonial.css"

function Testimonial({img,name,job}) {
  return (
    <div className="m-5 position-relative mb-5 h-sm-50 w-100">
        <p className="bg-secondary-subtle p-4 pb-5  rounded-1  ">
            <FaQuoteLeft className="text-prime fs-6 m-2"/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate, totam officia iure sapiente maiores sit possimus consequuntur quam aliquam sed aut voluptas. Distinctio amet minima eos eligendi, aut illo. <FaQuoteRight className="text-prime fs-6 m-2"/></p>
        <div className="move-image">
            <Image src={img} style={{width:"90px"}} className="bg-white shadow p-1" roundedCircle/>
            <h4 className="fw-bold mt-3 mb-1">{name}</h4>
            <p>{job}</p>
        </div>


    </div>
  )
}

export default Testimonial
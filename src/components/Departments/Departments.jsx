import { Col, Container, Image, Row } from "react-bootstrap";
import "../../App.css";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./Departments.css";
import { useEffect, useRef, useState } from "react";

function Departments() {
  const info=[
    {
      img:"/img/departments-1.jpg",
      head:"Cardiology"
    },
    {
      img:"/img/departments-2.jpg",
      head:"Neurology"
    },
    {
      img:"/img/departments-3.jpg",
      head:"Hepatology"
    },
    {
      img:"/img/departments-4.jpg",
      head:"Pediatrics"
    },
    {
      img:"/img/departments-5.jpg",
      head:"Ophthalmologists"
    },

  ]
   
  const [data,setdata]=useState(info[4])
  const [counter,setcounter]=useState(4)
   const btn1=useRef(null);
   const btn2=useRef(null);
   const btn3=useRef(null);
   const btn4=useRef(null);
   const btn5=useRef(null);

   const btns=[btn1,btn2,btn3,btn4,btn5];

   useEffect(()=>{ 
     btns.forEach((item)=>{
         item.current.classList.remove("my-border-prime");
         item.current.classList.remove("text-prime");
         btns[counter].current.classList.add("my-border-prime");
         btns[counter].current.classList.add("text-prime");
     })
    },[counter])


    console.log(data)



  return (
 

    <div id="department" className="p-4">
      <Title title="Departments" />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container>
        <Row >
          <Col sm={12} md={4} className="mb-2">
          <div>
            <p className="my-border  fw-bold p-2 m-0 pointer" ref={btn1} onClick={()=>{setdata(info[0]);setcounter(0)}}>Cardiology</p>
            <p onClick={()=>{setdata(info[1]);setcounter(1)}} className=" my-border fw-bold p-2 m-0 pointer"  ref={btn2}>Neurology</p>
            <p onClick={()=>{setdata(info[2]);setcounter(2)}} className=" my-border fw-bold p-2 m-0 pointer"  ref={btn3}>Hepatology</p>
            <p onClick={()=>{setdata(info[3]);setcounter(3)}} className=" my-border fw-bold p-2 m-0 pointer"  ref={btn4}>Pediatrics</p>
            <p onClick={()=>{setdata(info[4]);setcounter(4)}} className=" my-border my-border-prime text-prime fw-bold p-2 m-0 pointer"  ref={btn5}>Ophthalmologists</p>
          </div>

          </Col>
          <Col sm={12} md={5} className="order-1 order-md-0 mb-2"> 
            <div>
              <h3 className="fw-bold mb-4 " >{data.head}</h3>
              <p className="mb-1 text-secondary ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</p>
              <p className="text-secondary py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio alias itaque deleniti temporibus ad aut. Vero sit totam explicabo aliquid id error, aperiam illo voluptas rerum voluptatem voluptatibus delectus! Nesciunt, blanditiis distinctio!</p>
            </div>
          </Col>
          <Col sm={12} md={3} className="mb-2">
            <div  className="w-sm-100 w-md-75">
            <Image src={data.img}  className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Departments;

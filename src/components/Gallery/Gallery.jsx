import { Container, Row ,Carousel} from "react-bootstrap"
import "../../App.css"
import "./Gallery.css"
import SubTitle from "../SubTitle/SubTitle"
import Title from "../Title/Title"
import { useState } from "react"



function Gallery() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images=[
    {
      img:"/img/gallery/gallery-1.jpg"
    },
    {
      img:"/img/gallery/gallery-2.jpg"
    },
    {
      img:"/img/gallery/gallery-3.jpg"
    },
    {
      img:"/img/gallery/gallery-4.jpg"
    },
    {
      img:"/img/gallery/gallery-5.jpg"
    },
    {
      img:"/img/gallery/gallery-6.jpg"
    },
    {
      img:"/img/gallery/gallery-7.jpg"
    },
    {
      img:"/img/gallery/gallery-8.jpg"
    },
  ]


  return (
    <div className="bg p-1">
        <Title title={"Gallery"}/>
        <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
    
     <Container className="my-margin ">
     <Carousel activeIndex={index} onSelect={handleSelect} >
              {images.map((image)=>{
                return(
                  <Carousel.Item className="">
                  <div className="w-100 fill m-auto" >
                    <img src={image.img} alt="" className="w-100 b"  />
                  </div>
                  </Carousel.Item >
                )
              })}
          </Carousel>
     </Container>
</div>
  )
}

export default Gallery
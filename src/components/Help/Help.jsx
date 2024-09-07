import "../../App.css"
import Button from 'react-bootstrap/Button';


function Help() {
  return (
    <div className="prime text-white text-center p-5">
        <h2 className="fw-bold mb-3 ">In an emergency? Need help now?</h2>
        <p className="w-75 m-auto mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum. Temporibus, sed dignissimos? Doloremque quisquam expedita nemo eius! Obcaecati aliquam minus cum asperiores quia consectetur!
        </p>
        <Button variant="outline-light" className="px-4 fs-5">Make an Appointment</Button>
        
    </div>
  )
}

export default Help
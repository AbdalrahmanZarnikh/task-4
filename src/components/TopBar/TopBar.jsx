import "./TopBar.css";
import "../../App.css"
import { RiComputerLine } from "react-icons/ri";
import { FaTabletAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RiDownload2Fill } from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function TopBar() {
  return (
    <div className="d-flex justify-content-between align-items-center --top-color text-white">
      <div className="d-none d-md-flex align-items-center gap-4">
        <h4>
          BOOTSTRAP<span className="text-blue">MADE</span>
        </h4>
        <div className="d-flex gap-2">
          <RiComputerLine className="--icon-size"/>
          <FaTabletAlt className="--icon-size text-secondary"/>
          <FaMobileAlt className="--icon-size text-secondary"/>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <LiaAngleLeftSolid />
        <h5 className="fw-bold">Medicio</h5>
        <LiaAngleRightSolid />
      </div>
      <div className="d-flex align-items-center gap-3 ">
        <HiMiniArrowTopRightOnSquare  className="--icon-size text-secondary" />
        <div className="bg-blue d-flex align-items-center p-2 gap-2 fw-bold" >
          <RiDownload2Fill className="--icon-size" /> FREE DOWNLOAD
        </div>
      </div>
    </div>
  );
}

export default TopBar;

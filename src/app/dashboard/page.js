import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import '../globals.css';
import PatientGrid from "../../components/PatientGrid";

export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'

export default function Dashboard() {
  return (
    <main className="container-fluid" style={{"padding-left":"0"}}>
      <div className="row" style={{padding: "0"}}>
        <div className="col-md-1 col-lg-1">
          <SideBar />
        </div>

        <div className="col-md-5 col-lg-11">
          <div className="row">
            <div className="col-lg-12">
              <Navbar />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <PatientGrid />
            </div>
          </div>
        </div>
      </div>
    </main>
  


  

  );
}


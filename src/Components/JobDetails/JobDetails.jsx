import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localstorage";


const JobDetails = () => {
    const jobs= useLoaderData()
    const {id}=useParams()
    // console.log(id,jobs)
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(jobs,idInt)
    console.log(job)
    const handleApply =()=>{
        saveJobApplication(idInt)

        toast("you have apply successfully")
    }
    return (
        <div>
            <h3>job detail:{id}</h3>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="border md:col-span-3 p-2">
                    <h2 className=" mb-3"><span className=" font-bold">Job Description:</span>{job.job_description}</h2>
                    <h3><span>Job Responsibility:</span>{job.job_responsibility}</h3>
                    <h4 className=" font-bold mb-2">Educational Requirements:</h4>
                    <h5>{job.educational_requirements}</h5>
                    <h4 className=" font-bold mb-2">Experiences:</h4>
                    <h5>{job.experiences}</h5>
                </div>
                <div className="border">
                    <h2 className=" font-bold mb-2">job detail</h2>
                    <hr />
                    <h3>Salary :{job.salary}</h3>
                    <h4>phone : {job.contact_information.phone}</h4>
                    <button onClick={handleApply} className="btn bg-gradient-to-r from-green-400 to-blue-500">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
            
        </div>
    );
};

export default JobDetails;
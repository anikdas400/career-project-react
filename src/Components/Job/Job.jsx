import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-auto h-12 mt-2" src={logo} alt="company" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 border-2 rounded font-bold text-[#7E90FE] border-[#9873FF] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border-2 rounded font-bold text-[#7E90FE] border-[#9873FF] mr-4">{job_type}</button>
                    <div className="flex gap-3 items-center mt-4 mb-4">
                        <h2 className="flex items-center justify-center gap-2 text-lg"><MdLocationOn className=""></MdLocationOn> {location} </h2>
                        <h2 className="flex items-center justify-center gap-2 text-lg"><AiOutlineDollar></AiOutlineDollar><span>Salary:{salary}</span></h2>
                    </div>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
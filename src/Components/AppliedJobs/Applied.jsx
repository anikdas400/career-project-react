import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredJobApplication } from "../Utility/localstorage";


const Applied = () => {
    const jobs = useLoaderData()
    const [appliedJob, setAppliedJob] = useState([])

    const [displayJob,setDisplayJob] = useState([])

    const handleJobFilter = filter=>{
        if(filter==='all'){
            setDisplayJob(appliedJob)
        }
        else if(filter ==='remote'){
            const remoteJob = appliedJob.filter(job=>job.remote_or_onsite === 'Remote')
            setDisplayJob(remoteJob)
        }
        else if(filter === 'onsite'){
            const onsiteJob = appliedJob.filter(job=>job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJob)
        }
    }
    useEffect(() => {
        const storedJobIds = getstoredJobApplication()
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobs, storedJobIds, JobsApplied)
            setAppliedJob(JobsApplied)
            setDisplayJob(JobsApplied)
        }
    }
        , [jobs])
    return (
        <div>
            <h2>I Applied for a new job:{appliedJob.length}</h2>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title}{job.company_name}:{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Applied;
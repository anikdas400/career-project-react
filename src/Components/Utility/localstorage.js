const getstoredJobApplication =()=>{
    const storesJobApplication =localStorage.getItem('job-application')
    if(storesJobApplication){
        return JSON.parse(storesJobApplication)
    }
    return []
}

const saveJobApplication = id =>{
    const storesJobApplication = getstoredJobApplication()
    const exists = storesJobApplication.find(jobId=> jobId.id === id)
    if(!exists){
        storesJobApplication.push(id)
        localStorage.setItem('job-application',JSON.stringify(storesJobApplication))
    }
}






export {getstoredJobApplication,saveJobApplication}
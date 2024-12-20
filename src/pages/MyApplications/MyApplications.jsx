import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
   const { user } = useAuth()
   const [jobs, setJobs] = useState([])

   useEffect(() => {
      // fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      //    .then(res => res.json())
      //    .then(data => {
      //       setJobs(data)
      //    })


      // axios.get(`http://localhost:5000/job-applications?email=${user.email}`,{
      //    withCredentials: true
      // })
      // .then(res=>{
      //    setJobs(res.data)
      // })
      

      axios.get(`http://localhost:5000/job-applications?email=${user.email}`, {withCredentials: true})
      .then(res=>{
         setJobs(res.data)
      })

   }, [user.email])


   return (
      <div>
         <h3>My Application {jobs.length}</h3>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Job</th>
                     <th>Favorite Color</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 4 */}
                  {
                     jobs.map(job => (
                        <tr key={job._id}>
                           <th>
                              <label>
                                 <input type="checkbox" className="checkbox" />
                              </label>
                           </th>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                       <img
                                          src={job.company_logo}
                                          alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="font-bold">{job.title}</div>
                                    <div className="text-sm opacity-50">{job.location}</div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              Wyman-Ledner
                              <br />
                              <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                           </td>
                           <td>Indigo</td>
                           <th>
                              <button className="btn btn-ghost btn-xs">x</button>
                           </th>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyApplications;
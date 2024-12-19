import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
   const {user} = useAuth()
   const navigate = useNavigate()
   const handleAddJob = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const initialData = Object.fromEntries(formData.entries());
      const { min, max, currency, ...newJob } = initialData;

      newJob.salary = { min, max, currency };
      newJob.requirements = newJob.requirements.split('\n');
      newJob.responsibilities = newJob.responsibilities.split('\n');

      fetch('http://localhost:5000/jobs', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newJob),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your job has been added",
                  showConfirmButton: false,
                  timer: 1500
               });
               navigate('/myPostedJobs')
            }
         })
   };

   return (
      <div>
         <h2 className='text-3xl'>Post a New Job</h2>
         <form onSubmit={handleAddJob} className="card-body">
            {/* Job Title */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Title</span>
               </label>
               <input type="text" placeholder="Job title" name="title" className="input input-bordered" required />
            </div>

            {/* Location */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Location</span>
               </label>
               <input type="text" placeholder="Location" name="location" className="input input-bordered" required />
            </div>

            {/* Job Type */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Type</span>
               </label>
               <select name="type" className="select select-ghost w-full" defaultValue="Pick a Job Type" required>
                  <option disabled>
                     Pick a Job Type
                  </option>
                  <option value="Full-Time">Full Time</option>
                  <option value="Intern">Intern</option>
                  <option value="Part-Time">Part Time</option>
               </select>
            </div>

            {/* Job Category */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Field</span>
               </label>
               <select name="field" className="select select-ghost w-full" defaultValue="Pick a Job Field" required>
                  <option  disabled>
                     Pick a Job Field
                  </option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                  <option value="Teaching">Teaching</option>
               </select>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Salary Min</span>
                  </label>
                  <input type="number" placeholder="Min" name="min" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Salary Max</span>
                  </label>
                  <input type="number" placeholder="Max" name="max" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Currency</span>
                  </label>
                  <select name="currency" className="select select-ghost w-full" defaultValue="Pick a Currency" required>
                     <option disabled>
                        Pick a Currency
                     </option>
                     <option value="BDT">BDT</option>
                     <option value="USD">USD</option>
                     <option value="INR">INR</option>
                  </select>
               </div>
            </div>

            {/* Job Description */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Description</span>
               </label>
               <textarea name="description" className="textarea textarea-bordered" placeholder="Job Description" required></textarea>
            </div>

            {/* Company Name */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Company Name</span>
               </label>
               <input type="text" placeholder="Company Name" name="company" className="input input-bordered" required />
            </div>

            {/* Requirements */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Requirements</span>
               </label>
               <textarea name="requirements" className="textarea textarea-bordered" placeholder="Put Each Requirement in a New Line" required></textarea>
            </div>

            {/* Responsibilities */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Job Responsibilities</span>
               </label>
               <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Put Each Responsibility in a New Line" required></textarea>
            </div>

            {/* HR Name */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">HR Name</span>
               </label>
               <input type="text" placeholder="HR Name" name="hr_name" className="input input-bordered" required />
            </div>

            {/* HR Email */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">HR Email</span>
               </label>
               <input defaultValue={user?.email} type="email" placeholder="HR Email" name="hr_email" className="input input-bordered" required />
            </div>
            {/* Apply applicationDeadline */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Deadline</span>
               </label>
               <input type="date" placeholder="Application Deadline" name="applicationDeadline" className="input input-bordered" required />
            </div>

            {/* Company Logo URL */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Company Logo URL</span>
               </label>
               <input type="text" placeholder="Company Logo URL" name="company_logo" className="input input-bordered" required />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
               <button type="submit" className="btn btn-primary">Submit</button>
            </div>
         </form>
      </div>
   );
};

export default AddJob;

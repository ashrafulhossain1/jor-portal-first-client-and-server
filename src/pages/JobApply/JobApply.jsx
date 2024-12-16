import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {

    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    // console.log(user)
    // console.log(id)


    const handleJobApply = (e) => {
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume)


        const jobApplication = {
            job_id: id,
            applicantEmail: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })


    }

    return (
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Apply Job and Good luck</h1>

            <form onSubmit={handleJobApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn Url</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name="github" placeholder="Github Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume Url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
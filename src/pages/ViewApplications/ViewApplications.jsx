import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)
    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                  if (data.modifiedCount) {
                               Swal.fire({
                                  position: "top-end",
                                  icon: "success",
                                  title: "Your Status update successfully",
                                  showConfirmButton: false,
                                  timer: 1500
                               });
                            }
            })
    }


    return (
        <div>
            <h2 className='text-3xl'>View Applicants for This job {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((apply, inx) => (
                                < tr key={apply._id} >
                                    <th>{inx + 1}</th>
                                    <td>{apply?.applicantEmail}</td>
                                    <td>Tax Accountant</td>
                                    <td>
                                        <select
                                            onChange={(e) => handleStatusUpdate(e, apply._id)}
                                            defaultValue={apply.status || 'Change Status'}
                                            className="select select-bordered select-xs w-full max-w-xs">
                                            <option disabled>Change Status</option>
                                            <option>Under Review</option>
                                            <option>Set Interval</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default ViewApplications;
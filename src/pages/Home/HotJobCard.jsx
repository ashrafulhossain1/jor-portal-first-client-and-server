import { IoLocationSharp } from "react-icons/io5";
import React from 'react';
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {

    const { _id, title, location, jobType, category, description, applicationDeadline, salaryRange, company, requirements, company_logo, } = job || {}

    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className='flex gap-4  items-center'>
                <figure>
                    <img
                        className='w-12'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-2xl'>{company}</h3>
                    <p className="flex gap-2 items-center"><IoLocationSharp></IoLocationSharp>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-secondary">NEW</div>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skill, inx) =>
                            <span className="border rounded-md  px-2 py-1 text-sm hover:bg-purple-600 hover:text-white" key={inx}>{skill}oj</span>
                        )
                    }
                </div>
                <div className="card-actions justify-end">
                    <p>Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency?.toUpperCase()} </p>
                    <Link to={`jobs/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
import { useState } from 'react';
import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';

const Job = ({ _id, position, company, jobLocation, jobType, createdAt }) => {
    const { setEditJob, deleteJob, createResponse } = useAppContext();
    const [showForm, setShowForm] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const date = moment(createdAt).format('MMM Do, YYYY');

    const handleResponseSubmit = (e) => {
        e.preventDefault();
        createResponse({ jobId: _id, phoneNumber });
        setShowForm(false);
    };

    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                <JobInfo icon={<FaCalendarAlt />} text={date} />
                <JobInfo icon={<FaBriefcase />} text={jobType} />
                <footer>
                    <Link to="/add-job" className="edit-btn" onClick={() => setEditJob(_id)}>
                        Edit
                    </Link>
                    <button type="button" className="delete-btn" onClick={() => deleteJob(_id)}>
                        Delete
                    </button>
                    <button type="button" className="apply-btn" onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Cancel' : 'Apply'}
                    </button>
                </footer>
                {showForm && (
                    <form className="form" onSubmit={handleResponseSubmit}>
                        <div className="form-row">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <button type="submit" className="btn btn-block">Submit</button>
                    </form>
                )}
            </div>
        </Wrapper>
    );
};

export default Job;

import { useState, useEffect, useCallback } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading, getResponses, responses } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const memoizedGetResponses = useCallback(() => {
    if (user?.role === 'admin') {
      getResponses();
    }
  }, [user, getResponses]);

  useEffect(() => {
    memoizedGetResponses();
  }, [memoizedGetResponses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !location || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
      <Wrapper>
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Profile</h3>
            {showAlert && <Alert />}
            <div className="form-center">
              <FormRow
                  type="text"
                  name="name"
                  value={name}
                  handleChange={(e) => setName(e.target.value)}
              />
              <FormRow
                  type="text"
                  name="lastName"
                  label="Last name"
                  value={lastName}
                  handleChange={(e) => setLastName(e.target.value)}
              />
              <FormRow
                  type="email"
                  name="email"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
              />
              <FormRow
                  type="text"
                  name="location"
                  value={location}
                  handleChange={(e) => setLocation(e.target.value)}
              />
              <button className="btn btn-block" type="submit" disabled={isLoading}>
                {isLoading ? "Please Wait..." : "save changes"}
              </button>
            </div>
          </form>
          {user.role === 'admin' && (
              <div className="responses">
                <h4>Responses</h4>
                {responses.length > 0 ? (
                    responses.map((response) => (
                        <div key={response._id} className="response-card">
                          <h5>Job: {response.jobId.position}</h5>
                          <p>Company: {response.jobId.company}</p>
                          <p>Phone Number: {response.phoneNumber}</p>
                        </div>
                    ))
                ) : (
                    <p>No responses found</p>
                )}
              </div>
          )}
        </div>
      </Wrapper>
  );
};

export default Profile;

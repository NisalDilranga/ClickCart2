import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams(); // Assuming you're using React Router
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/reset-password", {
        token,
        newPassword
      });
      setMessage("Password reset successfully.");
	 
    } catch (error) {
      setMessage("Error resetting password.");
	  alert('Password reset unsuccessfully');
	  console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        padding: "10px",
        width: "600px",
        marginLeft: "455px",
        marginTop:'200px'
      }}
    >
      <div className="container">
        <h1 className="mb-5"></h1>
        <div className="bg-white shadow rounded-lg d-block d-sm-flex">
          <div className="profile-tab-nav border-right"></div>
          <div className="tab-content p-4 p-md-5">
            <div
              className="tab-pane fade show active"
              style={{
                marginLeft: "55px",
              }}
            >
              <h3 className="mb-4">Reset Password</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: "350px",
                      padding: "10px",
                      marginTop: "20px",
                      marginBottom: "20px",
					  border: "1px solid black",
            
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      width: "350px",
                      padding: "10px",
                      marginTop: "20px",
					  border: "1px solid black"
                    }}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{
                    border: "1px solid black",
                    marginTop: "20px",
                    width: "100px",
					marginRight:'100px',
          backgroundColor:'black'
                  }}
                >
                  Update
                </button>
                <button className="btn btn-light" type="button"
				style={{
                    border: "1px solid black",
                    marginTop: "20px",
                    width: "100px"
					
                  }}
				>
                  Cancel
                </button>
              </form>
              {message && <div>{message}</div>}
            </div>
          </div>
        </div>
        <a href="#">Go Back</a>
      </div>
    </div>
  );
};

export default RePassword;

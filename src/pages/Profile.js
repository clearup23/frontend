import React from "react";
import { useUser } from "../users/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../layout/Navbar2";
import profile from "../images/profile.png";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Profile() {
  const { userDetails, setUserData } = useUser();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar2 />
      <div className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-center">
                  <h1>Profile</h1>
                  <div className="mt-3 mb-4">
                    <MDBCardImage
                      src={profile}
                      className="rounded-circle"
                      fluid
                      style={{ width: "100px" }}
                    />
                  </div>
                  <MDBTypography tag="h4">
  {userDetails.name}
  {userDetails.role === "teacher" && (
        <span style={{ color: "blue", display: "inline", marginLeft: "5px" }} title="Teacher">&#x2713;</span>
    )}
  {/* <span style={{ color: "blue", marginLeft: "5px" }}>
    &#x2713;
  </span> */}
</MDBTypography>

                  <MDBCardText className="text-muted mb-4">
                    Role: {userDetails.role}
                  </MDBCardText>
                  <MDBCardText className="text-muted mb-4">
                    Email: {userDetails.email}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

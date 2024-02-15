import React from "react";
import { useUser } from "../users/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../layout/Navbar2";
import profile from "../images/profile.png";
// import "./Profile.css";
import header from "../images/header.png";
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
                    <div className="mt-3 mb-4">
                      <MDBCardImage
                        src={profile}
                        className="rounded-circle"
                        fluid
                        style={{ width: "100px" }}
                      />
                    </div>
                    <MDBTypography tag="h4">{userDetails.name}</MDBTypography>
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

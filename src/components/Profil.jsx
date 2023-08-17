import React from "react";
import {useNavigate} from "react-router-dom";


export default function Profile({userdata}) {
  const navigate=useNavigate()

  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src={userdata.imageUrl}
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">
                  {userdata.userName}
                </MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {userdata.email}
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="github" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn
                  rounded
                  size="lg"
                  onClick={() => {
                    navigate('/profile/updateprofile' ,{state:{user:userdata}})
                  }}
                >
                  update
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

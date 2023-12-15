import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleActiveTab = (value) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  return (
    <MDBContainer
      style={{
        padding: "1rem",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <MDBTabs
        pills
        justify
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleActiveTab("tab1")}
            active={activeTab === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleActiveTab("tab2")}
            active={activeTab === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={activeTab === "tab1"}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <p>Sign in with:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 auto",
                width: "40%",
              }}
            >
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>or:</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem",
            }}
          >
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn style={{ marginBottom: "1rem", width: "100%" }}>
            Sign in
          </MDBBtn>
          <p style={{ textAlign: "center" }}>
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>
        <MDBTabsPane show={activeTab === "tab2"}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <p>Sign up with:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 auto",
                width: "40%",
              }}
            >
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                style={{ margin: "0.5rem", color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
          />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>
          <MDBBtn style={{ marginBottom: "1rem", width: "100%" }}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;

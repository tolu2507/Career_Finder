import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
// import gql from "graphql-tag";
import { Typography } from "antd";
import { LoginButtons } from "./LoginButtons";
import { LoginFooter } from "./LoginFooter";
import { INPUT, LoginInput } from "./LoginInpt";
import { LoginCheckBox, LoginSecuredtext } from "./LoginSecuredText";
import { CONSTANT } from "../../constants";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export function LoginComponentContent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputData: INPUT[] = [
    { value: email, setChange: () => setEmail, prefix: <MailOutlined /> },
    { value: password, setChange: () => setPassword, prefix: <LockOutlined /> },
  ];

  let navigate = useNavigate();

  const [signIn] = useMutation(SIGN_IN_MUTATION, {
    variables: { email, password },
    onCompleted: (data) => {
      console.log("Signed in successfully!");
      // Handle successful sign-in, such as storing the token and redirecting
      if(data){
        navigate("/home");
      }
    },
  });

  const handleSubmit = () => {
    console.log(email, password)
    return signIn();
  };

  return (
    <div>
      <Title level={2} className=" text-gray-400">
        {CONSTANT.LOGIN}
      </Title>
      <LoginSecuredtext />
      <LoginInput data={inputData} />
      <br />
      <LoginCheckBox />
      <br />
      <LoginButtons handleClick={handleSubmit} />
      <LoginFooter />
    </div>
  );
}

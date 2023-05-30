import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Typography } from "antd";
import { LoginButtons } from "./LoginButtons";
import { LoginFooter } from "./LoginFooter";
import { INPUT, LoginInput } from "./LoginInpt";
import { LoginCheckBox, LoginSecuredtext } from "./LoginSecuredText";
import { CONSTANT } from "../../constants";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import styled from "styled-components";
import twStyled from "tailwind-styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const { Text } = Typography;

const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export function LoginComponentContent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const StyledTitleText = twStyled(Text)`
  text-[44px] text-[#233d6b] ;
  `;
  const StyledDiv = twStyled.div`
  bg-white rounded-xl min-w-[700px] h-[100%] p-16 ml-52 ;
  `;

  const inputData: INPUT[] = [
    {
      value: email,
      setChange: () => setEmail,
      prefix: <AiOutlineMail size={20} color="#97a6bf" />,
    },
    {
      value: password,
      setChange: () => setPassword,
      prefix: <BiLockAlt size={20} color="#97a6bf" />,
    },
  ];

  const [signIn] = useMutation(SIGN_IN_MUTATION, {
    variables: { email, password },
    onCompleted: (data) => {
      console.log("Signed in successfully!");
      // Handle successful sign-in, such as storing the token and redirecting
      if (data) {
        navigate("/home");
      }
    },
  });

  const handleSubmit = () => {
    console.log(email, password);
    return signIn();
  };

  return (
    <StyledDiv>
      <StyledTitleText>{CONSTANT.LOGIN}</StyledTitleText>
      <LoginSecuredtext />
      <LoginInput data={inputData} />
      <br />
      <LoginCheckBox />
      <br />
      <LoginButtons handleClick={handleSubmit} />
      <LoginFooter />
    </StyledDiv>
  );
}

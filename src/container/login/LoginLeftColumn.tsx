import { FormTypes } from "../../component/form/Form";
import { LoginComponent } from "../../component/login/LoginComponent";
import { StyledLoginLeftColumn } from "../styles/loginstyle";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

export default function LoginLeftColumnContainer() {
  const formData: FormTypes[] = [
    {
      name: "email",
      rule: { required: true, message: "Please input your Email" },
      icon: <AiOutlineMail size={25} className="ml-4" />,
      input: { placeholder: "Email", type: "email", bordered: false },
    },
    {
      name: "password",
      rule: { required: true, message: "Please input your Password" },
      icon: <AiOutlineLock size={25} className="ml-4" />,
      input: { placeholder: "Password", type: "password", bordered: false },
    },
  ];
  return (
    <StyledLoginLeftColumn>
      <LoginComponent formData={formData} />
    </StyledLoginLeftColumn>
  );
}

import { CONSTANT } from "../../constants";
import FormComponent, { FormTypes } from "../form/Form";
import { StyledLoginComponent, StyledLoginText } from "./styles/styles";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
export function LoginComponent({ formData }: { formData: FormTypes[] }) {
  let navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log(values.email, values.password);
    if (!values.email && !values.password) {
      message.error(CONSTANT.ERROR);
      return;
    }
    if (!values.email || !values.password) {
      message.error(CONSTANT.ERROREMAILORPASSWORD);
      return;
    }
    message.success(CONSTANT.SUCCESS);
    return navigate("/home");
    
  };

  return (
    <StyledLoginComponent>
      <div className=" p-2 md:py-8">
        <StyledLoginText>{CONSTANT.LOGIN}</StyledLoginText>
      </div>
      <FormComponent
        data={formData}
        onFinish={handleSubmit}
      />
    </StyledLoginComponent>
  );
}

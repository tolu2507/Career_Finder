import { Button, Divider, Typography, Checkbox, Input, Form } from "antd";
import { FcGoogle } from "react-icons/fc";
import { LoginTextFormComponent } from "../login/LoginFormTextComponent";
import { StyledDivider, StyledOrDiv } from "../login/styles/styles";

const { Text } = Typography;

export default function FormComponent({
  data,
  onFinish,
}: {
  data: FormTypes[];
  onFinish: (val: any) => void;
  onGoogleSubmit?: (val: any) => void;
}) {
  return (
    <div className=" p-2">
      <Form
        name="normal_login"
        className=""
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <LoginTextFormComponent />
        </Form.Item>

        {Array.isArray(data) &&
          data.map(({ name, rule, icon, input }) => (
            <Form.Item
              key={name}
              name={name}
              rules={[{ required: rule.required, message: rule.message }]}
            >
              <div className="md:h-[70px] flex items-center justify-center space-x-2 bg-[#e8f0fe] rounded-lg">
                {icon}
                <Input
                  placeholder={input.placeholder}
                  size="large"
                  type={input.type}
                  bordered={input.bordered}
                  className="bg-[transparent] h-full"
                />
              </div>
            </Form.Item>
          ))}

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-primary-color">Remember me</Checkbox>
          </Form.Item>

          <Button className="float-right border-0 text-primary-color justify-end flex">
            Forgot password ?
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-[100%] bg-primary-button h-14 m-2 md:m-0 rounded-md"
          >
            Log in
          </Button>
          <StyledDivider>
            <Divider>
              <StyledOrDiv>Or</StyledOrDiv>
            </Divider>
          </StyledDivider>
          <Button
            type="default"
            htmlType="submit"
            className="w-[100%] text-button font-[500]  h-14 m-2 md:m-0 rounded-md md:border-[2px]"
          >
            <div className="flex text-center items-center justify-center h-[100%] p-2">
              <FcGoogle size={35} className="md:mr-4" />
              <Text className="hidden md:inline-flex text-[15px]">
                Continue with Google
              </Text>
            </div>
          </Button>
        </Form.Item>

        <Form.Item className="text-center">
          <Text className="text-center text-primary-color">
            No account yet ? Join Expaat as a{" "}
            <Text className="text-dark">freelancer</Text> or
            <Text className="text-dark"> company</Text>
          </Text>
          <br />
          <Text className="text-center text-primary-color">
            Copyright 2013 - 2023, expaat, LLC
          </Text>
        </Form.Item>
      </Form>
    </div>
  );
}

export interface FormTypes {
  name: string;
  rule: {
    required: boolean;
    message: string;
  };
  icon: JSX.Element;
  input: {
    placeholder: string;
    type: string;
    bordered: boolean;
  };
}

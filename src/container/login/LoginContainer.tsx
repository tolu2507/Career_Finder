import { LoginImage } from "../../component/login/LoginImage";
import { StyledLoginContainer } from "../styles/loginstyle";

export default function LoginContainer({ children }: LoginContainerType) {
  return (
    <StyledLoginContainer>
      <LoginImage
        image={"/images/background.png"}
        styles={"object-cover absolute mix-blend-overlay w-full h-full"}
      />
      {children}
    </StyledLoginContainer>
  );
}

export interface LoginContainerType {
  children: JSX.Element;
}

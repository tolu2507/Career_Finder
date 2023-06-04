import { StyledLoginScreenContainer } from "../styles/loginstyle";
import { LoginContainerType } from "./LoginContainer";

export default function LoginScreenContainer({ children }: LoginContainerType) {
  return <StyledLoginScreenContainer>{children}</StyledLoginScreenContainer>;
}

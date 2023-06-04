import { StyledHeader } from "../styles/homestyles";

export default function HeaderContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return <StyledHeader>{children}</StyledHeader>;
}

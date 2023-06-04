import { StyledLayout } from "../styles/homestyles";

export default function HomePageContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return <StyledLayout>{children}</StyledLayout>;
}

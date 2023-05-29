import { Link } from "react-router-dom";
import { Typography } from "antd";
const { Text } = Typography;

export function LoginFooter() {
  return (
    <div className=" text-center">
      <Text className=" text-center">
        No Account yet Join Expaat as
        <Link to="/register"> FREELANCER</Link> or
        <Link to="/register"> COMPANY</Link>
      </Text>
      <br />
      <Text>Copyright 2013 - 2023 Expaat, LLC </Text>
    </div>
  );
}

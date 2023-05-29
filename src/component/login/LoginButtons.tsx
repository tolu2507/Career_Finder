import { Typography, Button, Divider } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";
import { CONSTANT } from "../../constants";

const { Text } = Typography;

export function LoginButtons({ handleClick }: { handleClick: () => void }) {
  return (
    <>
      <div className="my-10">
        <Button
          className="bg-teal-500 text-[18px] font-semibold hover:bg-teal-200 w-[100%] h-16 border-0"
          onClick={handleClick}
        >
          LOG IN
        </Button>
      </div>
      <Divider>OR</Divider>
      <div className="my-10">
        <Button
          className="hover:bg-teal-200 w-[100%] h-16"
          icon={
            <GoogleCircleFilled style={{ fontSize: 40, marginRight: 20 }} />
          }
          onClick={handleClick}
        >
          <Text className="text-[18px] font-semibold">
            {CONSTANT.CONTINUEWITHGOGGLE}
          </Text>
        </Button>
      </div>
    </>
  );
}

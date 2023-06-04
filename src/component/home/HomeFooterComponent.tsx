import { Typography } from "antd";

const { Text } = Typography;

const companies = [
  { id: "1", name: "Trusted by global Brands." },
  { id: "2", name: "MICROSOFT." },
  { id: "3", name: "NETFLIX" },
  { id: "4", name: "GOOGLE" },
];

export default function HomeFooter() {
  return (
    <div className="w-[100%] px-2">
      <div className="flex justify-between items-center text-center my-20">
        {companies.map(({ id, name }) => (
          <Text className=" font-semibold text-[#a2afc4] text-lg" key={id}>
            {name}
          </Text>
        ))}
      </div>
      <div className="flex items-center h-2 space-x-[2px] justify-center">
        {[1, 2].map((item) => (
          <div className=" bg-dark h-full w-2 rounded-full" key={item} />
        ))}
      </div>
    </div>
  );
}

import { Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

interface HeaderProps {
  countriesCount: number;
}

export const Header = ({ countriesCount }: HeaderProps) => {
  return (
    <div className="text-center mb-10">
      <Typography.Title level={1} className="mb-4 text-gray-900">
        <GlobalOutlined className="mr-4 text-blue-600" />
        Explorateur de Pays
      </Typography.Title>
      <Typography.Text type="secondary" className="text-lg">
        Découvrez {countriesCount} pays du monde entier
      </Typography.Text>
    </div>
  );
};

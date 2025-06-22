import { Space, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

interface CountryCapitalSectionProps {
  capital: string | null;
}

export const CountryCapitalSection = ({ capital }: CountryCapitalSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-400">
      <Space align="center">
        <EnvironmentOutlined className="text-blue-600 text-xl" />
        <div>
          <Typography.Text className="text-blue-600 text-xs font-bold uppercase tracking-wider block">
            Capitale
          </Typography.Text>
          <Typography.Text strong className="text-gray-900 text-base">
            {capital || "Non disponible"}
          </Typography.Text>
        </div>
      </Space>
    </div>
  );
};

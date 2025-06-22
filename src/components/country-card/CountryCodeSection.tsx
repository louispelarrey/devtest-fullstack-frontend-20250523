import { Space, Typography } from "antd";
import { CodeOutlined } from "@ant-design/icons";

interface CountryCodeSectionProps {
  code: string;
}

export const CountryCodeSection = ({ code }: CountryCodeSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-gray-400">
      <Space align="center">
        <CodeOutlined className="text-gray-600 text-xl" />
        <div>
          <Typography.Text className="text-gray-600 text-xs font-bold uppercase tracking-wider block">
            Code pays
          </Typography.Text>
          <Typography.Text strong className="text-gray-900 text-base">
            {code}
          </Typography.Text>
        </div>
      </Space>
    </div>
  );
};

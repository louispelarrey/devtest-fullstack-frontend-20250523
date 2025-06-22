import { Space, Tag, Typography } from "antd";
import { DollarOutlined } from "@ant-design/icons";

interface CountryCurrencySectionProps {
  currency: string;
}

export const CountryCurrencySection = ({ currency }: CountryCurrencySectionProps) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-4 rounded-xl border-l-4 border-green-400">
      <Space align="center">
        <DollarOutlined className="text-green-600 text-xl" />
        <div>
          <Typography.Text className="text-green-600 text-xs font-bold uppercase tracking-wider block">
            Devise
          </Typography.Text>
          <Typography.Text strong className="text-gray-900 text-base">
            {currency}
          </Typography.Text>
        </div>
      </Space>
    </div>
  );
};

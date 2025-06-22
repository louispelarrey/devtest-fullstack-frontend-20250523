import { DollarOutlined, GlobalOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { Country } from "../../types";

interface CountryCardActionsProps {
  country: Country;
}

export const CountryCardActions = ({ country }: CountryCardActionsProps) => {
  return [
    <Tag
      key="continent"
      color="volcano"
      icon={<GlobalOutlined />}
      className="mx-2 px-3 py-1 text-sm font-medium"
    >
      {country.continent.name}
    </Tag>,
    country.currency && (
      <Tag
        key="currency"
        color="gold"
        icon={<DollarOutlined />}
        className="mx-2 px-3 py-1 text-sm font-medium"
      >
        {country.currency}
      </Tag>
    ),
  ];
};

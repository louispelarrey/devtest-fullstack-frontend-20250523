import {
  FilterOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Select, Space, Typography } from "antd";
import { Continent } from "../../types";

interface FilterSectionProps {
  searchText: string;
  selectedContinent: string | undefined;
  selectedCurrency: string | undefined;
  continents: Continent[];
  currencies: string[];
  isSearchPending?: boolean;
  onSearchTextChange: (value: string) => void;
  onContinentChange: (value: string | undefined) => void;
  onCurrencyChange: (value: string | undefined) => void;
  onClearFilters: () => void;
}

export const FilterSection = ({
  searchText,
  selectedContinent,
  selectedCurrency,
  continents,
  currencies,
  isSearchPending = false,
  onSearchTextChange,
  onContinentChange,
  onCurrencyChange,
  onClearFilters,
}: FilterSectionProps) => {
  return (
    <Card
      className="mb-8 shadow-md"
      title={
        isSearchPending ? (
          <Space>
            <LoadingOutlined className="text-blue-500" />
            <Typography.Text type="secondary">
              Recherche en cours...
            </Typography.Text>
          </Space>
        ) : null
      }
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={8}>
          <Input
            value={searchText}
            placeholder="Rechercher des pays..."
            prefix={
              <SearchOutlined
                className={`${
                  isSearchPending
                    ? "text-blue-500 animate-pulse"
                    : "text-gray-400"
                }`}
              />
            }
            onChange={(e) => onSearchTextChange(e.target.value)}
            allowClear
            onClear={() => onSearchTextChange("")}
            size="large"
            className={`rounded-lg ${isSearchPending ? "border-blue-300" : ""}`}
          />
        </Col>
        <Col xs={24} sm={6}>
          <Select
            value={selectedContinent}
            placeholder="Sélectionner un continent"
            className="w-full"
            onChange={onContinentChange}
            allowClear
            size="large"
          >
            {continents.map((continent) => (
              <Select.Option key={continent.code} value={continent.code}>
                {continent.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={6}>
          <Select
            value={selectedCurrency}
            placeholder="Sélectionner une devise"
            className="w-full"
            onChange={onCurrencyChange}
            allowClear
            showSearch
            size="large"
            filterOption={(input, option) =>
              String(option?.children || "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {currencies.map((currency) => (
              <Select.Option key={currency} value={currency}>
                {currency}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={4}>
          <Button
            icon={<FilterOutlined />}
            onClick={onClearFilters}
            block
            size="large"
            type="default"
            className="rounded-lg"
          >
            Effacer
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

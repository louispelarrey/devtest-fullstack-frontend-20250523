import { Badge, Card, Space } from "antd";
import { Country } from "../../types";
import { CountryCapitalSection } from "./CountryCapitalSection";
import { CountryCardActions } from "./CountryCardActions";
import { CountryCardHeader } from "./CountryCardHeader";
import { CountryCodeSection } from "./CountryCodeSection";
import { CountryCurrencySection } from "./CountryCurrencySection";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Badge.Ribbon text={country.code} color="blue">
      <Card
        hoverable
        className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200"
        cover={<CountryCardHeader country={country} />}
        actions={CountryCardActions({ country })}
      >
        <Space direction="vertical" size="large" className="w-full">
          <CountryCapitalSection capital={country.capital} />

          <div className="grid grid-cols-1 gap-3">
            <CountryCodeSection code={country.code} />

            {country.currency && (
              <CountryCurrencySection currency={country.currency} />
            )}
          </div>
        </Space>
      </Card>
    </Badge.Ribbon>
  );
};

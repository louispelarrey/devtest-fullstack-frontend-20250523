import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";

interface Continent {
  name: string;
}

interface Country {
  name: string;
  code: string;
  capital: string;
  continent: Continent;
}

interface CountriesData {
  countries: Country[];
}

interface CountriesVariables {
  code: string;
}

const COUNTRIES_QUERY = gql`
  query Counties($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      capital
      continent {
        name
      }
    }
  }
`;

export const App: React.FC = () => {
  const continentCode = "EU";
  const { data, loading } = useQuery<CountriesData, CountriesVariables>(
    COUNTRIES_QUERY,
    {
      variables: {
        code: continentCode,
      },
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  const { countries } = data;

  return (
    <Fragment>
      {countries.map((c, i) => (
        <div key={i}>
          {c.name} - {c.capital} - {c.continent.name}
        </div>
      ))}
    </Fragment>
  );
};

import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { COUNTRIES_ROW } from "../../constants";
import { useWindowDimensions } from "../../hooks";
import { Country } from "../../types";
import { getColumnCount } from "../../utils/getColumnCount";
import { CountryCard } from "../country-card";

interface CountriesGridProps {
  countries: Country[];
}

export const CountriesGrid = ({ countries }: CountriesGridProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const columnCount = getColumnCount(width);
  const rowCount = Math.ceil(countries.length / columnCount);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => COUNTRIES_ROW.height + COUNTRIES_ROW.gap,
    gap: COUNTRIES_ROW.gap,
  });

  return (
    <div
      ref={parentRef}
      className="overflow-auto w-full"
      style={{ height: "70dvh" }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const startIndex = virtualRow.index * columnCount;
          const endIndex = Math.min(startIndex + columnCount, countries.length);
          const items = countries.slice(startIndex, endIndex);

          return (
            <div
              key={virtualRow.key}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div
                className="grid p-6 gap-6"
                style={{
                  gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                }}
              >
                {items.map((country) => (
                  <CountryCard key={country.code} country={country} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

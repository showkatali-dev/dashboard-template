import { useState } from "react";

// Table component
const Table = ({ title, filters, data }) => {
  const [dateRangeFilter, setDateRangeFilter] = useState("");
  const [productTypeFilter, setProductTypeFilter] = useState("");

  const filteredData = data.filter(
    (item) =>
      (!dateRangeFilter ||
        (Date.now() - new Date(item.date)) / 86400000 <
          Number(dateRangeFilter)) &&
      (!productTypeFilter || item.productType === productTypeFilter)
  );

  return (
    <div className="p-4 bg-base-100/40 rounded-2xl overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* filter */}
      <div className="flex mb-4">
        {filters.map((filter) => (
          <div key={filter.name} className="mr-4">
            <label className="block text-sm font-medium text-white/50 mb-1">
              {filter.label}
            </label>
            <select
              className="block w-48 px-2 py-1 border-2 border-white/10 rounded-md focus:outline-none focus:ring-white/50 focus:border-white/60 bg-base-100/50"
              value={
                filter.name === "dateRange"
                  ? dateRangeFilter
                  : productTypeFilter
              }
              onChange={(e) =>
                filter.name === "dateRange"
                  ? setDateRangeFilter(e.target.value)
                  : setProductTypeFilter(e.target.value)
              }
            >
              <option value="">All</option>
              {filter.options.map((option) => (
                <option key={option} value={option.split(" ")[1]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* table */}
      <table className="min-w-full border border-gray-300 overflow-x-auto">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.date}>
              <td className="py-2 px-4 border-b">{item.date}</td>
              <td className="py-2 px-4 border-b">{item.product}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">{item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

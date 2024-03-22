import useCoffeeStore from "@/store/useCoffeeStore";
import { Checkbox } from "../ui/checkbox";

export function FilterItem({
  filterItem,
  id,
  filterFor,
}: {
  filterItem: string;
  id: string;
  filterFor: "roast" | "intensity";
}): React.JSX.Element {
  const { filters, setFilters } = useCoffeeStore();

  return (
    <div className="mb-3 flex items-center">
      <Checkbox
        id={id}
        checked={filters[filterFor]?.includes(filterItem)}
        onCheckedChange={(checked) => {
          if (checked) {
            setFilters({
              ...filters,
              [filterFor]: [...(filters[filterFor] || []), filterItem],
            });
          } else {
            setFilters({
              ...filters,
              [filterFor]: (filters[filterFor] || []).filter(
                (i) => i !== filterItem
              ),
            });
          }
        }}
      />
      <label
        htmlFor={id}
        className="ml-3 cursor-pointer font-medium text-gray-700 hover:text-gray-500"
      >
        {filterItem}
      </label>
    </div>
  );
}

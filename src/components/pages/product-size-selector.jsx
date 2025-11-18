import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SizeChartSheet } from "./size-chart-sheet";

export function ProductSizeSelector({ product }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium">Size</p>
        <SizeChartSheet />
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose Your Size" />
        </SelectTrigger>
        <SelectContent>
          {product.sizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Button } from "../ui/button";
import { Coffee } from "@/interfaces/Coffee";

export default function ProductOptions({ coffee }: { coffee?: Coffee }) {
  return (
    <div className="flex w-full flex-col gap-y-12 py-8 sm:sticky sm:top-48 sm:max-w-[300px] sm:py-0">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium">Select Size</p>
            <Select>
              <SelectTrigger className="rounded-md border" id="color">
                <SelectValue placeholder="250g" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="250g">250g</SelectItem>
                <SelectItem value="500g">500g</SelectItem>
                <SelectItem value="1k">1k</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Whole Bean or Ground?</p>
            <Select>
              <SelectTrigger className="rounded-md border" id="color">
                <SelectValue placeholder="Whole Bean" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="whole">Whole Bean</SelectItem>
                <SelectItem value="ground">Fine Grind</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-2xl font-semibold">${coffee?.price}</p>
          </div>
          <Button className="mt-4 py-5 font-sans text-sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

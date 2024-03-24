import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Coffee } from "@/interfaces/Coffee";
import { capitalize } from "@/utils/Capitalize";

export default function ProductInfo({ coffee }: { coffee?: Coffee }) {
  return (
    <div className="flex w-full flex-col gap-y-6 py-10 sm:sticky sm:top-48 sm:max-w-[300px] sm:py-0">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-[500px]">
        <p className="text-medium hover:text-ui-fg-subtle text-gray-400">
          {capitalize(coffee?.roast || "")} Roast
        </p>
        <h1 className="text-3xl font-semibold">{coffee?.name}</h1>
        <p className="leading-6 text-gray-500">{coffee?.description}</p>

        <Accordion
          type="single"
          collapsible
          className="mt-4 border-t border-gray-200"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-sans">
              Product Information
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Our {coffee?.name.toLowerCase()} is a {coffee?.roast} roast
                coffee that is {coffee?.intensity} intensity.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-sans">
              Shipping & Returns
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Fast delivery Your package will arrive in 3-5 business days at
                your pick up location or in the comfort of your home.
              </p>
              <br />
              <p>
                Easy returns Just return your product and we will refund your
                money. No questions asked – we will do our best to make sure
                your return is hassle-free.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

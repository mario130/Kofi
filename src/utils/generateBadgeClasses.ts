import { cn } from "@/lib/utils";

export const generateBadgeClasses = (type: string) => {
  let bgColor = "";
  switch (type) {
    case "mild":
    case "light":
      bgColor = "bg-secondary";
      break;
    case "medium":
      bgColor = "bg-[#c6cfd7]";
      break;
    case "bold":
    case "dark":
      bgColor = "bg-black text-white";
      break;
  }
  return cn("h-5 font-sans text-black", bgColor);
};
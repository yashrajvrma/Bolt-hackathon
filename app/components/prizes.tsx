import { Card } from "../components/ui/card";
import { Plus } from "lucide-react";

export default function Prize() {
  return (
    <div className="flex flex-col mt-40 bg-black items-center justify-center font-sans mb-44  sm:max-w-5xl">
      <div className="flex flex-row items-center align-middle sm:text-7xl text-6xl font-medium text-neutral-200 tracking-tight mb-16 ">
        $1M
        <span>
          <Plus
            className="mr-4 sm:mr-6 w-6 h-6 sm:w-11 sm:h-11"
            strokeWidth={2}
          />
        </span>
        Prizes
      </div>
      <div className="w-full md:min-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-0">
          <Card
            title="Grand Prize"
            amount="$100k"
            className="py-7 sm:px-16 px-1 flex items-center justify-center"
          />

          <Card
            title="AI Innovation"
            amount="$500k"
            className="py-7 sm:px-16 px-1 flex items-center justify-center"
          />

          <Card
            title="Social Impact"
            amount="$400k"
            className="py-7 sm:px-16 px-1 flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}

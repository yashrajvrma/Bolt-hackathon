import { Card } from "../components/ui/card";
import { Plus } from "lucide-react";

export default function Prize() {
  return (
    <div className="flex flex-col mt-40 bg-black items-center justify-center font-sans mb-44">
      <div className="flex flex-row items-center align-middle text-7xl font-medium text-neutral-200 tracking-tight mb-16 ">
        $1,000,000
        <span>
          <Plus size={44} strokeWidth={2} className="mr-6" />
        </span>
        Prizes
      </div>
      <div className="w-full sm:min-w-7xl min-w-1xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20">
          <Card
            title="Grand Prize"
            amount="$100k"
            className="py-7 px-16 flex items-center justify-center"
          />

          <Card
            title="AI Innovation"
            amount="$500k"
            className="py-7 px-16 flex items-center justify-center"
          />

          <Card
            title="Social Impact"
            amount="$400k"
            className="py-7 px-16 flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}

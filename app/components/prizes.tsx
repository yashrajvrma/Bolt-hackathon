import { Card } from "../components/ui/card";
import { Plus } from "lucide-react";

export default function Prize() {
  return (
    <div className="flex flex-col sm:mt-40 mt-20 bg-black items-center justify-center font-sans mb-44  sm:max-w-5xl">
      <div
        className="flex flex-row items-center align-middle sm:text-7xl  text-center text-5xl font-semibold tracking-tighter sm:mb-16 mb-10 bg-gradient-to-r text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        }}
      >
        $1M Cash Pool
      </div>

      <div className="w-full md:min-w-7xl max-w-[280px] ">
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

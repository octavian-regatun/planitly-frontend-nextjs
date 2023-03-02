import Text from "../components/Text";
import Calendar from "./Calendar/Calendar";

export default function DashboardContent() {
  return (
    <>
      <div className="col-span-8">
        <Text type="h3" className="text-white">
          Dashboard
        </Text>
        <div className="flex gap-12">
          <Text type="h4" className="text-gray-200 mt-8">
            General
          </Text>
          <Text type="h4" className="text-gray-200 mt-8">
            Custom
          </Text>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center ml-8 h-full">
        <Calendar/>
      </div>
    </>
  );
}

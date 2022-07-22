import Text from "../components/Text";

export default function DashboardContent() {
  return (
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
      <div className="grid grid-cols-6 my-8 gap-8">
        <div className="col-span-1 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-1 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-2 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-2 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-2 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-1 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-2 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
        <div className="col-span-1 h-36 rounded-2xl bg-gradient-to-r drop-shadow-xl p-4 from-yellow-600 to-red-600 flex justify-center items-center text-white">
          <Text type="h4">dashboard card</Text>
        </div>
      </div>
    </div>
  );
}

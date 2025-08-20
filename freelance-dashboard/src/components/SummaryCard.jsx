export default function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow rounded p-5 flex items-center space-x-4">
      <div className="text-blue-600 text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

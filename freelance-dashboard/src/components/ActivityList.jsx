export default function ActivityList({ activities }) {
  return (
    <div className="bg-white shadow rounded p-5">
      <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
      <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
        {activities.map(({ id, desc, time }) => (
          <li key={id} className="py-2 text-gray-700">
            <p>{desc}</p>
            <small className="text-gray-400">{time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

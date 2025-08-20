export default function ProjectTable({ projects }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded p-5">
      <h3 className="text-lg font-semibold mb-3">Client Projects</h3>
      <table className="w-full text-left table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-3 py-2">Project Name</th>
            <th className="border border-gray-300 px-3 py-2">Status</th>
            <th className="border border-gray-300 px-3 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ id, name, status, deadline }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">{name}</td>
              <td className="border border-gray-300 px-3 py-2">
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold ${
                    status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : status === "In Progress"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {status}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2">{deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

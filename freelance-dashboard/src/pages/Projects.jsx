import React from "react";

const projects = [
  { id: 1, name: "Marketing Website", status: "In Progress", deadline: "2025-09-15" },
  { id: 2, name: "Mobile App", status: "Review", deadline: "2025-09-05" },
  { id: 3, name: "E-commerce Revamp", status: "Completed", deadline: "2025-08-10" },
  { id: 4, name: "Analytics Dashboard", status: "Pending", deadline: "2025-09-30" },
];

const badge = (status) => {
  const map = {
    "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    Review: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
    Completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
    Pending: "bg-zinc-100 text-zinc-700 dark:bg-zinc-700/40 dark:text-zinc-200",
  };
  return map[status] || "bg-zinc-100 text-zinc-700 dark:bg-zinc-700/40 dark:text-zinc-200";
};

export default function Projects() {
  return (
    <main className="p-4 sm:p-6 lg:p-8 w-full">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          + New Project
        </button>
      </header>

      <div className="rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm sm:text-base">
            <thead className="bg-zinc-50 dark:bg-zinc-800/60 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 font-semibold">Project</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Status</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-t border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition ${
                    i % 2 === 0 ? "bg-white dark:bg-zinc-900" : "bg-zinc-50/60 dark:bg-zinc-900"
                  }`}
                >
                  <td className="px-4 sm:px-6 py-3">{p.name}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs sm:text-sm ${badge(p.status)}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3">{p.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

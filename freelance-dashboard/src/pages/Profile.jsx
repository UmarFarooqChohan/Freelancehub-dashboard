import { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Umar Farooq",
    email: "umar.farooq1592@gmail.com",
    password: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Profile saved (mock)!");
  }

  return (
    <main className="p-6 md:ml-64 mt-20 max-w-xl mx-auto">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Profile Settings
      </h2>

      {/* Profile Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-zinc-700"
      >
        {/* Name */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 px-4 py-2.5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 px-4 py-2.5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Password */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 px-4 py-2.5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}

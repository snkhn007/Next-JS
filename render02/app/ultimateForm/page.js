"use client";
import React, { useActionState } from "react";
import courseData from "./action";
export default function City() {
  const [course, actionForm, isPending] = useActionState(courseData, null);
  const skillsList = [
    { id: "python", label: "Python", value: "Python" },
    { id: "java", label: "Java", value: "JAVA" },
    { id: "cpp", label: "C++", value: "C++" },
    { id: "sql", label: "SQL", value: "SQL" },
  ];
  const cities = [
    "Jalandhar",
    "Bareilly",
    "Haldwani",
    "Gwalior",
    "Phagwara",
    "Shivpuri",
    "Rudrapur",
  ];
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Course Registration
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Fill in your details, pick your target courses, and select your preferred city.
          </p>
        </div>

        <form action={actionForm} className="space-y-6">
          {/* Personal Details Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Personal Information
            </h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-1">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  min="1"
                  placeholder="e.g. 21"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 9876543210"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Street name, area"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Courses Section */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Courses
            </label>
            <div className="grid grid-cols-2 gap-3">
              {skillsList.map((skill) => (
                <label
                  key={skill.id}
                  htmlFor={skill.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <input
                    id={skill.id}
                    type="checkbox"
                    name="skills"
                    value={skill.value}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {skill.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* City Selection */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
              Select City
            </label>
            <div className="relative">
              <select
                id="city"
                name="city"
                defaultValue=""
                className="w-full appearance-none px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              >
                <option value="" disabled>
                  Choose a location
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
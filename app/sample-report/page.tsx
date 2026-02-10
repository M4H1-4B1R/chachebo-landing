import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReportNavigation } from "@/components/sample-report/ReportNavigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, FileCheck, CircleAlert } from "lucide-react";
import Image from "next/image";

export default function SampleReportPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Header />

      {/* Main Content - Sample Report */}
      <section className="py-24 bg-[#E2E1DB] overflow-hidden mt-16">
        <div className="container max-w-6xl">
          <div className="flex gap-6 items-start">
            {/* Sidebar Navigation */}
            <ReportNavigation />

            {/* Report Content */}
            <div className="flex-1 max-w-4xl">
              {/* Sample Report Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header Section */}
                <div
                  id="report-summary"
                  className="p-8 border-b border-gray-200 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Vehicle Information */}
                    <div className="pr-0 md:pr-8">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">
                        VEHICLE INFORMATION
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Make & Model
                          </p>
                          <p className="text-xl font-bold text-[#1A1A1A]">
                            BYD Seal 2023
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Year</p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            2023
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Engine Type
                          </p>
                          <p className="text-sm text-gray-500">Electric (EV)</p>
                        </div>
                      </div>
                    </div>

                    {/* VIN & Meta */}
                    <div className="pt-8 md:pt-0 pl-0 md:pl-8 pr-0 md:pr-8">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">
                        VIN & META
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            VIN Number
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A] break-all">
                            LGXC16DB8PA123456
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Generated Date
                          </p>
                          <p className="text-sm text-gray-500">
                            February 2, 2024
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Report ID
                          </p>
                          <p className="text-sm text-gray-500">
                            #RPT-2024-0145
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">
                        RISK ASSESSMENT
                      </h3>
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <p className="text-sm text-gray-500">
                            Overall Risk Score
                          </p>
                          <p className="text-2xl font-bold text-[#1A1A1A]">
                            78/100
                          </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                          <div
                            className="h-full bg-[#FF7A00] rounded-full"
                            style={{ width: "78%" }}
                          ></div>
                        </div>

                        <div className="inline-flex flex-col items-center justify-center w-32 border-2 border-[#FF7A00] rounded-lg py-4">
                          <p className="text-xs font-bold text-gray-500 mb-1">
                            Risk Grade
                          </p>
                          <p className="text-4xl font-bold text-[#FF7A00]">
                            B+
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Overview Section */}
                <div id="vehicle-overview" className="bg-white scroll-mt-28">
                  <div className="bg-[#FF7A00] text-white px-8 py-3">
                    <h2 className="font-bold text-lg">VEHICLE OVERVIEW</h2>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Make:</span>
                        <p className="font-semibold text-black">Audi</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Model:</span>
                        <p className="font-semibold text-black">
                          A8 L 55 TFSI Quattro
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Odometer:</span>
                        <p className="font-semibold text-black">45,230 km</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Registration:</span>
                        <p className="font-semibold text-black">
                          Beijing (京A)
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Color:</span>
                        <p className="font-semibold text-black">Mythos Black</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Inspection:</span>
                        <p className="font-semibold text-black">Dec 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overall Evaluation Section */}
                <div
                  id="overall-evaluation"
                  className="bg-gray-50 scroll-mt-28"
                >
                  <div className="bg-[#FF7A00] text-white px-8 py-4">
                    <h2 className="font-bold text-xl">Overall Evaluation</h2>
                  </div>
                  <div className="p-8">
                    {/* Good Condition Badge */}
                    <div className="flex items-start gap-4 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                          Good Condition Vehicle
                        </h3>
                        <p className="text-sm text-gray-500">
                          This vehicle shows no major structural damage and has
                          a clean maintenance record. Minor cosmetic repairs
                          were performed in 2023.
                        </p>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    {/* Key Findings */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                        Key Findings
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FF7A00] shrink-0" />
                          <span className="text-sm text-gray-500">
                            No structural damage detected in frame or chassis
                            inspection
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FF7A00] shrink-0" />
                          <span className="text-sm text-gray-500">
                            Mileage records are consistent across all data
                            sources
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FF7A00] shrink-0" />
                          <span className="text-sm text-gray-500">
                            One minor accident reported in 2023 (rear bumper
                            replacement)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FF7A00] shrink-0" />
                          <span className="text-sm text-gray-500">
                            Regular maintenance schedule followed according to
                            manufacturer guidelines
                          </span>
                        </li>
                      </ul>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    {/* Recommendation */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                        Recommendation
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        This vehicle is suitable for import with minimal risk.
                        We recommend a physical inspection to verify current
                        condition before finalizing purchase.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 border border-green-200 bg-green-50 rounded-full px-4 py-1.5">
                        <CheckCircle2 className="h-4 w-4" />
                        Approved for Import
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vehicle Identity Section */}
                <div id="vehicle-identity" className="bg-white scroll-mt-28">
                  <div className="bg-[#FF7A00] text-white px-8 py-4">
                    <h2 className="font-bold text-xl">Vehicle Identity</h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Attribute Table */}
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Attribute
                            </th>
                            <th className="text-left py-3 font-semibold text-gray-900">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">Make</td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              BYD
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">Model</td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              Seal
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">Year</td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              2023
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">Engine</td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              Electric Motor (230kW)
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Body Type
                            </td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              4-Door Sedan
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Manufacturing Plant
                            </td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              Shenzhen, Guangdong
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">VIN</td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              LGXC16DB8PA123456
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 pr-4 text-gray-500">
                              Market Version
                            </td>
                            <td className="py-3 font-bold text-[#1A1A1A]">
                              China Domestic
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Vehicle Image */}
                      <div className="flex items-center justify-center">
                        <Image
                          src="/sample-report-sedan.png"
                          alt="BYD Seal 2023"
                          width={400}
                          height={250}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body & Structural Check Section */}
                <div id="body-structural" className="bg-gray-50 scroll-mt-28">
                  <div className="bg-[#FF7A00] text-white px-8 py-4">
                    <h2 className="font-bold text-xl">
                      Body & Structural Check
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Component Table */}
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Component
                            </th>
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Status
                            </th>
                            <th className="text-left py-3 font-semibold text-gray-900">
                              Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Front Frame
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              No damage detected
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Rear Frame
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-[#FF7A00] border border-orange-300 bg-orange-50 rounded px-2 py-0.5">
                                Minor Repair
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              Bumper replaced 2023
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Left Side Panel
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              Original condition
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Right Side Panel
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              Original condition
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Roof Structure
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              No damage detected
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Chassis Integrity
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              Structurally sound
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-500">
                              Floor Pan
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              No rust or damage
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 pr-4 text-gray-500">
                              Suspension Mounts
                            </td>
                            <td className="py-3 pr-4">
                              <span className="inline-block text-xs font-semibold text-green-600 border border-green-300 bg-green-50 rounded px-2 py-0.5">
                                Normal
                              </span>
                            </td>
                            <td className="py-3 text-gray-500">
                              Factory condition
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Structural Diagram */}
                      <div className="flex items-center justify-center">
                        <Image
                          src="/sample-report-diagram.png"
                          alt="Vehicle structural diagram"
                          width={400}
                          height={300}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accident & Damage Records Section */}
                <div id="accident-records" className="bg-white scroll-mt-28">
                  <div className="bg-[#FF7A00] text-white px-8 py-4">
                    <h2 className="font-bold text-xl">
                      Accident & Damage Records
                    </h2>
                  </div>
                  <div className="p-8 space-y-6">
                    {/* Incident Timeline Entry */}
                    <div className="relative pl-6">
                      {/* Timeline dot */}
                      <span className="absolute left-0 top-3 h-3 w-3 rounded-full bg-[#FF7A00]" />

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        {/* Incident Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">
                              Incident Date
                            </p>
                            <p className="text-lg font-bold text-[#1A1A1A]">
                              March 15, 2023
                            </p>
                          </div>
                          <span className="text-xs font-semibold text-[#FF7A00] border border-orange-300 bg-orange-50 rounded-full px-3 py-1">
                            Minor
                          </span>
                        </div>

                        {/* Incident Details */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">
                              Incident Type
                            </p>
                            <p className="text-sm font-bold text-[#1A1A1A]">
                              Rear-end collision
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">
                              Affected Area
                            </p>
                            <p className="text-sm font-bold text-[#1A1A1A]">
                              Rear bumper
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs text-gray-400 mb-0.5">
                            Data Source
                          </p>
                          <p className="text-sm text-gray-500">
                            Traffic Police Report #SZ-2023-04521
                          </p>
                        </div>

                        <hr className="border-gray-200 mb-4" />

                        <p className="text-sm text-gray-400">
                          Rear bumper cover replaced. No structural damage to
                          frame or safety systems. Repairs completed at
                          authorized service center.
                        </p>
                      </div>
                    </div>

                    {/* No Additional Accidents */}
                    <div className="relative pl-6">
                      {/* Timeline dot */}
                      <span className="absolute left-0 top-5 h-3 w-3 rounded-full bg-green-500" />

                      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center gap-3 mb-1">
                          <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                          <h3 className="text-base font-bold text-[#1A1A1A]">
                            No Additional Accidents Reported
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 ml-9">
                          Vehicle has a clean record except for the minor
                          incident listed above.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mileage Records Section */}
                <div id="mileage-records" className="bg-gray-50 scroll-mt-28">
                  <div className="bg-[#FF7A00] text-white px-8 py-4">
                    <h2 className="font-bold text-xl">Mileage Records</h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Mileage Table */}
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Record Date
                            </th>
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Mileage (km)
                            </th>
                            <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                              Source
                            </th>
                            <th className="text-left py-3 font-semibold text-gray-900">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              date: "Jan 2023",
                              km: "50",
                              source: "Registration",
                            },
                            {
                              date: "Mar 2023",
                              km: "3,280",
                              source: "Service Record",
                            },
                            {
                              date: "Jun 2023",
                              km: "8,150",
                              source: "Service Record",
                            },
                            {
                              date: "Sep 2023",
                              km: "12,920",
                              source: "Inspection",
                            },
                            {
                              date: "Dec 2023",
                              km: "17,540",
                              source: "Service Record",
                            },
                            {
                              date: "Jan 2024",
                              km: "18,650",
                              source: "Current Reading",
                            },
                          ].map((row, i) => (
                            <tr
                              key={i}
                              className={
                                i < 5 ? "border-b border-gray-100" : ""
                              }
                            >
                              <td className="py-3 pr-4 text-gray-500">
                                {row.date}
                              </td>
                              <td className="py-3 pr-4 font-bold text-[#1A1A1A]">
                                {row.km}
                              </td>
                              <td className="py-3 pr-4 text-gray-500">
                                {row.source}
                              </td>
                              <td className="py-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Mileage Chart (SVG) */}
                      <div className="flex items-center justify-center">
                        <svg
                          viewBox="0 0 300 200"
                          className="w-full h-auto"
                          aria-label="Mileage trend chart showing consistent increase from 50 km to 18,650 km"
                        >
                          {/* Grid lines */}
                          <line
                            x1="40"
                            y1="170"
                            x2="280"
                            y2="170"
                            stroke="#e5e7eb"
                            strokeWidth="1"
                          />
                          <line
                            x1="40"
                            y1="128"
                            x2="280"
                            y2="128"
                            stroke="#f3f4f6"
                            strokeWidth="0.5"
                          />
                          <line
                            x1="40"
                            y1="86"
                            x2="280"
                            y2="86"
                            stroke="#f3f4f6"
                            strokeWidth="0.5"
                          />
                          <line
                            x1="40"
                            y1="44"
                            x2="280"
                            y2="44"
                            stroke="#f3f4f6"
                            strokeWidth="0.5"
                          />

                          {/* Y-axis labels */}
                          <text
                            x="35"
                            y="174"
                            textAnchor="end"
                            className="text-[9px] fill-gray-400"
                          >
                            0
                          </text>
                          <text
                            x="35"
                            y="132"
                            textAnchor="end"
                            className="text-[9px] fill-gray-400"
                          >
                            6k
                          </text>
                          <text
                            x="35"
                            y="90"
                            textAnchor="end"
                            className="text-[9px] fill-gray-400"
                          >
                            12k
                          </text>
                          <text
                            x="35"
                            y="48"
                            textAnchor="end"
                            className="text-[9px] fill-gray-400"
                          >
                            18k
                          </text>

                          {/* Line path - data points:
                            Jan 2023: 50 -> (48, 169.6)
                            Mar 2023: 3280 -> (96, 146.7)
                            Jun 2023: 8150 -> (144, 112.4)
                            Sep 2023: 12920 -> (192, 78.7)
                            Dec 2023: 17540 -> (240, 46.1)
                            Jan 2024: 18650 -> (272, 38.3)
                          */}
                          <polyline
                            points="48,169.6 96,146.7 144,112.4 192,78.7 240,46.1 272,38.3"
                            fill="none"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />

                          {/* Data points */}
                          <circle cx="48" cy="169.6" r="4" fill="#FF7A00" />
                          <circle cx="96" cy="146.7" r="4" fill="#FF7A00" />
                          <circle cx="144" cy="112.4" r="4" fill="#FF7A00" />
                          <circle cx="192" cy="78.7" r="4" fill="#FF7A00" />
                          <circle cx="240" cy="46.1" r="4" fill="#FF7A00" />
                          <circle cx="272" cy="38.3" r="4" fill="#FF7A00" />
                        </svg>
                      </div>
                    </div>

                    {/* Verification Badge */}
                    <div className="mt-6 bg-green-50 rounded-xl px-6 py-4 border border-green-100 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <p className="text-sm font-semibold text-green-700">
                        Mileage Verified – No Anomalies Detected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance history section */}
              <div id="maintenance-history" className="bg-white scroll-mt-28">
                <div className="bg-[#FF7A00] text-white px-8 py-4">
                  <h2 className="font-bold text-xl">Maintenance History</h2>
                </div>
                <div className="p-8 space-y-6">
                  {/* wrapper box */}
                  <div className="relative pl-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Date
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            December 18, 2023
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#1a1a1a]  bg-gray-200 rounded-full px-3 py-1">
                          Regular Service
                        </span>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Type
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            10,000 KM Maintenance
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Provider
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            BYD Authorized Center - Shenzen
                          </p>
                        </div>
                      </div>

                      <hr className="border-gray-200 mb-4" />

                      <p className="text-sm text-gray-400">
                        Batter health check, brake inspection, tire rotation,
                        software update, coolant level check.
                      </p>
                    </div>
                  </div>

                  {/* wrapper box */}
                  <div className="relative pl-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Date
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            September 5, 2023
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#1a1a1a]  bg-gray-200 rounded-full px-3 py-1">
                          Annual Inspection
                        </span>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Type
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            Safety Inspection
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Provider
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            Guangdong Vehicle Inspection Station
                          </p>
                        </div>
                      </div>

                      <hr className="border-gray-200 mb-4" />

                      <p className="text-sm text-gray-400">
                        Annual safety inspection passed. All systems
                        operational. Emissions compliant (EV).
                      </p>
                    </div>
                  </div>

                  {/* wrapper box */}
                  <div className="relative pl-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Date
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            June 22, 2023
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#1a1a1a]  bg-gray-200 rounded-full px-3 py-1">
                          Regular Service
                        </span>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Type
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            5000 km Maintenance
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Provider
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            BYD Authorized Center - Shenzen
                          </p>
                        </div>
                      </div>

                      <hr className="border-gray-200 mb-4" />

                      <p className="text-sm text-gray-400">
                        Battery system check. HVAC service, break fluid
                        inspection, tire pressure adjustment.
                      </p>
                    </div>
                  </div>

                  {/* wrapper box */}
                  <div className="relative pl-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Date
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            March 20, 2023
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#FF7A00] border border-orange-300 bg-orange-50 rounded-full px-3 py-1">
                          Repair
                        </span>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Type
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            Accident Repair
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Service Provider
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            BYD Authorized Body Shop
                          </p>
                        </div>
                      </div>

                      <hr className="border-gray-200 mb-4" />

                      <p className="text-sm text-gray-400">
                        Battery system check. HVAC service, break fluid
                        inspection, tire pressure adjustment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance claims section */}
              <div id="insurance-claims" className="bg-white scroll-mt-28">
                <div className="bg-[#FF7A00] text-white px-8 py-4">
                  <h2 className="font-bold text-xl">Insurance Claims</h2>
                </div>
                <div className="flex p-8">
                  {/* wrapper box */}
                  <div className="relative pl-6 flex-1">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-xs font-semibold text-[#1a1a1a]  bg-gray-200 rounded-full px-3 py-1">
                            Property Damage
                          </span>
                          <p className="text-xs text-gray-400 mb-0.5 mt-5">
                            Claim Date
                          </p>
                          <p className="text-lg font-bold text-[#1A1A1A]">
                            March 16, 2023
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#FF7A00] border border-orange-300 bg-orange-50 rounded-full px-3 py-1">
                          Settled
                        </span>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Claim Type
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            Vehicle Damage
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Damage Category
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            Rear Bumper Damage
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            Insurance Provider
                          </p>
                          <p className="text-sm font-bold text-[#1A1A1A]">
                            PICC Property & Casualty
                          </p>
                        </div>
                      </div>

                      <hr className="border-gray-200 mb-4" />

                      <p className="text-sm text-gray-400">
                        Claim processed and settled within 15 days. Full repair
                        coverage provided. No deductible applied.
                      </p>
                    </div>
                  </div>

                  {/* wrapper box */}
                  <div className="relative pl-6 flex-1">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-full flex flex-col justify-center items-center">
                      <CircleAlert className="w-20 h-20 text-green-400 mb-4 bg-green-200/40 rounded-full p-3 animate-pulse" />
                      <h2 className="text-[#1a1a1a] font-bold text-center capitalize text-lg text-nowrap">
                        Clean Insurance Record
                      </h2>
                      <p className="text-[#1a1a1a] text-center text-md">
                        Only one minor claim filed since purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Footer Section */}
              <div className="mt-12 bg-[#1A1A1A] rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to check your vehicle?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get instant access to comprehensive vehicle history, hidden
                  risks, and verified data from Chinese automotive databases.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                  <input
                    type="text"
                    placeholder="Enter VIN number..."
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
                  />
                  <Button
                    size="lg"
                    className="bg-[#FF7A00] hover:bg-[#FF8A1A] text-white px-8 rounded-lg"
                  >
                    Check Now
                  </Button>
                </div>
                <div className="flex justify-center items-center gap-8 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Instant Report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-green-500" />
                    <span>Verified Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../../store/slices/leadSlice";






function LeadList() {

    const dispatch = useDispatch();

    const {
        leads,
        loading,
        error,
    } = useSelector((state) => state.leads);

    useEffect(() => {
        dispatch(fetchLeads());
    }, [dispatch]);

    return (
        <div className="space-y-6">

            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Lead Management
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage and track your business leads.
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    + Add Lead
                </button>
            </div>

            {/* Filters */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                    {/* Search */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Search
                        </label>

                        <input
                            type="text"
                            placeholder="Search lead..."
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Status
                        </label>

                        <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500">
                            <option value="">All Status</option>
                            <option value="NEW">New</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="FOLLOW_UP">Follow Up</option>
                            <option value="QUALIFIED">Qualified</option>
                            <option value="PROPOSAL">Proposal</option>
                            <option value="NEGOTIATION">Negotiation</option>
                            <option value="WON">Won</option>
                            <option value="LOST">Lost</option>
                        </select>
                    </div>

                    {/* Source */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Lead Source
                        </label>

                        <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500">
                            <option value="">All Sources</option>
                            <option value="WEBSITE">Website</option>
                            <option value="PHONE">Phone Call</option>
                            <option value="WHATSAPP">WhatsApp</option>
                            <option value="REFERRAL">Referral</option>
                            <option value="FIELD_VISIT">Field Visit</option>
                            <option value="ADVERTISEMENT">Advertisement</option>
                            <option value="WALK_IN">Walk-in</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>

                    {/* Branch */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Branch
                        </label>

                        <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500">
                            <option value="">All Branches</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* Lead Table */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">

                        <thead className="border-b border-slate-200 bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-slate-600">
                                    Lead
                                </th>

                                <th className="px-4 py-3 font-semibold text-slate-600">
                                    Mobile
                                </th>

                                <th className="px-4 py-3 font-semibold text-slate-600">
                                    Requirement
                                </th>

                                <th className="px-4 py-3 font-semibold text-slate-600">
                                    Source
                                </th>

                                <th className="px-4 py-3 font-semibold text-slate-600">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-right font-semibold text-slate-600">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-4 py-12 text-center text-slate-500"
                                    >
                                        Loading leads...
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-4 py-12 text-center text-red-500"
                                    >
                                        {error}
                                    </td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-4 py-12 text-center text-slate-500"
                                    >
                                        No leads found.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="border-b border-slate-100">
                                        <td className="px-4 py-3">
                                            {lead.lead_name}
                                        </td>

                                        <td className="px-4 py-3">
                                            {lead.phone}
                                        </td>

                                        <td className="px-4 py-3">
                                            {lead.requirement_name || "-"}
                                        </td>

                                        <td className="px-4 py-3">
                                            {lead.source}
                                        </td>

                                        <td className="px-4 py-3">
                                            {lead.status}
                                        </td>

                                        <td className="px-4 py-3 text-right">
                                            View
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}

export default LeadList;
"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Layout, BarChart2, Target, ThumbsUp, User } from 'lucide-react';

const data = [
  { location: 'Mathare', percentage: 60 },
  { location: 'Dandora', percentage: 50 },
  { location: 'Kibera', percentage: 40 },
  { location: 'Mukuru', percentage: 30 },
  { location: 'Korogocho', percentage: 25 },
];

const MetricCard = ({ value, label }) => (
  <div className="border rounded-lg p-2 text-center">
    <div className="text-2xl font-bold text-teal-600">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);

const Dashboard = () => (
  <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-64 bg-teal-600 text-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">LANDVISTA</h1>
        <div className="mt-2">
          <Layout className="w-10 h-10 text-white" />
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <BarChart2 className="w-5 h-5 text-white" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-white" />
            <span>Data Accuracy</span>
          </li>
          <li className="flex items-center space-x-2">
            <ThumbsUp className="w-5 h-5 text-white" />
            <span>User Feedback</span>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5 text-white" />
          <span>Profile</span>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-4 text-black" >Dashboard</h2>
      <h3 className="text-lg mb-4 text-black">Wards with the leading floods probability in Nairobi</h3>

      <div className="flex space-x-4 mb-4">
        <div className="w-2/3 bg-white p-4 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" label={{ value: 'Location', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Risk in percentage', angle: -90, position: 'insideLeft' }} />
              <Bar dataKey="percentage" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/3 bg-white p-4 rounded-lg shadow">
          <h4 className="font-bold mb-2 text-black">Overview</h4>
          <p className="text-sm text-black">
            The dashboard offers a clear view of key metrics: total downloads, reflecting the application's adoption
            rate; shares, indicating how often users recommend or distribute the app; and user feedback, summarized
            through ratings and comments.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">Filter metrics by:</h4>
        <div className="flex space-x-2">
          <button className="bg-orange-300 px-4 py-2 rounded">Daily</button>
          <button className="bg-orange-300 px-4 py-2 rounded">Weekly</button>
          <button className="bg-orange-300 px-4 py-2 rounded">Monthly</button>
        </div>
      </div>

      <div className="flex space-x-4">
        <MetricCard value="100" label="Downloads" />
        <MetricCard value="150" label="Shares" />
        <MetricCard value="300" label="Search success rate" />
      </div>
    </div>
  </div>
);

export default Dashboard;
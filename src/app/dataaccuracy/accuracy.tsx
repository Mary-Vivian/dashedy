"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', accuracy: 20 },
  { month: 'Feb', accuracy: 30 },
  { month: 'Mar', accuracy: 35 },
  { month: 'Apr', accuracy: 55 },
  { month: 'May', accuracy: 75 },
];

const DataAccuracyDashboard = () => (
  <div className="flex flex-col h-screen bg-white p-8">
    <h1 className="text-3xl font-bold mb-4">Data Accuracy</h1>
    <h2 className="text-xl mb-8">Accuracy of the Machine Learning Model Over time</h2>

    <div className="flex flex-1">
      <div className="w-2/3 pr-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis label={{ value: 'Accuracy in Percentage', angle: -90, position: 'insideLeft' }} />
            <Bar dataKey="accuracy" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-1/3 flex flex-col justify-between">
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-2 text-black">Model Accuracy</h3>
          <p className="text-5xl font-bold text-orange-500 mb-2 text-black">75%</p>
          <p className="text-sm text-black">Highest model accuracy:</p>
          <p className="text-sm text-black">Month: September</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="text-sm text-black">
            The chart illustrates the model's accuracy over a series of months, 
            showcasing a clear trend in performance improvement. Initially, the 
            accuracy percentage starts at a lower value, indicating that the model 
            may have struggled to make precise predictions. However, as the 
            months progress, a steady upward trajectory is observed, reflecting 
            enhancements in the model's training, data quality, and algorithm 
            adjustments.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DataAccuracyDashboard;
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import {
  Users, Glasses, Activity, MapPin, Calendar
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
        activeTab === id
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-600 hover:bg-blue-100'
      }`}
    >
      {label}
    </button>
  );

  const MetricCard = ({ metric, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-4 shadow-md flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-xs">{metric}</p>
        <p className="text-lg font-bold text-gray-800">{value}</p>
      </div>
      <div className={`${color} p-2 rounded-full text-white`}>
        <Icon size={18} />
      </div>
    </div>
  );

  const performanceMetrics = [
    { metric: 'Total Screened', value: '797K+', icon: Users, color: 'bg-blue-500' },
    { metric: 'Spectacles Dispensed', value: '84K+', icon: Glasses, color: 'bg-green-500' },
    { metric: 'Cataract Surgeries', value: '49K+', icon: Activity, color: 'bg-purple-500' },
    { metric: 'Districts Covered', value: '28', icon: MapPin, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Chokher Alo Dashboard</h1>
          <p className="text-gray-600 text-sm sm:text-base">Eye Care Program Analytics - West Bengal</p>
          <div className="flex items-center justify-center mt-1 text-xs sm:text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Report Date: May 5, 2025 | Cumulative since April 1, 2025
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <TabButton id="overview" label="Overview" />
          <TabButton id="districts" label="District Performance" />
          <TabButton id="sectors" label="Sector Analysis" />
          <TabButton id="facilities" label="Medical Facilities" />
        </div>

        {/* Metrics */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {performanceMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        )}

        {/* Placeholder for next sections */}
        {/* Charts and other sections will go here */}

      </div>
    </div>
  );
};

export default Dashboard;

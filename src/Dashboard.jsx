import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import {
  Eye, Users, Glasses, Activity, TrendingUp,
  MapPin, Calendar, Award
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const districtData = [
    { district: 'Kolkata', screened: 38598, spectacles: 15990, cataract: 3215, efficiency: 95 },
    { district: 'Murshidabad', screened: 32830, spectacles: 5493, cataract: 4402, efficiency: 88 },
    { district: 'Nadia', screened: 27931, spectacles: 6227, cataract: 3578, efficiency: 82 },
    // ...more
  ];

  const sectorData = [
    { name: 'Public', value: 393487, color: '#3b82f6' },
    { name: 'NGO', value: 77992, color: '#10b981' },
    { name: 'Private', value: 326216, color: '#f59e0b' }
  ];

  const performanceMetrics = [
    { metric: 'Total Screened', value: '797K+', icon: Users, color: 'bg-blue-500' },
    { metric: 'Spectacles Dispensed', value: '84K+', icon: Glasses, color: 'bg-green-500' },
    { metric: 'Cataract Surgeries', value: '49K+', icon: Activity, color: 'bg-purple-500' },
    { metric: 'Districts Covered', value: '28', icon: MapPin, color: 'bg-orange-500' }
  ];

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`w-full sm:w-auto px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base text-center ${
        active 
          ? 'bg-blue-600 text-white shadow-md scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );

  const MetricCard = ({ metric, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">{metric}</p>
          <p className="text-xl sm:text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`${color} p-2 sm:p-3 rounded-full text-white`}>
          <Icon size={20} className="sm:w-6 sm:h-6" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1">Chokher Alo Dashboard</h1>
          <p className="text-sm sm:text-lg text-gray-600">Eye Care Program Analytics - West Bengal</p>
          <div className="flex flex-wrap justify-center mt-2 text-xs sm:text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Report Date: May 5, 2025 | Cumulative since April 1, 2025
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6">
          <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="districts" label="District Performance" active={activeTab === 'districts'} onClick={setActiveTab} />
          <TabButton id="sectors" label="Sector Analysis" active={activeTab === 'sectors'} onClick={setActiveTab} />
          <TabButton id="facilities" label="Medical Facilities" active={activeTab === 'facilities'} onClick={setActiveTab} />
        </div>

        {/* Metrics */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {performanceMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        )}

        {/* More tab-specific content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;

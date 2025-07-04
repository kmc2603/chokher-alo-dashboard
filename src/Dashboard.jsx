import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Eye, Users, Glasses, Activity, TrendingUp, MapPin, Calendar, Award } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Processed data from the document - Complete district data
  const districtData = [
    { district: 'Kolkata', screened: 38598, spectacles: 15990, cataract: 3215, efficiency: 95 },
    { district: 'Murshidabad', screened: 32830, spectacles: 5493, cataract: 4402, efficiency: 88 },
    { district: 'Nadia', screened: 27931, spectacles: 6227, cataract: 3578, efficiency: 82 },
    { district: 'North 24 Parganas', screened: 26978, spectacles: 13200, cataract: 7546, efficiency: 92 },
    { district: 'Purba Bardhaman', screened: 22320, spectacles: 6845, cataract: 3000, efficiency: 75 },
    { district: 'Cooch Behar', screened: 20337, spectacles: 1420, cataract: 1354, efficiency: 65 },
    { district: 'South 24 Parganas', screened: 20805, spectacles: 2672, cataract: 2111, efficiency: 70 },
    { district: 'Malda', screened: 17625, spectacles: 2099, cataract: 1193, efficiency: 68 },
    { district: 'Darjeeling', screened: 16215, spectacles: 1168, cataract: 1243, efficiency: 72 },
    { district: 'Uttar Dinajpur', screened: 15363, spectacles: 922, cataract: 838, efficiency: 60 },
    { district: 'Purba Medinipur', screened: 15213, spectacles: 3518, cataract: 1986, efficiency: 78 },
    { district: 'Howrah', screened: 12843, spectacles: 2984, cataract: 1617, efficiency: 70 },
    { district: 'Dakshin Dinajpur', screened: 11726, spectacles: 1067, cataract: 654, efficiency: 58 },
    { district: 'Jalpaiguri', screened: 10915, spectacles: 2325, cataract: 1819, efficiency: 75 },
    { district: 'Paschim Medinipur', screened: 10869, spectacles: 2671, cataract: 1548, efficiency: 72 },
    { district: 'Diamond Harbour HD', screened: 9068, spectacles: 300, cataract: 547, efficiency: 45 },
    { district: 'Birbhum', screened: 8807, spectacles: 662, cataract: 418, efficiency: 55 },
    { district: 'Hooghly', screened: 7772, spectacles: 1923, cataract: 2534, efficiency: 85 },
    { district: 'Basirhat HD', screened: 7517, spectacles: 758, cataract: 482, efficiency: 52 },
    { district: 'Nandigram HD', screened: 7061, spectacles: 978, cataract: 560, efficiency: 58 },
    { district: 'Alipurduar', screened: 7265, spectacles: 728, cataract: 578, efficiency: 60 },
    { district: 'Rampurhat HD', screened: 6241, spectacles: 772, cataract: 368, efficiency: 55 },
    { district: 'Bishnupur HD', screened: 5719, spectacles: 678, cataract: 499, efficiency: 62 },
    { district: 'Jhargram', screened: 3736, spectacles: 724, cataract: 605, efficiency: 68 },
    { district: 'Purulia', screened: 3128, spectacles: 2120, cataract: 1992, efficiency: 88 },
    { district: 'Bankura', screened: 19059, spectacles: 685, cataract: 1293, efficiency: 58 },
    { district: 'Kalimpong', screened: 1149, spectacles: 117, cataract: 75, efficiency: 45 }
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

  const dailyTrends = [
    { date: 'Apr 1', screening: 12500, spectacles: 450, surgeries: 180 },
    { date: 'Apr 8', screening: 18200, spectacles: 620, surgeries: 220 },
    { date: 'Apr 15', screening: 22100, spectacles: 780, surgeries: 280 },
    { date: 'Apr 22', screening: 19800, spectacles: 695, surgeries: 245 },
    { date: 'Apr 29', screening: 16900, spectacles: 610, surgeries: 195 },
    { date: 'May 5', screening: 15182, spectacles: 697, surgeries: 252 }
  ];

  const topPerformers = [
    { district: 'Kolkata', efficiency: 95, surgeries: 3215 },
    { district: 'North 24 Parganas', efficiency: 92, surgeries: 7546 },
    { district: 'Murshidabad', efficiency: 88, surgeries: 4402 },
    { district: 'Paschim Bardhaman', efficiency: 85, surgeries: 3552 },
    { district: 'Nadia', efficiency: 82, surgeries: 3578 }
  ];

  const medicalColleges = [
    { name: 'SSKM Hospital', screened: 377, surgeries: 8, efficiency: 'High' },
    { name: 'Kolkata Medical College', screened: 917, surgeries: 0, efficiency: 'Low' },
    { name: 'North Bengal Medical College', screened: 250, surgeries: 4, efficiency: 'Medium' },
    { name: 'Bankura Medical College', screened: 429, surgeries: 2, efficiency: 'Low' }
  ];

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all ${
        active 
          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );

  const MetricCard = ({ metric, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{metric}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-full text-white`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Chokher Alo Dashboard</h1>
          <p className="text-gray-600 text-lg">Eye Care Program Analytics - West Bengal</p>
          <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Report Date: May 5, 2025 | Cumulative since April 1, 2025
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            id="overview" 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="districts" 
            label="District Performance" 
            active={activeTab === 'districts'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="sectors" 
            label="Sector Analysis" 
            active={activeTab === 'sectors'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="facilities" 
            label="Medical Facilities" 
            active={activeTab === 'facilities'} 
            onClick={setActiveTab} 
          />
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            {/* Performance Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Weekly Performance Trends
                </h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer>
                    <LineChart data={dailyTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="date" 
                        stroke="#666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666"
                        fontSize={12}
                      />
                      <Tooltip 
                        formatter={(value, name) => [value.toLocaleString(), name]}
                        labelFormatter={(label) => `Week of ${label}`}
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #ccc',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="screening" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        name="People Screened"
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="spectacles" 
                        stroke="#10b981" 
                        strokeWidth={3} 
                        name="Spectacles Dispensed"
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="surgeries" 
                        stroke="#f59e0b" 
                        strokeWidth={3} 
                        name="Cataract Surgeries"
                        dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-900">Total People Screened</span>
                    <span className="text-xl font-bold text-blue-600">797,695</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-900">Spectacles Dispensed</span>
                    <span className="text-xl font-bold text-green-600">83,984</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-orange-900">Cataract Surgeries</span>
                    <span className="text-xl font-bold text-orange-600">49,607</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-purple-900">Success Rate</span>
                    <span className="text-xl font-bold text-purple-600">78%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-600" />
                Top Performing Districts
              </h3>
              <div className="space-y-3">
                {topPerformers.map((district, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="ml-3 font-medium">{district.district}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">
                        {district.surgeries.toLocaleString()} surgeries
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${district.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{district.efficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'districts' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">District-wise Performance (Top 15)</h3>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={districtData.slice(0, 15)} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="district" 
                    angle={-45} 
                    textAnchor="end" 
                    height={120}
                    interval={0}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                  <Legend />
                  <Bar dataKey="screened" fill="#3b82f6" name="People Screened" />
                  <Bar dataKey="spectacles" fill="#10b981" name="Spectacles Dispensed" />
                  <Bar dataKey="cataract" fill="#f59e0b" name="Cataract Surgeries" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">District Performance Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-medium text-gray-900">District</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Screened</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Spectacles</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Surgeries</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtData.slice(0, 10).map((district, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{district.district}</td>
                        <td className="px-4 py-3">{district.screened.toLocaleString()}</td>
                        <td className="px-4 py-3">{district.spectacles.toLocaleString()}</td>
                        <td className="px-4 py-3">{district.cataract.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${district.efficiency}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{district.efficiency}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise Screening Distribution</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name}\n${(percent * 100).toFixed(1)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        stroke="#fff"
                        strokeWidth={2}
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [value.toLocaleString(), 'People Screened']}
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #ccc',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sector Performance Details</h3>
                <div className="space-y-4">
                  {sectorData.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg" style={{backgroundColor: sector.color + '15'}}>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-3" style={{backgroundColor: sector.color}}></div>
                        <div>
                          <span className="font-medium text-lg">{sector.name} Sector</span>
                          <div className="text-sm text-gray-600">
                            {((sector.value / sectorData.reduce((a, b) => a + b.value, 0)) * 100).toFixed(1)}% of total
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{color: sector.color}}>
                          {sector.value.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">people screened</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Key Insights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Public sector leads with 49.3% of total screenings</li>
                    <li>• Private sector contributes 40.9% - strong partnership</li>
                    <li>• NGO sector provides 9.8% - community outreach</li>
                    <li>• Total collaborative screening: 797,695 people</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical College Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Medical College</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Screened</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Surgeries</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicalColleges.map((college, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium">{college.name}</td>
                        <td className="px-4 py-3">{college.screened.toLocaleString()}</td>
                        <td className="px-4 py-3">{college.surgeries}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            college.efficiency === 'High' ? 'bg-green-100 text-green-800' :
                            college.efficiency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {college.efficiency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

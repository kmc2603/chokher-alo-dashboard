import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Eye, Users, Glasses, Activity, TrendingUp, MapPin, Calendar, Award } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
      className={`flex-1 py-2 text-center rounded-lg font-medium transition ${
        active
          ? 'bg-blue-600 text-white shadow'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );

  const MetricCard = ({ metric, value, icon: Icon, color }) => (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-md flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-xs md:text-sm">{metric}</p>
        <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`${color} p-2 md:p-3 rounded-full text-white`}>
        <Icon size={20} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Chokher Alo Dashboard</h1>
          <p className="text-gray-600 text-sm md:text-lg">Eye Care Program Analytics – West Bengal</p>
          <div className="flex justify-center items-center mt-1 text-xs md:text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Report Date: May 5, 2025 | Cumulative since April 1, 2025
          </div>
        </header>

        <nav className="flex gap-1 md:gap-2 mb-4">
          {['overview', 'districts', 'sectors', 'facilities'].map(id => (
            <TabButton
              key={id}
              id={id}
              label={id.charAt(0).toUpperCase() + id.slice(1)}
              active={activeTab === id}
              onClick={setActiveTab}
            />
          ))}
        </nav>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((m, i) => (
                <MetricCard key={i} {...m} />
              ))}
            </div>

            <div className="space-y-4 lg:flex lg:space-x-4">
              <div className="bg-white rounded-lg shadow p-4 flex-1 overflow-x-auto">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" /> Weekly Trends
                </h3>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer>
                    <LineChart data={dailyTrends} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 10 }} />
                      <YAxis stroke="#666" tick={{ fontSize: 10 }} />
                      <Tooltip formatter={(v,n)=>[v.toLocaleString(), n]} labelFormatter={l=>`Week of ${l}`} />
                      <Legend wrapperStyle={{ fontSize: 10 }} />
                      <Line type="monotone" dataKey="screening" stroke="#3b82f6" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="spectacles" stroke="#10b981" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="surgeries" stroke="#f59e0b" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex-1">
                <h3 className="text-lg font-bold mb-2">Program Summary</h3>
                <div className="space-y-2">
                  {[
                    ['Total Screened', '797,695', 'bg-blue-50', 'text-blue-600'],
                    ['Spectacles Dispensed', '83,984', 'bg-green-50', 'text-green-600'],
                    ['Cataract Surgeries', '49,607', 'bg-orange-50', 'text-orange-600'],
                    ['Success Rate', '78%', 'bg-purple-50', 'text-purple-600']
                  ].map(([label, val, bg, txt], i) => (
                    <div key={i} className={`flex justify-between items-center p-2 ${bg} rounded`}>
                      <span className="text-sm font-medium text-gray-900">{label}</span>
                      <span className={`text-lg font-bold ${txt}`}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-600" /> Top Districts
              </h3>
              <div className="space-y-2">
                {topPerformers.map((d,i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 flex items-center justify-center text-white font-bold rounded-full ${
                        i===0 ? 'bg-yellow-500' : i===1 ? 'bg-gray-400' : 'bg-orange-500'}`}>
                        {i+1}
                      </div>
                      <span className="ml-2 font-medium">{d.district}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{d.surgeries.toLocaleString()} surgeries</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${d.efficiency}%` }} />
                      </div>
                      <span className="text-sm font-medium">{d.efficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'districts' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
              <h3 className="text-lg font-bold mb-2">District-wise Performance (Top 15)</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={districtData.slice(0, 15)} margin={{ top: 10, right: 5, bottom: 80, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="district" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} height={60} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip formatter={v=>v.toLocaleString()} />
                    <Legend wrapperStyle={{ fontSize: 10 }} />
                    <Bar dataKey="screened" fill="#3b82f6" />
                    <Bar dataKey="spectacles" fill="#10b981" />
                    <Bar dataKey="cataract" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
              <h3 className="text-lg font-bold mb-2">Performance Table</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {['District','Screened','Spectacles','Surgeries','Efficiency'].map(h => (
                      <th key={h} className="p-2 text-left font-medium text-gray-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {districtData.slice(0, 10).map((d,i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-2">{d.district}</td>
                      <td className="p-2">{d.screened.toLocaleString()}</td>
                      <td className="p-2">{d.spectacles.toLocaleString()}</td>
                      <td className="p-2">{d.cataract.toLocaleString()}</td>
                      <td className="p-2">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${d.efficiency}%` }} />
                          </div>
                          <span className="text-xs font-medium">{d.efficiency}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col lg:flex-row gap-4">
              <div className="flex-1 overflow-x-auto">
                <h3 className="text-lg font-bold mb-2">Sector-wise Screening</h3>
                <div className="h-64">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={sectorData} cx="50%" cy="50%" outerRadius={80} dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent*100).toFixed(1)}%`}>
                        {sectorData.map((e,i) => <Cell key={i} fill={e.color} />)}
                      </Pie>
                      <Tooltip formatter={v=>[v.toLocaleString(),'People Screened']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Sector Details</h3>
                <div className="space-y-2">
                  {sectorData.map((s,i) => (
                    <div key={i} className={`flex justify-between items-center p-2 rounded ${s.color}15`}>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: s.color }}></span>
                        <div>
                          <p className="font-medium">{s.name} Sector</p>
                          <p className="text-xs text-gray-600">
                            {((s.value / sectorData.reduce((a,c)=>a+c.value,0))*100).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold" style={{ color: s.color }}>{s.value.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">people screened</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <h3 className="text-lg font-bold mb-2">Medical College Performance</h3>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {['Medical College','Screened','Surgeries','Efficiency'].map(h => (
                    <th key={h} className="p-2 text-left font-medium text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {medicalColleges.map((c,i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{c.name}</td>
                    <td className="p-2">{c.screened.toLocaleString()}</td>
                    <td className="p-2">{c.surgeries}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        c.efficiency === 'High' ? 'bg-green-100 text-green-800' :
                        c.efficiency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {c.efficiency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

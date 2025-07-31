import React from 'react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import { AlertCircle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            LCM vs. Other Charging Technologies
          </h2>
          <p className="text-white/70 text-lg">
            See how our innovative Loop Charging Module compares to traditional charging methods.
          </p>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-dark-800 border-b border-white/10 text-white font-display">
                  Features
                </th>
                <th className="p-4 text-center bg-primary-500/20 border-b border-primary-500/30 text-white font-display">
                  LCM
                </th>
                <th className="p-4 text-center bg-dark-800 border-b border-white/10 text-white font-display">
                  Traditional EV Chargers
                </th>
                <th className="p-4 text-center bg-dark-800 border-b border-white/10 text-white font-display">
                  Regenerative Braking
                </th>
                <th className="p-4 text-center bg-dark-800 border-b border-white/10 text-white font-display">
                  Solar Panel EV Roofs
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Works While Driving */}
              <tr>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-white font-medium">
                  Works While Driving
                </td>
                <td className="p-4 bg-primary-500/10 border-b border-primary-500/30 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
              </tr>

              {/* Real-Time Charging */}
              <tr>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-white font-medium">
                  Real-Time Charging
                </td>
                <td className="p-4 bg-primary-500/10 border-b border-primary-500/30 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
              </tr>

              {/* Requires External Setup */}
              <tr>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-white font-medium">
                  Requires External Setup
                </td>
                <td className="p-4 bg-primary-500/10 border-b border-primary-500/30 text-center">
                  <X className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <X className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <X className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>

              {/* Efficiency at Low Speeds */}
              <tr>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-white font-medium">
                  Efficiency at Low Speeds
                </td>
                <td className="p-4 bg-primary-500/10 border-b border-primary-500/30 text-center">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary-500" />
                    <span className="text-xs text-white/70 ml-1">(≥30 km/h)</span>
                  </div>
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 border-b border-white/10 text-center">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mx-auto" />
                </td>
              </tr>

              {/* Battery Safety */}
              <tr>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-white font-medium">
                  Battery Safety
                </td>
                <td className="p-4 bg-primary-500/10 border-b border-primary-500/30 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-800 border-b border-white/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
              </tr>

              {/* Works in All Weather */}
              <tr>
                <td className="p-4 bg-dark-700 text-white font-medium">
                  Works in All Weather
                </td>
                <td className="p-4 bg-primary-500/10 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 text-center">
                  <Check className="h-5 w-5 text-primary-500 mx-auto" />
                </td>
                <td className="p-4 bg-dark-700 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-dark-700 rounded-xl p-6 border border-white/10">
          <h3 className="font-display font-semibold text-xl text-white mb-4">
            The LCM Advantage: A Complete Solution
          </h3>
          <p className="text-white/70 mb-4">
            While each charging technology has its benefits, LCM offers a unique advantage by providing continuous charging during normal driving conditions—filling the gaps where other systems are inefficient.
          </p>
          <p className="text-white/70">
            LCM is designed to work alongside existing technologies like regenerative braking, creating a comprehensive charging ecosystem that maximizes range and minimizes the need for external charging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
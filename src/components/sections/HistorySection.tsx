import { useState } from 'react';
import Timeline from '../shared/Timeline';
import SectionHeading from '../shared/SectionHeading';
import {
  educationData,
  experienceData,
  allTimelineData,
} from '../../data/education';

const HistorySection = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'education' | 'experience'
  >('all');

  const getTimelineData = () => {
    switch (activeTab) {
      case 'education':
        return educationData;
      case 'experience':
        return experienceData;
      default:
        return allTimelineData;
    }
  };

  return (
    <section id="education&Experience" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full">
          <SectionHeading
            title="Education & Experience"
            subtitle="My academic background and professional journey"
          />

          {/* Timeline Filter Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8" role="tablist">
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'all' ? 'bg-primary text-dark' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => setActiveTab('all')}
                type="button"
              >
                <i className="fa-solid fa-clock"></i>
                <span>All Timeline</span>
              </button>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'experience' ? 'bg-primary text-dark' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => setActiveTab('experience')}
                type="button"
              >
                <i className="fa-solid fa-briefcase"></i>
                <span>Experience</span>
              </button>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'education' ? 'bg-primary text-dark' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => setActiveTab('education')}
                type="button"
              >
                <i className="fa-solid fa-graduation-cap"></i>
                <span>Education</span>
              </button>
            </div>
          </div>

          {/* Timeline Component */}
          <div className="w-full">
            <Timeline
              items={getTimelineData()}
              showCertificates={true}
              className="education-experience-timeline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

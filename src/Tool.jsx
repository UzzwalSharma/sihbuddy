import React, { useState, useMemo } from 'react';
import Footer from './Footer';

const SIHProblemStatements = () => {
    const [showDisclaimer, setShowDisclaimer] = useState(true);  

  const [activeFilter, setActiveFilter] = useState('all');
  const [highlightedRow, setHighlightedRow] = useState(null);
const [activeThemeFilter, setActiveThemeFilter] = useState('all');

  const problemStatements = [
    [1,"Ministry of Development of North Eastern Region","Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India","Software","SIH25001","MedTech / BioTech / HealthTech"],
    [2,"Ministry of Development of North Eastern Region","Smart Tourist Safety Monitoring & Incident Response System using AI, Geo-Fencing, and Blockchain-based Digital ID","Software","SIH25002","Travel & Tourism"],
    [3,"Ministry of Development of North Eastern Region","Low-Cost smart transportation solution for Agri produce from remote farms to nearest motorable road in NER Region","Hardware","SIH25003","Transportation & Logistics"],
    [4,"Ministry of Fisheries, Animal Husbandry & Dairying","Image based breed recognition for cattle and buffaloes of India","Software","SIH25004","Agriculture, FoodTech & Rural Development"],
    [5,"Ministry of Fisheries, Animal Husbandry & Dairying","Image based Animal Type Classification for cattle and buffaloes","Software","SIH25005","Agriculture, FoodTech & Rural Development"],
    [6,"Ministry of Fisheries, Animal Husbandry & Dairying","Development of a Digital Farm Management Portal for Implementing Biosecurity Measures in Pig and Poultry Farms","Software","SIH25006","Agriculture, FoodTech & Rural Development"],
    [7,"Ministry of Fisheries, Animal Husbandry & Dairying","Development of a Digital Farm Management Portal for Monitoring Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in Livestock","Software","SIH25007","Agriculture, FoodTech & Rural Development"],
    [8,"Government of Punjab","Disaster Preparedness and Response Education System for Schools and Colleges","Software","SIH25008","Disaster Management"],
    [9,"Government of Punjab","Gamified Environmental Education Platform for Schools and Colleges","Software","SIH25009","Smart Education"],
    [10,"Government of Punjab","Smart Crop Advisory System for Small and Marginal Farmers","Software","SIH25010","Agriculture, FoodTech & Rural Development"],
    [11,"Government of Punjab","Smart Curriculum Activity & Attendance App","Software","SIH25011","Smart Education"],
    [12,"Government of Punjab","Automated Attendance System for Rural Schools","Software","SIH25012","Smart Education"],
    [13,"Government of Punjab","Real-Time Public Transport Tracking for Small Cities","Software","SIH25013","Transportation & Logistics"],
    [14,"Government of Punjab","Waste Segregation Monitoring System for Urban Local Bodies","Hardware","SIH25014","Clean & Green Technology"],
    [15,"Government of Punjab","Intelligent Pesticide Sprinkling System Determined by the Infection Level of a Plant","Hardware","SIH25015","Agriculture, FoodTech & Rural Development"],
    [16,"Government of Punjab","Automated Student Attendance Monitoring and Analytics System for Colleges","Software","SIH25016","Smart Education"],
    [17,"Government of Punjab","Digital Platform for Centralized Alumni Data Management and Engagement","Software","SIH25017","Smart Education"],
    [18,"Government of Punjab","Telemedicine Access for Rural Healthcare in Nabha","Software","SIH25018","MedTech / BioTech / HealthTech"],
    [19,"Government of Punjab","Digital Learning Platform for Rural School Students in Nabha","Software","SIH25019","Smart Education"],
    [20,"Ministry of Railways","Development of indigenous contactless Integrated Track Monitoring Systems (ITMS) for Track Recording on Indian Railways","Hardware","SIH25020","Smart Automation"],
    [21,"Ministry of Railways","AI based development of Laser based QR Code marking on track fittings on Indian Railways","Hardware","SIH25021","Transportation & Logistics"],
    [22,"Ministry of Railways","Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control","Software","SIH25022","Transportation & Logistics"],
    [23,"Ministry of Ayush","AyurSutra- Panchakarma Patient Management and therapy scheduling Software","Software","SIH25023","MedTech / BioTech / HealthTech"],
    [24,"Ministry of Ayush","Comprehensive Cloud-Based Practice Management & Nutrient Analysis Software for Ayurvedic Dietitians, Tailored for Ayurveda-Focused Diet Plans","Software","SIH25024","MedTech / BioTech / HealthTech"],
    [25,"Ministry of Ayush","E tongue for Dravya identification","Hardware","SIH25025","MedTech / BioTech / HealthTech"],
    [26,"Ministry of Ayush","Develop API code to integrate NAMASTE and/or the International Classification of Diseases (ICD-11) via the Traditional Medicine Module 2 (TM2) into existing EMR systems","Software","SIH25026","MedTech / BioTech / HealthTech"],
    [27,"Ministry of Ayush","Develop a blockchain-based system for botanical traceability of Ayurvedic herbs, including geo-tagging from collection to final formulation","Software","SIH25027","Blockchain & Cybersecurity"],
    [28,"Government of Jharkhand","Smart Classroom & Timetable Scheduler","Software","SIH25028","Smart Education"],
    [29,"Government of Jharkhand","Authenticity Validator for Academia","Software","SIH25029","Smart Education"],
    [30,"Government of Jharkhand","AI-Based Crop Recommendation for Farmers","Software","SIH25030","Agriculture, FoodTech & Rural Development"],
    [31,"Government of Jharkhand","Crowdsourced Civic Issue Reporting and Resolution System","Software","SIH25031","Clean & Green Technology"],
    [32,"Government of Jharkhand","Development of a Smart Digital Platform to Promote Eco & Cultural Tourism in Jharkhand","Software","SIH25032","Travel & Tourism"],
    [33,"Ministry of Corporate Affairs","AI-Based Smart Allocation Engine for PM Internship Scheme","Software","SIH25033","Smart Automation"],
    [34,"Ministry of Corporate Affairs","AI-Based Internship Recommendation Engine for PM Internship Scheme","Software","SIH25034","Smart Education"],
    [35,"Ministry of Corporate Affairs","Sentiment analysis of comments received through E-consultation module","Software","SIH25035","Miscellaneous"],
    [36,"Ministry of Earth Sciences (MoES)","Development of Sensor for Detection Of Microplastics","Hardware","SIH25036","Miscellaneous"],
    [37,"Ministry of Earth Sciences (MoES)","Development of a low-cost camera-based automated beach sand grain size mapping system","Hardware","SIH25037","Miscellaneous"],
    [38,"Ministry of Earth Sciences (MoES)","Blockchain-Based Blue Carbon Registry and MRV System","Software","SIH25038","Clean & Green Technology"],
    [39,"Ministry of Earth Sciences (MoES)","Integrated Platform for Crowdsourced Ocean Hazard Reporting and Social Media Analytics","Software","SIH25039","Disaster Management"],
    [40,"Ministry of Earth Sciences (MoES)","FloatChat - AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization","Software","SIH25040","Miscellaneous"],
    [41,"Ministry of Earth Sciences (MoES)","AI-Driven Unified Data Platform for Oceanographic, Fisheries, and Molecular Biodiversity Insights","Software","SIH25041","Renewable / Sustainable Energy"],
    [42,"Ministry of Earth Sciences (MoES)","Identifying Taxonomy and Assessing Biodiversity from eDNA Datasets","Software","SIH25042","Miscellaneous"],
    [43,"Ministry of Earth Sciences (MoES)","Embedded Intelligent Microscopy System for Identification and Counting of Microscopic Marine Organisms","Hardware","SIH25043","Smart Automation"],
    [44,"Government of Odisha","AI-Powered Crop Yield Prediction and Optimization","Software","SIH25044","Agriculture, FoodTech & Rural Development"],
    [45,"Government of Odisha","Blockchain-Based Supply Chain Transparency for Agricultural Produce","Software","SIH25045","Agriculture, FoodTech & Rural Development"],
    [46,"Government of Odisha","Smart Waste Segregation and Recycling System","Hardware","SIH25046","Clean & Green Technology"],
    [47,"Government of Odisha","Disaster Response Drone for Remote Areas","Hardware","SIH25047","Robotics and Drones"],
    [48,"Government of Odisha","Gamified Learning Platform for Rural Education","Software","SIH25048","Smart Education"],
    [49,"Government of Odisha","AI-Driven Public Health Chatbot for Disease Awareness","Software","SIH25049","MedTech / BioTech / HealthTech"],
    [50,"Government of Odisha","Smart Traffic Management System for Urban Congestion","Software","SIH25050","Transportation & Logistics"],
    [51,"Government of Odisha","Renewable Energy Monitoring System for Microgrids","Hardware","SIH25051","Renewable / Sustainable Energy"],
    [52,"Government of Odisha","AR-Based Cultural Heritage Preservation Platform","Software","SIH25052","Heritage & Culture"],
    [53,"Ministry of Consumer Affairs, Food & Public Distribution","Improved Onion storage technology for enhancing shelf life of onions","Hardware","SIH25053","Agriculture, FoodTech & Rural Development"],
    [54,"Ministry of Consumer Affairs, Food & Public Distribution","Automated High-Current Short-Circuit Test System for MCB to comply with IEC 60898-1:2015","Hardware","SIH25054","Smart Automation"],
    [55,"Ministry of Consumer Affairs, Food & Public Distribution","Automated Specimen Preparation System for testing of Cable samples as per IS 10810 and IS 7098","Hardware","SIH25055","Miscellaneous"],
    [56,"Ministry of Consumer Affairs, Food & Public Distribution","To explore new/alternative assaying methods to the fire assay method for testing of gold jewellery and artefacts through non-destructive testing","Hardware","SIH25056","Miscellaneous"],
    [57,"Ministry of Consumer Affairs, Food & Public Distribution","Automated Compliance Checker for Legal Metrology Declarations on E-Commerce Platforms","Hardware","SIH25057","Miscellaneous"],
    [58,"Ministry of Consumer Affairs, Food & Public Distribution","Detection and Prevention of Tampering in Weighing and Measuring instruments","Hardware","SIH25058","Miscellaneous"],
    [59,"Ministry of Social Justice & Empowerment","Enhancing Student Awareness on difference between Aadhaar linked and Direct Beneficiary Transfer(DBT) enabled Aadhaar seeded bank account","Software","SIH25059","Miscellaneous"],
    [60,"Ministry of Social Justice & Empowerment","Real life solutions for Waste Management","Software","SIH25060","Clean & Green Technology"],
    [61,"Government of Sikkim","Digitize and Showcase Monasteries of Sikkim for Tourism and Cultural Preservation","Software","SIH25061","Travel & Tourism"],
    [62,"Government of Sikkim","Implementation of Smart Agriculture for Efficient Cultivation in Hilly Regions","Hardware","SIH25062","Agriculture, FoodTech & Rural Development"],
    [63,"Government of Kerala","Developing a cost effective solution for detecting the breakage of Low Voltage AC Distribution Over Head conductors","Hardware","SIH25063","Disaster Management"],
    [64,"Government of Kerala","Improving the Renewable Energy hosting capacity in Distribution Feeders improving the Power quality of Distribution network during high RE injection","Hardware","SIH25064","Renewable / Sustainable Energy"],
    [65,"Ministry of Jal Shakti","Designing and development of an application for on spot assessment of Roof Top Rain water harvesting and artificial recharge potential and size","Software","SIH25065","Smart Automation"],
    [66,"Ministry of Jal Shakti","Development of an AI-driven ChatBOT for INGRES as a virtual assistant","Software","SIH25066","Smart Automation"],
    [67,"Ministry of Jal Shakti","Proposal for Design and development of application for Heavy Metal Pollution indices","Software","SIH25067","Miscellaneous"],
    [68,"Ministry of Jal Shakti","Real time Groundwater resource evaluation using DWLR data","Software","SIH25068","Miscellaneous"],
    [69,"Ministry of Mines","AI-Driven Life Cycle Assessment (LCA) Tool for Advancing Circularity and Sustainability in Metallurgy and Mining","Software","SIH25069","Miscellaneous"],
    [70,"Ministry of Mines","Secure Data Wiping for Trustworthy IT Asset Recycling","Software","SIH25070","Miscellaneous"],
    [71,"Ministry of Mines","AI-Based Rockfall Prediction and Alert System for Open-Pit Mines","Software","SIH25071","Disaster Management"],
    [72,"Ministry of Mines","Design and Implementation of Solar-Powered Dewatering in Mining Operations","Hardware","SIH25072","Renewable / Sustainable Energy"],
    [73,"Ministry of Youth Affairs and Sports","AI-Powered Mobile Platform for Democratizing Sports Talent Assessment","Software","SIH25073","Fitness & Sports"],
    [74,"Government of Kerala","AI-Powered Personal Farming Assistant for Kerala Farmers","Software","SIH25074","Agriculture, FoodTech & Rural Development"],
    [75,"Government of Kerala","Gamified Platform to Promote Sustainable Farming Practices","Software","SIH25075","Agriculture, FoodTech & Rural Development"],
    [76,"Government of Kerala","AI-Based Farmer Query Support and Advisory System","Software","SIH25076","Agriculture, FoodTech & Rural Development"],
    [77,"Government of Kerala","A hardware that can detect and prevent unauthorized use of electric fences","Hardware","SIH25077","Smart Automation"],
    [78,"Government of Kerala","Software other than a circuit breaker that can be used to detect and turn off LT lines when the line breaks","Software","SIH25079","Disaster Management"],
    [79,"Government of Kerala","Document Overload at Kochi Metro Rail Limited (KMRL)-An automated solution","Software","SIH25080","Smart Automation"],
    [80,"Government of Kerala","AI-Driven Train Induction Planning & Scheduling for Kochi Metro Rail Limited (KMRL)","Software","SIH25081","Smart Automation"],
    [81,"Government of Kerala","Development of a travel related software app that can be installed on mobile phones that could capture trip related information","Software","SIH25082","Travel & Tourism"],
    [82,"Government of Kerala","Digital Health Record Management System for migrant workers in Kerala aligned with sustainable development goals","Software","SIH25083","MedTech / BioTech / HealthTech"],
    [83,"Government of Kerala","Earthquake stabilised dialysis system for patient safety during seismic events","Hardware","SIH25084","Disaster Management"],
    [84,"Government of Kerala","Solution for NON-REVENUE LOSS IN WATER SUPPLY Solution to improve AWARENESS IN WATER CONSERVATION TREATMENT OF WASTE WATER","Hardware","SIH25085","Miscellaneous"],
    [85,"Government of Kerala","GREY WATER MANAGEMENT AND REUSE WET LAND MANAGEMENT WATER CONSERVATION","Hardware","SIH25090","Clean & Green Technology"],
    [86,"Government of Jammu and Kashmir","AI-Based Timetable Generation System aligned with NEP 2020 for Multidisciplinary Education Structures","Software","SIH25091","Smart Automation"],
    [87,"Government of Jammu and Kashmir","Development of a Digital Mental Health and Psychological Support System for Students in Higher Education","Software","SIH25092","MedTech / BioTech / HealthTech"],
    [88,"Government of Jammu and Kashmir","Centralised Digital Platform for Comprehensive student activity record in HEIs","Software","SIH25093","Smart Education"],
    [89,"Government of Jammu and Kashmir","One-Stop Personalized Career & Education Advisor","Software","SIH25094","Smart Education"],
    [90,"Autodesk","Research and redesign a sport equipment commonly found in sport industry and utilize Fusion software to reimagine its design","Hardware","SIH25095","Smart Education"],
    [91,"Autodesk","Students are supposed to use Fusion software to generate NC code with machine details & tool library for any industrial component","Hardware","SIH25096","Smart Education"],
    [92,"Autodesk","Research and develop a design on autonomous small precision focused machine for planting crops or weeding","Software","SIH25097","Smart Education"],
    [93,"Autodesk","Students are tasked with designing a 4-story commercial office building using Revit Architecture and Revit Structure","Software","SIH25098","Smart Education"],
    [94,"MathWorks India Pvt. Ltd.","AI-powered monitoring of crop health, soil condition, and pest risks using multispectral/hyperspectral imaging and sensor data","Software","SIH25099","Agriculture, FoodTech & Rural Development"],
    [95,"MathWorks India Pvt. Ltd.","Accelerating High-Fidelity Road Network Modeling for Indian Traffic Simulations","Software","SIH25100","Transportation & Logistics"],
    [96,"Government of Rajasthan","Remote classroom for rural colleges","Software","SIH25101","Smart Education"],
    [97,"Government of Rajasthan","AI-based drop-out prediction and counseling system","Software","SIH25102","Smart Automation"],
    [98,"Government of Rajasthan","ERP-based Integrated Student Management system","Software","SIH25103","Smart Automation"],
    [99,"Government of Rajasthan","Language Agnostic Chatbot","Software","SIH25104","Smart Education"],
    [100,"AICTE","Develop computer programs (in any language, preferably Python) to identify the design principles behind the Kolam designs and recreate the kolams","Software","SIH12507","Heritage & Culture"],
    [101,"Ministry of Tribal Affairs(MoTA)","Development of AI-powered FRA Atlas and WebGIS-based Decision Support System (DSS) for Integrated Monitoring of Forest Rights Act (FRA) Implementation","Software","SIH12508","Miscellaneous"],
    [102,"AICTE","Student Innovation","Hardware","SIH25109","Agriculture, FoodTech & Rural Development"],
    [103,"AICTE","Student Innovation","Hardware","SIH25110","Blockchain & Cybersecurity"],
    [104,"AICTE","Student Innovation","Hardware","SIH25111","Clean & Green Technology"],
    [105,"AICTE","Student Innovation","Hardware","SIH25112","Fitness & Sports"],
    [106,"AICTE","Student Innovation","Hardware","SIH25113","Heritage & Culture"],
    [107,"AICTE","Student Innovation","Hardware","SIH25114","MedTech / BioTech / HealthTech"],
    [108,"AICTE","Student Innovation","Hardware","SIH25115","Miscellaneous"],
    [109,"AICTE","Student Innovation","Hardware","SIH25116","Renewable / Sustainable Energy"],
    [110,"AICTE","Student Innovation","Hardware","SIH25117","Robotics and Drones"],
    [111,"AICTE","Student Innovation","Hardware","SIH25118","Smart Automation"],
    [112,"AICTE","Student Innovation","Hardware","SIH25119","Smart Vehicles"],
    [113,"AICTE","Student Innovation","Hardware","SIH25120","Travel & Tourism"],
    [114,"AICTE","Student Innovation","Hardware","SIH25121","Transportation & Logistics"],
    [115,"AICTE","Student Innovation","Hardware","SIH25122","Disaster Management"],
    [116,"AICTE","Student Innovation","Hardware","SIH25123","Smart Education"],
    [117,"AICTE","Student Innovation","Hardware","SIH25124","Toys & Games"],
    [118,"AICTE","Student Innovation","Hardware","SIH25125","Space Technology"],
    [119,"AICTE","Student Innovation","Software","SIH25126","Agriculture, FoodTech & Rural Development"],
    [120,"AICTE","Student Innovation","Software","SIH25127","Blockchain & Cybersecurity"],
    [121,"AICTE","Student Innovation","Software","SIH25128","Clean & Green Technology"],
    [122,"AICTE","Student Innovation","Software","SIH25129","Fitness & Sports"],
    [123,"AICTE","Student Innovation","Software","SIH25130","Heritage & Culture"],
    [124,"AICTE","Student Innovation","Software","SIH25131","MedTech / BioTech / HealthTech"],
    [125,"AICTE","Student Innovation","Software","SIH25132","Miscellaneous"],
    [126,"AICTE","Student Innovation","Software","SIH25133","Renewable / Sustainable Energy"],
    [127,"AICTE","Student Innovation","Software","SIH25134","Robotics and Drones"],
    [128,"AICTE","Student Innovation","Software","SIH25135","Smart Automation"],
    [129,"AICTE","Student Innovation","Software","SIH25136","Smart Vehicles"],
    [130,"AICTE","Student Innovation","Software","SIH25137","Travel & Tourism"],
    [131,"AICTE","Student Innovation","Software","SIH25138","Transportation & Logistics"],
    [132,"AICTE","Student Innovation","Software","SIH25139","Disaster Management"],
    [133,"AICTE","Student Innovation","Software","SIH25140","Smart Education"],
    [134,"AICTE","Student Innovation","Software","SIH25141","Toys & Games"],
    [135,"AICTE","Student Innovation","Software","SIH25142","Space Technology"]
  ];

const themes = [
  'Agriculture, FoodTech & Rural Development',
  'Blockchain & Cybersecurity',
  'Clean & Green Technology',
  'Disaster Management',
  'Fitness & Sports',
  'Heritage & Culture',
  'MedTech / BioTech / HealthTech',
  'Miscellaneous',
  'Renewable / Sustainable Energy',
  'Robotics and Drones',
  'Smart Automation',
  'Smart Education',
  'Space Technology',
  'Smart Vehicles',
  'Toys & Games',
  'Transportation & Logistics',
  'Travel & Tourism'
];

  const filteredData = useMemo(() => {
  let filtered = problemStatements;
  
  // Filter by category (Software/Hardware)
  if (activeFilter !== 'all') {
    filtered = filtered.filter(row => row[3].toLowerCase() === activeFilter);
  }
  
  // Filter by theme
  if (activeThemeFilter !== 'all') {
    filtered = filtered.filter(row => row[5] === activeThemeFilter);
  }
  
  return filtered;
}, [activeFilter, activeThemeFilter]);

  const softwareCount = problemStatements.filter(row => row[3] === 'Software').length;
  const hardwareCount = problemStatements.filter(row => row[3] === 'Hardware').length;
// Get theme counts
const getThemeCount = (theme) => {
  return problemStatements.filter(row => row[5] === theme).length;
};
  const handleRowClick = (index) => {
    setHighlightedRow(index);
    setTimeout(() => setHighlightedRow(null), 2000);
  };

  const FilterButton = ({ filter, children, className = "" }) => (
    <button
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-2 border-2 rounded-full text-sm font-medium transition-all duration-200 ${
        activeFilter === filter
          ? `bg-blue-600 border-blue-600 text-white ${className}`
          : 'bg-white border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600'
      }`}
    >
      {children}
    </button>
  );

  const ThemeFilterButton = ({ theme, children }) => (
  <button
    onClick={() => setActiveThemeFilter(theme)}
    className={`px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all duration-200 ${
      activeThemeFilter === theme
        ? 'bg-purple-600 border-purple-600 text-white'
        : 'bg-white border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-600'
    }`}
  >
    {children}
  </button>
);

  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-lg ">
        {/* Disclaimer Popup */}
{showDisclaimer && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-yellow-100 shadow-inner mb-4">
          <img src="/alert.gif" alt="" srcset="" className='rounded-md'/>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Important Notice
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed mb-6 font-bold">
          Please verify your chosen track from SIH's official portal.
          <br />
          This data is compiled with care to help students,
          but mistakes can happen as I'm human too! 💙
        </p>
        <button
          onClick={() => setShowDisclaimer(false)}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-4 py-2.5 rounded-lg font-medium cursor-pointer shadow hover:from-yellow-700 hover:to-yellow-800 transition-all"
        >
          Got it, Thanks!
        </button>
      </div>
    </div>
  </div>
)}

      {/* Header */}
    
<div className=" bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
 text-white py-8 px-6 text-center shadow-md">
  <h1 className="text-3xl font-bold tracking-wide mb-2">
    SIH 2025 Problem Statements
  </h1>
  <p className="text-sm text-green-100">
    Smart India Hackathon • Interactive Database
  </p>
</div>

{/* Filter Container */}
{/* Filter Container */}
<div className="p-5 border-b border-gray-200 bg-white shadow-sm">
  {/* Category Filter */}
  <div className="flex flex-wrap gap-3 items-center justify-center mb-4">
    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
      Filter by Category:
    </span>

    <FilterButton filter="all" className="!bg-gray-700 !border-gray-700">
      All (135)
    </FilterButton>

    <FilterButton
      filter="software"
      className="!bg-green-600 !border-green-600 hover:!bg-green-700"
    >
      Software ({softwareCount})
    </FilterButton>

    <FilterButton
      filter="hardware"
      className="!bg-orange-500 !border-orange-500 hover:!bg-orange-600"
    >
      Hardware ({hardwareCount})
    </FilterButton>
  </div>

  {/* Theme Filter */}
  <div className="border-t pt-4">
    <div className=" cursor-pointer  flex flex-wrap gap-2 items-center justify-center">
      <span className=" font-semibold text-gray-700 text-sm uppercase tracking-wide mb-2 w-full text-center">
        Filter by Theme:
      </span>
      
      <ThemeFilterButton theme="all">
        All Themes
      </ThemeFilterButton>
      
      {themes.map((theme, index) => (
        <ThemeFilterButton key={index} theme={theme}>
          {theme} ({getThemeCount(theme)})
        </ThemeFilterButton>
      ))}
    </div>
  </div>
</div>


      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 w-16">
                S.No
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 w-48">
                Organization
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 min-w-80">
                Problem Statement
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 w-24">
                Category
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 w-24">
                PS Number
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300 w-48">
                Theme
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={row[0]}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer transition-colors duration-150 border-b border-gray-100 hover:bg-gray-50 ${
                  highlightedRow === index ? 'bg-yellow-100 animate-pulse' : ''
                }`}
              >
                <td className="px-4 py-3 align-top">{row[0]}</td>
                <td className="px-4 py-3 align-top font-medium text-gray-800">{row[1]}</td>
                <td className="px-4 py-3 align-top text-gray-700 leading-relaxed">{row[2]}</td>
                <td className="px-4 py-3 align-top">
                  <span className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wide ${
                    row[3] === 'Software'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {row[3]}
                  </span>
                </td>
                <td className="px-4 py-3 align-top font-mono font-semibold text-red-600">{row[4]}</td>
                <td className="px-4 py-3 align-top">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium inline-block">
                    {row[5]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats Bar */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
        Showing <span className="font-semibold">{filteredData.length}</span> of{' '}
        <span className="font-semibold">{problemStatements.length}</span> problem statements
      </div>
      <Footer/>
    </div>
  );
};

export default SIHProblemStatements;
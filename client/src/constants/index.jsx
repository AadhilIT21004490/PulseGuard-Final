import { Activity } from "lucide-react";
import { Workflow } from "lucide-react";
import { ScatterChart } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { LaptopMinimal } from "lucide-react";
import { Scale } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import afs from "../assets/profile-pictures/afs.jpg";
import strk from "../assets/profile-pictures/strk.jpg";
import ha from "../assets/profile-pictures/ha.jpg";
import hf from "../assets/profile-pictures/hf.jpeg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Predictions", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Aadhil Shihabdeen",
    company: "IPS LLC, USA",
    image: user1,
    text: "This system's real-time predictions are revolutionizing early detection and intervention for cardiovascular conditions.",
  },
  {
    user: "Sajaji Sajith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Integrating this system into our practice has markedly improved our cardiovascular diagnostics and patient care.",
  },
  {
    user: "Rilfhy",
    company: "Quantum Innovations",
    image: user3,
    text: "User-friendly interface and reliable predictions make this tool invaluable for healthcare professionals.",
  },
  {
    user: "Aashif ahamed",
    company: "Fusion Dynamics",
    image: user4,
    text: "Ensemble models offer exceptional reliability, enhancing patient outcomes through timely cardiovascular risk assessments.",
  },
  {
    user: "Dr. Azzhar",
    company: "Lanka Hospital",
    image: user3,
    text: "The accuracy of these models significantly improves our ability to predict and manage heart disease.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "User-friendly interface and reliable predictions make this tool invaluable for healthcare professionals.",
  },
];

export const features = [
  {
    icon: <Activity />,
    text: "High Accuracy Predictions",
    description:
      "Utilizes advanced ensemble models to deliver highly accurate predictions of cardiovascular conditions.",
  },
  {
    icon: <ScatterChart />,
    text: "Real-Time Analytics",
    description:
      "Provides instant, real-time cardiovascular risk assessments to support immediate clinical decision-making.",
  },
  {
    icon: <LaptopMinimal />,
    text: "User-Friendly Interface",
    description:
      "Designed with healthcare professionals in mind for ease of use and efficient navigation.",
  },
  {
    icon: <Workflow />,
    text: "Comprehensive Data Integration",
    description:
      "Incorporates diverse datasets for robust feature engineering and comprehensive cardiovascular risk analysis.",
  },
  {
    icon: <ShieldAlert />,
    text: "Early Detection",
    description:
      "Facilitates early identification of cardiovascular conditions, enabling timely and effective intervention",
  },
  {
    icon: <Scale />,
    text: "Scalability and Efficiency",
    description:
      "Handles large datasets efficiently, ensuring scalability and consistent performance across various clinical settings.",
  },
];

export const checklistItems = [
  {
    title: "Input the patient data",
    description:
      "Collect thorough patient information, such as medical history, demographics, and pertinent health metrics.",
  },
  {
    title: "Feature Engineering",
    description:
      "Process and select key features from the data that significantly impact cardiovascular risk prediction.",
  },
  {
    title: "Apply the Ai Model",
    description:
      "Apply advanced machine learning models, including ensemble methods, to analyze data and predict cardiovascular risk.",
  },
  {
    title: "Real-Time Reporting",
    description:
      "Generate and deliver real-time risk assessments through a user-friendly interface for timely clinical decision-making.",
  },
];

export const pricingOptions = [
  {
    image: afs,
    title: "Atrial Fibrillation Prediction",
    price: "$0",
    features: [
      "Predicts the likelihood of atrial fibrillation by analyzing patient data for irregular heart rhythms and other risk factors.",
    ],
  },
  {
    image: strk,
    title: "Heart Stroke Prediction",
    price: "$10",
    features: [
      "Assesses the risk of stroke by evaluating critical indicators such as blood pressure, cholesterol levels, and medical history.",
    ],
  },
  {
    image: ha,
    title: "Heart Attack Prediction",
    price: "$200",
    features: [
      "Identifies the probability of a heart attack by examining vital signs, lifestyle factors, and previous cardiac events.",
    ],
  },
  {
    image: hf,
    title: "Heart Failiure Prediction",
    price: "$200",
    features: [
      "Forecasts potential heart failure by monitoring patient data for symptoms like shortness of breath, fluid retention, and fatigue.",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Proposal Report" },
  { href: "#", text: "Research Paper" },
  { href: "#", text: "Methodology Diagram" },
  { href: "#", text: "Data Sets" },
];

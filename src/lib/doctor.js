
export const categories = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Gastroenterology",
  "Oncology",
  "Pulmonology",
  "Endocrinology",
  "Ophthalmology",
  "Psychiatry",
  "Rheumatology",
  "Urology",
  "Obstetrics and Gynecology",
  "Nephrology",
  "Hematology",
  "ENT (Ear, Nose, Throat)",
  "General Surgery",
  "Plastic Surgery",
  "Anesthesiology",
  "Radiology",
  "Allergy and Immunology",
  "Family Medicine",
  "Internal Medicine",
  "Infectious Disease",
  "Geriatrics",
  "Sports Medicine",
  "Emergency Medicine",
  "Podiatry",
  "Pain Management"
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    appointmentTime: "9:00 AM - 5:00 PM",
    fees: "$120",
    category: "Cardiologist",
    hospital: "Heart Care Hospital",
    gender: "Female",
    image: "https://img.freepik.com/free-photo/doctor-smiling-hospital-corridor_23-2148913569.jpg",
    phone: "+1 (555) 123-4567",
    email: "emily.johnson@heartcare.com",
    address: "123 Heart St, New York, NY"
  },
  {
    id: 2,
    name: "Dr. James Carter",
    appointmentTime: "10:00 AM - 6:00 PM",
    fees: "$150",
    category: "Dermatologist",
    hospital: "Skin Health Clinic",
    gender: "Male",
    image: "https://img.freepik.com/free-photo/doctor-smiling-hospital-corridor_23-2148913569.jpg",
    phone: "+1 (555) 234-5678",
    email: "james.carter@skinhealth.com",
    address: "456 Skin Rd, Los Angeles, CA"
  },
  {
    id: 3,
    name: "Dr. Sarah Lee",
    appointmentTime: "8:00 AM - 3:00 PM",
    fees: "$100",
    category: "Orthopedist",
    hospital: "City Orthopedic Hospital",
    gender: "Female",
    image: "https://img.freepik.com/free-photo/smiling-young-female-doctor_23-2148852373.jpg",
    phone: "+1 (555) 345-6789",
    email: "sarah.lee@cityortho.com",
    address: "789 Ortho Ln, Chicago, IL"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    appointmentTime: "11:00 AM - 7:00 PM",
    fees: "$200",
    category: "Neurologist",
    hospital: "Neuro Health Institute",
    gender: "Male",
    image: "https://img.freepik.com/free-photo/portrait-young-female-doctor-wearing-white-coat_23-2148424873.jpg",
    phone: "+1 (555) 456-7890",
    email: "michael.chen@neurohealth.com",
    address: "321 Neuro Dr, Boston, MA"
  },
  {
    id: 5,
    name: "Dr. Olivia Martinez",
    appointmentTime: "7:00 AM - 3:00 PM",
    fees: "$90",
    category: "Pediatrician",
    hospital: "Children's Hospital",
    gender: "Female",
    image: "https://img.freepik.com/free-photo/smiling-young-female-doctor_23-2148852373.jpg",
    phone: "+1 (555) 567-8901",
    email: "olivia.martinez@childrenshospital.com",
    address: "654 Kids Ave, Houston, TX"
  },
  {
    id: 6,
    name: "Dr. Daniel Lopez",
    appointmentTime: "1:00 PM - 8:00 PM",
    fees: "$130",
    category: "Ophthalmologist",
    hospital: "Vision Care Clinic",
    gender: "Male",
    image: "https://img.freepik.com/free-photo/happy-young-doctor_23-2148427365.jpg",
    phone: "+1 (555) 678-9012",
    email: "daniel.lopez@visioncare.com",
    address: "987 Vision Blvd, Miami, FL"
  },
  {
    id: 7,
    name: "Dr. Anna Thompson",
    appointmentTime: "9:00 AM - 5:00 PM",
    fees: "$120",
    category: "Oncologist",
    hospital: "Cancer Care Hospital",
    gender: "Female",
    image: "https://img.freepik.com/free-photo/doctor-smiling-hospital-corridor_23-2148913569.jpg",
    phone: "+1 (555) 789-0123",
    email: "anna.thompson@cancercare.com",
    address: "321 Oncology Rd, Seattle, WA"
  },
  {
    id: 8,
    name: "Dr. Liam Anderson",
    appointmentTime: "10:00 AM - 4:00 PM",
    fees: "$110",
    category: "Psychiatrist",
    hospital: "Mental Wellness Center",
    gender: "Male",
    image: "https://img.freepik.com/free-photo/doctor-smiling-hospital-corridor_23-2148913569.jpg",
    phone: "+1 (555) 890-1234",
    email: "liam.anderson@mentalwellness.com",
    address: "654 Wellness St, San Francisco, CA"
  },
  // ...continue adding more doctors up to 40 with similar details
];

export const appointments = [
  {
    user: {
      name: "John Doe",
      email: "john.doe@example.com"
    },
    appointmentTime: "10:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-10",
    doctor: {
      name: "Dr. Emily Johnson",
      hospital: "Heart Care Hospital"
    }
  },
  {
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com"
    },
    appointmentTime: "2:00 PM",
    status: "Pending",
    appointmentDate: "2024-11-12",
    doctor: {
      name: "Dr. James Carter",
      hospital: "Skin Health Clinic"
    }
  },
  {
    user: {
      name: "David Brown",
      email: "david.brown@example.com"
    },
    appointmentTime: "11:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-13",
    doctor: {
      name: "Dr. Sarah Lee",
      hospital: "City Orthopedic Hospital"
    }
  },
  {
    user: {
      name: "Emma Wilson",
      email: "emma.wilson@example.com"
    },
    appointmentTime: "3:30 PM",
    status: "Cancelled",
    appointmentDate: "2024-11-14",
    doctor: {
      name: "Dr. Michael Chen",
      hospital: "Neuro Health Institute"
    }
  },
  {
    user: {
      name: "Michael White",
      email: "michael.white@example.com"
    },
    appointmentTime: "9:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-15",
    doctor: {
      name: "Dr. Olivia Martinez",
      hospital: "Children's Hospital"
    }
  },
  {
    user: {
      name: "Sophia Clark",
      email: "sophia.clark@example.com"
    },
    appointmentTime: "4:00 PM",
    status: "Pending",
    appointmentDate: "2024-11-16",
    doctor: {
      name: "Dr. Daniel Lopez",
      hospital: "Vision Care Clinic"
    }
  },
  {
    user: {
      name: "James Evans",
      email: "james.evans@example.com"
    },
    appointmentTime: "1:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-17",
    doctor: {
      name: "Dr. Anna Thompson",
      hospital: "Cancer Care Hospital"
    }
  },
  {
    user: {
      name: "Olivia Walker",
      email: "olivia.walker@example.com"
    },
    appointmentTime: "10:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-18",
    doctor: {
      name: "Dr. Liam Anderson",
      hospital: "Mental Wellness Center"
    }
  },
  {
    user: {
      name: "Benjamin Davis",
      email: "benjamin.davis@example.com"
    },
    appointmentTime: "3:00 PM",
    status: "Pending",
    appointmentDate: "2024-11-19",
    doctor: {
      name: "Dr. Sophia Brown",
      hospital: "Endocrine Health Institute"
    }
  },
  {
    user: {
      name: "Lily Harris",
      email: "lily.harris@example.com"
    },
    appointmentTime: "9:30 AM",
    status: "Cancelled",
    appointmentDate: "2024-11-20",
    doctor: {
      name: "Dr. William Clark",
      hospital: "Lung Health Clinic"
    }
  }
];





import { tokens } from "../theme";

export const mockDataCourses = [
  {
    "id": "2",
    "title": "Data Science Fundamentals",
    "instructor_id": "instructor@example.com",
    "industry": "Data Science",
    "description": "Learn the fundamental concepts and techniques of data science, including data analysis, machine learning, and data visualization.",
    "duration": "12 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "3",
    "title": "Web Development Bootcamp",
    "instructor_id": "webdevinstructor@example.com",
    "industry": "Information Technology",
    "description": "Join our intensive bootcamp to master web development skills, including HTML, CSS, JavaScript, and frameworks like React and Node.js.",
    "duration": "6 months",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "4",
    "title": "Digital Marketing Essentials",
    "instructor_id": "marketingexpert@example.com",
    "industry": "Marketing",
    "description": "Gain a comprehensive understanding of digital marketing strategies, including SEO, SEM, social media marketing, and email marketing.",
    "duration": "8 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "5",
    "title": "Project Management Certification",
    "instructor_id": "pmcertification@example.com",
    "industry": "Business",
    "description": "Prepare for project management certification exams and learn essential project management skills, including planning, budgeting, and risk management.",
    "duration": "3 months",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "6",
    "title": "Cybersecurity Fundamentals",
    "instructor_id": "cybersecurityexpert@example.com",
    "industry": "Cybersecurity",
    "description": "Explore the core concepts of cybersecurity, including network security, cryptography, ethical hacking, and security best practices.",
    "duration": "10 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "7",
    "title": "Mobile App Development",
    "instructor_id": "mobiledevinstructor@example.com",
    "industry": "Information Technology",
    "description": "Learn to develop mobile applications for iOS and Android platforms using popular frameworks like Flutter, React Native, and Swift.",
    "duration": "6 months",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "8",
    "title": "UX/UI Design Fundamentals",
    "instructor_id": "uxuidesigner@example.com",
    "industry": "Design",
    "description": "Master the principles of user experience (UX) and user interface (UI) design, including user research, prototyping, and usability testing.",
    "duration": "12 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "9",
    "title": "Artificial Intelligence Basics",
    "instructor_id": "aiexpert@example.com",
    "industry": "Artificial Intelligence",
    "description": "Gain an introduction to artificial intelligence (AI) concepts, including machine learning, neural networks, natural language processing, and AI applications.",
    "duration": "8 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "10",
    "title": "Cloud Computing Essentials",
    "instructor_id": "cloudexpert@example.com",
    "industry": "Cloud Computing",
    "description": "Learn the fundamentals of cloud computing, including cloud architecture, deployment models, virtualization, and cloud services like AWS and Azure.",
    "duration": "10 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "11",
    "title": "Blockchain Fundamentals",
    "instructor_id": "blockchainexpert@example.com",
    "industry": "Blockchain",
    "description": "Explore the basics of blockchain technology, including distributed ledgers, smart contracts, cryptocurrencies, and blockchain applications.",
    "duration": "8 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "12",
    "title": "Business Analytics",
    "instructor_id": "analyticsinstructor@example.com",
    "industry": "Business",
    "description": "Learn to analyze business data to make informed decisions, including statistical analysis, data visualization, and predictive modeling techniques.",
    "duration": "12 weeks",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "13",
    "title": "Game Development",
    "instructor_id": "gamedevinstructor@example.com",
    "industry": "Gaming",
    "description": "Discover the fundamentals of game development, including game design, programming, graphics, and audio, using popular game engines like Unity and Unreal Engine.",
    "duration": "6 months",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "14",
    "title": "Python Programming",
    "instructor_id": "pythoninstructor@example.com",
    "industry": "Information Technology",
    "description": "Master Python programming language fundamentals, including syntax, data structures, object-oriented programming, and application development.",
    "duration": "4 months",
    "students": 20,
    "price": 199.99
  },
  {
    "id": "15",
    "title": "Financial Management",
    "instructor_id": "financeexpert@example.com",
    "industry": "Finance",
    "description": "Learn the principles of financial management, including financial planning, budgeting, investment analysis, and risk management strategies.",
    "duration": "3 months",
    "students": 20,
    "price": 200.99
  },
  {
    "id": "16",
    "title": "Human Resources Management",
    "instructor_id": "hrinstructor@example.com",
    "industry": "Human Resources",
    "description": "Explore the role of human resources in organizations, including recruitment, employee relations, performance management, and HR policies.",
    "duration": "6 weeks",
    "students": 20,
    "price": 199.99
  }
];

export const mockDataInstructors = [
  {
    "id": "60d6c47e0b5f5c6d88a7d96d",
    "name": "John Doe",
    "No_of_Courses": 5,
    "total_Students": 100,
    "total_earned": 5000.00
  },
  {
    "id": "60d6c47e0b5f5c6d88a7d96e",
    "name": "Jane Doe",
    "No_of_Courses": 3,
    "total_Students": 60,
    "total_earned": 3000.00
  },
  {
    "id": "60d6c47e0b5f5c6d88a7d96f",
    "name": "Bob Smith",
    "No_of_Courses": 7,
    "total_Students": 140,
    "total_earned": 7000.00
  }
]

export const mockDataPayments = [
  {
    "id": "60d6c47e0b5f5c6d88a7d96d",
    "user": "60d6c47e0b5f5c6d88a7d96a",
    "amount": 100.50,
    "date": "2022-03-15T12:00:00Z",
    "status": "completed"
  },
  {
    "id": "60d6c47e0b5f5c6d88a7d96e",
    "user": "60d6c47e0b5f5c6d88a7d96b",
    "amount": 200.00,
    "date": "2022-03-16T12:00:00Z",
    "status": "pending"
  },
  {
    "id": "60d6c47e0b5f5c6d88a7d96f",
    "user": "60d6c47e0b5f5c6d88a7d96c",
    "amount": 150.25,
    "date": "2022-03-17T12:00:00Z",
    "status": "failed"
  }
]

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];
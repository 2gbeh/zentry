import { ProfileDto } from "@/types/profile-dto";

export const marcelMcloyProfile:ProfileDto = {
  fullName: "Marcel Mcloy",
  birthDate: "1976-06-05",
  tel: "1(610) 557-9496",
  email: "segunalabi383@gmail.com",
  address: "227 Park Ave (Apt 3B) East Orange, New Jersey, 07017",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Princeton University, New Jersey",
    year: "2011 - 2015",
  },
  hobbies: ["Basketball", "Gym", "Reading"],
  workAuth: "Green Card Holder (GCH)",
  hourlyRate: "$60-$80/hour",
  baseSalary: "$160k-$180k/year",
  urls: {
    linkedIn: "https://www.linkedin.com/in/segun-alabi-baa17225",
    gitHub: "https://github.com/segunalabi383",
    website: "https://portfolio-segun.vercel.app",
  },
  accounts: {
    zadarma: {
      username: "22790",
      password: "OChT65anhX",
    },
  },
  careerSummaryRichText: `
Hello %recruiterName, I'm $profileName, I am based in $displayAddress.
<p></p>
I've been a Software Engineer for over 10y now, <br/>
delivering Cloud-native, AI-enabled Apps & Web Services. <br/>
<p></p>
<strong>Work History</strong> <br/>
I have had the opportunity to worked across several industries such as; <br/>
- Uber — Transport and logistics <br/>
- Scribe - Workflow automation web services <br/>
- Cognizant — AI automation web services <br/>
<p></p>
<strong>Tech Stack</strong>
As a Full-Stack Engineer, I get to work with several frameworks; <br/>
- I use TypeScript on the FE & BE <br/>
- [Angular], React Next.js & React Native for building interactive web pages and mobile apps <br/>
- And on the backend, I use Node.js NestJS, Python Django FastAPI, [C# .NET] <br/>
- For database, I reach for MongoDB, PostgreSQL, Redis Cache, [MS SQL Server] <br/>
<p></p>
<strong>CI/CD DevOps</strong>
I do also have experience setting up Cloud Deployment & Data Pipelines with; <br/>
- GitHub Actions, E2E Testing Playwright or Cypress, Docker, Kubernetes, <br/>
- AWS EC2 Instances, S3 Storage Buckets, Serverless Lambda Functions, RDS, DynamoDB, etc. <br/>
# - Azure App Service, Blob Storage, Azure Serverless Functions, Cosmos DB. <br/>
# - Google Cloud Compute Engine, Serverless Cloud Functions, Firebase Cloud Messaging, Firestore, etc ✅ <br/>
<p></p>
<strong>Certs</strong> <br/>
# AWS Solutions Architect - Associate Amazon Web Services (2022) <br/>
# TensorFlow Developer Certificate Google (2024) <br/>
# Certified Kubernetes Administrator (CKA) CNCF (2023) <br/>
`,
}

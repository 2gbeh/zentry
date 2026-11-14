import { ProfileDto } from "../types"

export const data: ProfileDto[] = [
  {
    fullName: "Segun Alabi",
    otherName: "Eniola",
    birthDate: "June 5th, 1976",
    tel: "(610)-557-9496",
    email: "segunalabi383@gmail.com",
    address: "227 Park Ave (Apt 3B) East Orange, NJ, 07017",
    weather: "19C, 66F",
    education: {
      institution: "Princeton University",
      degree: "Bachelor of Science in Computer Science",
      location: "NJ",
      duration: "09/2011 - 04/2015",
    },
    socials: {
      linkedIn: {
        avatar: "segun-alabi.png",
        url: "https://linkedin.com/in/segun-alabi-baa17225/",
      },
      github: {
        url: "https://github.com/segunalabi383",
      },
    },
    website: "https://portfolio-segun.vercel.app",
    hobbies: "Basketball, Gym, Reading",
    ssn: 669,
    gch: true,
  },
  {
    fullName: "Justin Pallay",
    email: "justinpallayleaps@gmail.com",
    address: "Hawley, PA 18428",
    education: {
      institution: "Penn State University",
      degree: "Bachelor of Science in Computer Science",
      location: "University Park, PA",
      duration: "09/2010 - 05/2014",
    },
    socials: {
      linkedIn: {
        avatar: "justin-pallay.jpg",
        url: "https://linkedin.com/in/justin-pallay",
      },
    },
    website: "https://jpallay-portfolio.vercel.app",
  },
]

import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Yogi",
  lastName: "Sahu",
  displayName: "Yogi",
  username: "yogi",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Hanumangarh, Rajasthan, India",
  phoneNumber: "NjM3NjIwNjMyOA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "eW9naWlzYWh1MjAwNUBnbWFpbC5jb20=", // base64 encoded
  website: "",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Founder",
      company: "",
      website: "https://quaric.com",
      experienceId: "quaric",
    },
  ],
  about: `
- Developer passionate about creating clean and functional web experiences.
- Enthusiast of open source and modern web technologies.
`,  
  avatar: "/r/avatar.JPG",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=8",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "yogi",
    "yogi sahu",
    "yogisahu",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}

const CONFIG = {
  // profile setting (required)
  profile: {
    name: "doyoon song",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend & data engineer",
    bio: "Student Developer",
    email: "sd990307@gm.gist.ac.kr",
    linkedin: "",
    github: "SongDerrick",
    instagram: "doyo_onee",
  },
  projects: [
    {
      name: `Web crawler and Automation Program`,
      href: "https://doyoonsong.vercel.app/pythoncrawler",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Doyoon Song",
    description: "welcome to doyoon's blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://doyoonlog.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Doyoon", "Website", "Notion", "Developer", "GIST", "Data Engineering", "Problem Solving", "Baekjoon", "백준", "머신러닝", "딥러닝", "Machine Learning", "Deep Learning"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "SongDerrick/doyoonlog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://yogiisahu.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Sponsors",
    href: "/sponsors",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@yogiisahu"
export const GITHUB_USERNAME = "yogiisahu"
export const SOURCE_CODE_GITHUB_REPO = "yogiisahu/portfoolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/yogiisahu/portfoolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/yogiisahu"

export const UTM_PARAMS = {
  utm_source: "yogiisahu.com",
}

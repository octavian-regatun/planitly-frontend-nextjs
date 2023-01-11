export function getNavbarTitle(url: string) {
  switch (url) {
    case "/dashboard":
      return "Dashboard";
    case "/calendar":
      return "Calendar";
    case "/settings":
      return "Settings";
    case "/social":
      return "Social";
    default:
      return "Page Title";
  }
}

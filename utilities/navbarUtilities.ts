export function getNavbarTitle(url: string) {
  switch (url) {
    case "/dashboard":
      return "Dashboard";
    case "/calendar":
      return "Calendar";
    default:
      return "Page Title";
  }
}

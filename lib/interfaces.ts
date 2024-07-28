export interface NavItem {
  title: string;
  route: string;
  routes: Route[];
}

export interface Route {
  route: string;
  path: string;
}
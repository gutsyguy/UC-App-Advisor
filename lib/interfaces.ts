export interface NavItem {
  title: string;
  routes: Route[];
}

export interface Route {
  route: string;
  path: string;
}
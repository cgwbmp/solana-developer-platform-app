import { WORKSPACE_LOADING_PATH } from "./workspace-loading";

export const AUTH_ENTRY_PATH = "/sign-in";

function matchesRoute(pathname: string, route: string): boolean {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export async function getAuthEntryPath(): Promise<string> {
  return AUTH_ENTRY_PATH;
}

// The homepage is left out: it reads the session only on the server (`auth()` through the
// middleware), so the client SDK and Clerk's CDN scripts would be weight it never uses.
export async function shouldLoadClerkForPath(pathname: string): Promise<boolean> {
  return (
    pathname === WORKSPACE_LOADING_PATH ||
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/") ||
    pathname === "/allowlist" ||
    pathname.startsWith("/allowlist/") ||
    pathname === "/members" ||
    pathname.startsWith("/members/") ||
    matchesRoute(pathname, "/sign-in") ||
    matchesRoute(pathname, "/sign-up")
  );
}

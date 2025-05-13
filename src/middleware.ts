import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

// Update the matcher to include all your locales
export const config = {
  matcher: ["/", "/(en|zh|fr|de|ru|ja|hi|tl|nl|ko)/:path*"],
};

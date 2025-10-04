import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Handle root path redirect
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // Basic locale validation using static locales
  // Dynamic locale validation will happen on the client side
  const pathSegments = request.nextUrl.pathname.split('/');
  const requestedLocale = pathSegments[1];
  
  if (requestedLocale && !routing.locales.includes(requestedLocale)) {
    // If locale is not in static list, redirect to default locale
    const url = request.nextUrl.clone();
    url.pathname = url.pathname.replace(`/${requestedLocale}`, `/${routing.defaultLocale}`);
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

// Static matcher
export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

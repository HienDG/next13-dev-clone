import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { SIGN_IN_URL, SIGN_UP_URL } from "@src/utils/constants";

export async function middleware(request: NextRequest) {
   const sessionToken = request.cookies.get("next-auth.session-token");

   const pathname = request.nextUrl.pathname;

   if (sessionToken?.value && pathname.startsWith(SIGN_UP_URL))
      return NextResponse.redirect(new URL("/", request.url));

   if (sessionToken?.value && pathname.startsWith(SIGN_IN_URL))
      return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
   matcher: ["/sign-in", "/sign-up"],
};

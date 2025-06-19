"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const webUrl = process.env.NEXT_APP_BACKEND || "http://localhost:3000";
console.log(webUrl);

const middleware = async (req: Request) => {
  try {
    const requestedUrl = req.url;
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (!requestedUrl) return NextResponse.next();

    // Admin route protection
    if (requestedUrl.includes("dashboard")) {
      if (!token?.value) {
        if (!requestedUrl.includes("/admin-login")) {
          return NextResponse.redirect(`${webUrl}/admin-login`);
        }
        return NextResponse.next();
      }

      const validateAdmin = await fetch(`${webUrl}/api/v1/admin`, {
        cache: "no-store",
        method: "GET",
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      });

      if (!validateAdmin.ok) {
        if (!requestedUrl.includes("/admin-login")) {
          return NextResponse.redirect(`${webUrl}/admin-login`);
        }
        return NextResponse.next();
      }

      return NextResponse.next();
    }

    // Profile and accountant route protection
    if (
      requestedUrl.includes("profile") ||
      requestedUrl.includes("accountant")
    ) {
      if (!token?.value) {
        if (!requestedUrl.includes("/login")) {
          return NextResponse.redirect(`${webUrl}/login`);
        }
        return NextResponse.next();
      }

      const validateStaff = await fetch(`${webUrl}/api/v1/staff-login`, {
        cache: "no-store",
        method: "GET",
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      });

      if (!validateStaff.ok) {
        if (!requestedUrl.includes("/login")) {
          return NextResponse.redirect(`${webUrl}/login`);
        }
        return NextResponse.next();
      }

      const userData = await validateStaff.json();
      console.log(userData);

      if (
        requestedUrl.includes("accountant") &&
        userData?.role === "accountant"
      ) {
        return NextResponse.next();
      } else if (requestedUrl.includes("profile")) {
        if (!requestedUrl.includes("/profile")) {
          return NextResponse.redirect(`${webUrl}/profile`);
        }
        return NextResponse.next();
      } else {
        return NextResponse.redirect(`${webUrl}/login`);
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Middleware error:", err);
    return NextResponse.redirect(`${webUrl}/admin-login`);
  }
};

export default middleware;

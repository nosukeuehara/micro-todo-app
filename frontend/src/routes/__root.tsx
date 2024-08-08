import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

// Create a client

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/user" className="[&.active]:font-bold">
          User
        </Link>
      </div>
      <div>
        <Link to="/user">Hello</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

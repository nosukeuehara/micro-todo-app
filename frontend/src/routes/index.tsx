import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import React from "react";
import { FetchData, useFetchData } from "../hooks/useFetchData";

export const Route = createFileRoute("/")({
  component: () => <Page />,
});

function Page() {
  const [data, loading] = useFetchData<FetchData>();
  return (
    <div>
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
      {loading ? <div>Loading...</div> : <div>{data!.message}</div>}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/user")({
  component: User,
});

function User() {
  return <div>Hello User!</div>;
}

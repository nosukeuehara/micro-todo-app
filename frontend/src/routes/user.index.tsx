import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/user/")({
  component: UserIndexComponents,
});

function UserIndexComponents() {
  return <div>Hello uesr model</div>;
}

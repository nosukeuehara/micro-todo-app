import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/user/$nosuke")({
  component: () => <div>Hello /user/$nosuke!</div>,
});

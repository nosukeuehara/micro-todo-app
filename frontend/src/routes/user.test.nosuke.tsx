import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/user/test/nosuke")({
  component: () => <div>Hello /user/test/nosuke!</div>,
});

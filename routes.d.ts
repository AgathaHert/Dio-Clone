import type { ReactElement } from "react";
import type { BrowserRouter, Routes } from "react-router-dom";

interface RouteDefinition {
  path: string;
  element: ReactElement;
}

declare const router: Routes;

export default router as BrowserRouter<RouteDefinition>;

import type { ReactElement } from "react";
import type { BrowserRouter, Routes } from "react-router-dom";

interface RouteDefinition {
  path: string;
  element: ReactElement;
}

// Exemplo de configuração básica de router
declare const router: Routes; // Adjust this to match your router configuration

export default router as BrowserRouter<RouteDefinition>;

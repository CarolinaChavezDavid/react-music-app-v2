"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { DashboardPage } from "./dashboard/DashboardPage";

config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <DashboardPage />
    </main>
  );
}

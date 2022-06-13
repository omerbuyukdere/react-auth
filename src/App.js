import * as React from "react";
import Routes from "./routes/Routes";

import { AuthProvider } from "./context/AuthCreateContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

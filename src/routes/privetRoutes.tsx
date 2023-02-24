import Track from "../components/dashboard/Track";
import Analytics from "../pages/dashboard/Analytics";
import FileManager from "../pages/dashboard/FileManager";
import Others from "../pages/dashboard/Others";
import Saved from "../pages/dashboard/Saved";
import Settings from "../pages/dashboard/Settings";

/* ============= admin Dashboard Routes ================= */
export const adminDashboardRoutes = [
  { name: "dashboard", path: "dashboard", Component: Track },
  { name: "analytics", path: "analytics", Component: Analytics },
  { name: "settings", path: "settings", Component: Settings },
  { name: "fileManger", path: "file-manager", Component: FileManager },
  { name: "saved", path: "saved", Component: Saved },
  { name: "others", path: "others", Component: Others },
];

import Destination from "../Destination";
import Crew from "../Crew";
import Technology from "../Technology";

export const router = [
  {
    path: "destination",
    element: <Destination />,
  },
  {
    path: "crew",
    element: <Crew />,
  },
  {
    path: "Technology",
    element: <Technology />
  }
];
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex max-w-7xl justify-center px-6 py-10 xl:mx-auto">
      <PropagateLoader color="#e9e3dd90" loading />
    </div>
  );
}

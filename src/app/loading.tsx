import { PropagateLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="max-w-7xl xl:mx-auto px-6 flex justify-center py-10">
      <PropagateLoader color="#e9e3dd90" loading />
    </div>
  );
};
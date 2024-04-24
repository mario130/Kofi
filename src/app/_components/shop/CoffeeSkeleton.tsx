export default function CoffeeSkeleton() {
  return (
    Array.from({ length: 6 }).map((_, index) => (
      <div key={index}>
        <div className="animate-pulse bg-[#e9e3dd] h-80 w-full rounded-lg" />
        <div className="animate-pulse bg-[#e9e3dd] h-5 w-1/4 mt-2 rounded-lg" />
        <div className="animate-pulse bg-[#e9e3dd] h-5 w-full mt-2 rounded-lg" />
      </div>
    ))
  )
}

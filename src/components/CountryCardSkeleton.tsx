import Skeleton from "./Skeleton"

export default function CountryCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <Skeleton className="h-28 w-full" />

      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  )
}

import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="container mx-auto">
                {/* Hero skeleton */}
                <div className="mb-16">
                    <Skeleton className="h-96 w-full rounded-2xl mb-6" />
                </div>

                {/* Stats skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="glass-card p-6 rounded-xl">
                            <Skeleton className="h-12 w-12 mb-4 rounded-full" />
                            <Skeleton className="h-8 w-20 mb-2" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>

                {/* Skills skeleton */}
                <div className="mb-16">
                    <Skeleton className="h-10 w-48 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="glass-card p-6 rounded-xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <Skeleton className="w-12 h-12 rounded-lg" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-5 w-2/3" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio skeleton */}
                <div className="mb-16">
                    <Skeleton className="h-10 w-48 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="glass-card p-6 rounded-xl">
                                <Skeleton className="h-48 w-full rounded-lg mb-4" />
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

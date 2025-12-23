"use client";

interface SkeletonProps {
    className?: string;
}

export const Skeleton = ({ className = "" }: SkeletonProps) => {
    return (
        <div 
            className={`animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] rounded ${className}`}
            style={{ animation: "shimmer 2s infinite" }}
        />
    );
};

export const PortfolioCardSkeleton = () => {
    return (
        <div className="glass-card p-6 rounded-2xl space-y-4">
            <Skeleton className="w-full h-48 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
            </div>
            <div className="flex gap-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    );
};

export const SkillCardSkeleton = () => {
    return (
        <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="flex-1 space-y-3">
                    <Skeleton className="h-5 w-2/3" />
                    <div className="flex gap-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-16" />
                    </div>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-2 w-full" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AchievementSkeleton = () => {
    return (
        <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-6">
                <Skeleton className="w-40 h-40 rounded-2xl" />
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>
        </div>
    );
};

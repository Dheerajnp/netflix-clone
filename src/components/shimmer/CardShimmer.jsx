const CardShimmer = () => {
    return (
        <div
            role="status"
            className="h-36 w-56 animate-pulse border-gray-200 p-4 shadow hover:scale-150 dark:border-gray-700 transition-all ease-in-out duration-500 ml-1.5 mb-6"
        >
            <div className="flex h-36 w-56 items-center justify-center rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
    );
};

export default CardShimmer;
const Fallback = () => (
    <div className="container p-6 max-w-4xl py-24 text-center space-y-4">
        <div className="flex justify-center">
            <img
                src="/logo-light.png"
                alt="Loading"
                className="w-48 h-48 hidden dark:block"
            />
            <img
                src="/logo-dark.png"
                alt="Loading"
                className="w-48 h-48 dark:hidden"
            />
        </div>
        <h1 className="text-3xl font-bold">Loading...</h1>
    </div>
);

export default Fallback;

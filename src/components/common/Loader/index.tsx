const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-dark">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-green border-t-transparent"></div>
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
        Chargement en cours, veuillez patienter...
      </p>
    </div>
  );
};

export default Loader;

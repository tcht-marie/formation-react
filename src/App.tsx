import { useSuspenseQuery } from "@tanstack/react-query";
import styles from "./app.module.css";
import { getContrats } from "./services/contrats";
import { ErrorBoundary } from "react-error-boundary";

function AppContent() {
  const { data: contrats } = useSuspenseQuery({
    queryKey: ["contrats"],
    queryFn: getContrats,
  });

  //if (isLoading) return <div>Loading...</div>;

  //if (error) return <div>Error, sorry</div>;

  return (
    <div className={styles.main}>
      {contrats?.length === 0 ? (
        <div>No contrats found</div>
      ) : (
        contrats?.map((contrat) => (
          <div key={contrat.username} className={styles.container}>
            <h2 className={styles.username}>{contrat.username}</h2>
            <p className={styles.title}>Contrat : {contrat.title}</p>
            <p className={styles.description}>{contrat.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

// const AppLoading = () => <div>Loading...</div>;

const AppError = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => <div onClick={resetErrorBoundary}>Something went wrong in App</div>;

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      {/* <Suspense fallback={<AppLoading />}> */}
      <AppContent />
      {/* </Suspense> */}
    </ErrorBoundary>
  );
};

export default App;

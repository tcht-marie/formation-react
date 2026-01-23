import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import styles from "./contrats.module.css";
import { createContrat, getContrats } from "../services/contrats";
import { ErrorBoundary } from "react-error-boundary";
import FormContrat from "../features/contrats/FormContrat";
import type { Contrat } from "../types";
import { Link } from "react-router";
import Button from "../components/Button";

function AppContent() {
  const queryClient = useQueryClient();

  const { data: contrats } = useSuspenseQuery({
    queryKey: ["contrats"],
    queryFn: getContrats,
  });

  const { mutate: fetchContrat } = useMutation({
    mutationFn: createContrat,
    onSuccess: (newContrat) => {
      queryClient.setQueryData(["contrats"], (prev: Contrat[]) => [
        ...prev,
        newContrat,
      ]);
    },
  });

  return (
    <div className={styles.main}>
      <FormContrat onSubmit={fetchContrat} />

      {contrats?.length === 0 ? (
        <div>No contrats found</div>
      ) : (
        contrats?.map((contrat) => (
          <div key={contrat.id} className={styles.container}>
            <div>
              <h2 className={styles.username}>{contrat.username}</h2>
              <p className={styles.title}>Contrat : {contrat.title}</p>
              <p className={styles.description}>{contrat.description}</p>
            </div>
            <div>
              <Link to={`/contrats/edit/${contrat.id}`}>
                <Button type="button">Edit</Button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const AppError = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => <div onClick={resetErrorBoundary}>Something went wrong in App</div>;

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <AppContent />
    </ErrorBoundary>
  );
};

export default App;

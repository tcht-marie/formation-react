import { updateContrat } from "../services/contrats";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import FormContrat from "../features/contrats/FormContrat";
import type { Contrat } from "../types";

const Edit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate: fetchUpdateContrat } = useMutation({
    mutationFn: updateContrat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contrats", id] });
    },
  });

  const handleSubmit = (contrat: Omit<Contrat, "id"> | Contrat) => {
    fetchUpdateContrat({ ...contrat, id } as Contrat);
    navigate("/");
  };

  return <FormContrat onSubmit={handleSubmit} />;
};

export default Edit;

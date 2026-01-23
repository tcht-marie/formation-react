import type { Contrat } from "../types";
import { myFetch } from "../utils/api";

export const getContrats = () => myFetch<Contrat[]>("/contrats");

export const getOneContrat = (id: number) =>
  myFetch<Contrat>(`/contrats/${id}`);

export const createContrat = (contrat: Omit<Contrat, "id">) => {
  console.log(contrat);
  return myFetch<Contrat>("/contrats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contrat),
  });
};

export const updateContrat = (contrat: Contrat) =>
  myFetch<Contrat>(`/contrats/${contrat.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contrat),
  });

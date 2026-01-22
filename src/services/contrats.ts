import type { Contrat } from "../types";
import { myFetch } from "../utils/api";

export const getContrats = () => myFetch<Contrat[]>("/contrats");

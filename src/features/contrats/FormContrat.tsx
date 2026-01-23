import { useForm } from "react-hook-form";
import type { Contrat } from "../../types";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContratSchema } from "./FormContratSchema";
import styles from "./form.module.css";

type FormContratProps = {
  onSubmit: (e: Omit<Contrat, "id"> | Contrat) => void;
  initialContrat?: Contrat;
};

const FormContrat = ({ onSubmit, initialContrat }: FormContratProps) => {
  const form = useForm<Omit<Contrat, "id">>({
    resolver: zodResolver(ContratSchema),
    defaultValues: {
      title: initialContrat?.title ?? "Habitation",
      username: initialContrat?.username ?? "",
      description: initialContrat?.description ?? "",
    },
  });

  const errors = form.formState.errors;

  const handleSubmit = (data: Omit<Contrat, "id">) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className={styles.form}>
      <label className={styles.label}>
        Title
        <select
          defaultValue={initialContrat?.title}
          {...form.register("title", { required: true })}
          className={`${styles.input} ${styles.select}`}
        >
          <option value="Habitation">Habitation</option>
          <option value="VAM">VAM</option>
          <option value="Santé">Santé</option>
        </select>
      </label>
      {errors.title ? <span>{errors.username?.message}</span> : null}
      <label className={`${styles.label}`}>
        Username
        <input
          defaultValue={initialContrat?.username}
          {...form.register("username", { required: true })}
          className={styles.input}
        />
      </label>
      {errors.username ? (
        <span className={styles.error}>This field is required</span>
      ) : null}
      <label className={styles.label}>
        Description
        <textarea
          defaultValue={initialContrat?.description}
          {...form.register("description", { required: true })}
          className={styles.input}
        />
      </label>
      {errors.description ? (
        <span className={styles.error}>This field is required</span>
      ) : null}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormContrat;

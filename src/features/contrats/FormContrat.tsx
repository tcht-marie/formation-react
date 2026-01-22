import { useForm } from "react-hook-form";
import type { Contrat } from "../../types";
import Button from "../../components/Button";

const FormContrat = () => {
  const form = useForm<Omit<Contrat, "id">>({
    defaultValues: {
      title: "",
      username: "",
      description: "",
    },
  });

  const handleSubmit = (data: Omit<Contrat, "id">) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div>
        <label>Title</label>
        <input {...form.register("title", { required: true })} />
      </div>
      <div>
        <label>Username</label>
        <input {...form.register("username", { required: true })} />
      </div>
      <div>
        <label>Description</label>
        <textarea {...form.register("description", { required: true })} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormContrat;

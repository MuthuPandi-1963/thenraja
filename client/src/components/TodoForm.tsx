import type { todoType } from "@/interface/todo.interface";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface todoFormProps {
  handleSubmit: (e: React.FormEvent) => void,
  formData: todoType,
  setFormData: (formData: todoType) => void
}

export default function TodoForm(
  {
    formData,
    setFormData,
    handleSubmit,
  }:
    todoFormProps
) {
  return (
    <div className="">
      <form className="grid gap-3" onSubmit={handleSubmit}>
        <Label htmlFor="name">Name<span className="text-red-500">*</span></Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter a name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

        <Label htmlFor="des">Description (optional)</Label>
        <Textarea
          id="des"
          name="des"
          placeholder="Enter a description"
          rows={4}
          cols={10}
          value={formData.des}
          onChange={(e) => setFormData({ ...formData, des: e.target.value })}
        />

        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  )
}

import { useState } from "react";

function TareaForm({ onAgregar }) {
  const [tarea, setTarea] = useState({ titulo: "", descripcion: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tarea.titulo.trim()) return;
    onAgregar(tarea);
    setTarea({ titulo: "", descripcion: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-3">
      <input
        type="text"
        placeholder="Título"
        value={tarea.titulo}
        onChange={(e) => setTarea({ ...tarea, titulo: e.target.value })}
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={tarea.descripcion}
        onChange={(e) => setTarea({ ...tarea, descripcion: e.target.value })}
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaForm;

import { useState, useEffect } from "react";
import axios from "axios";
import TareaList from "./components/TareaList";
import TareaForm from "./components/TareaForm";

const API_URL = "http://localhost:8080/api/tareas";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    const res = await axios.get(API_URL);
    setTareas(res.data);
  };

  const agregarTarea = async (tarea) => {
    const res = await axios.post(API_URL, { ...tarea, completada: false });
    setTareas([...tareas, res.data]);
  };

  const eliminarTarea = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">📋 ToDo App</h1>
        <TareaForm onAgregar={agregarTarea} />
        <TareaList tareas={tareas} onEliminar={eliminarTarea} />
      </div>
    </div>
  );
}

export default App;

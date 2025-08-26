function TareaList({ tareas, onEliminar }) {
  return (
    <ul className="space-y-3">
      {tareas.map((t) => (
        <li
          key={t.id}
          className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-gray-50"
        >
          <div>
            <p className="font-semibold">{t.titulo}</p>
            <p className="text-sm text-gray-600">{t.descripcion}</p>
          </div>
          <button
            onClick={() => onEliminar(t.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TareaList;

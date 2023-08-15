import React from 'react';
import useCreateTask from './useCreateTask';

const CreateTask = () => {
    const {  title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        assignedTo,
        setAssignedTo,
        handleSubmit,
        errors,} = useCreateTask();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow ">
        <h2 className="text-2xl font-bold mb-4">Crear Nueva Tarea</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Título:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
             {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Descripción:</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
             {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Estado:</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pendiente</option>
              <option value="completed">Completada</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Asignado a:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
             {errors.assignedTo && <p className="text-red-500 text-sm mt-1">{errors.assignedTo}</p>}
          </div>
          <button
            type="submit"
            className="w-full border-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Crear Tarea
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;



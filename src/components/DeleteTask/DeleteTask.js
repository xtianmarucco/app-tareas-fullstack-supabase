import React from 'react';
import TaskDeleteLogic from './TaskDeleteLogic';

const DeleteTask = ({ taskId, onDelete }) => {
  const { showModal, setShowModal, handleDelete } = TaskDeleteLogic({ taskId, onDelete });

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="text-white p-2 pl-5 pr-5 mt-3 bg-red-600 rounded-full">Eliminar</button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Confirmar eliminación</h2>
            <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowModal(false)} className="m-2 text-white p-2 pl-5 pr-5 mt-3 bg-blue-600 rounded-full">Cancelar</button>
              <button onClick={handleDelete} className="m-2 text-white p-2 pl-5 pr-5 mt-3  bg-red-600 rounded-full">Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteTask;


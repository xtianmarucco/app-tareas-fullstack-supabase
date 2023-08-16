import  { useState } from 'react';
import supabase from '../../config/supabaseClient';

const TaskDeleteLogic = ({ taskId, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await supabase.from('tasks').delete().eq('id', taskId);
      onDelete(); // Llama a la función pasada como prop para actualizar la lista de tareas
      setShowModal(false); // Cierra el modal después de la eliminación
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return {
    showModal,
    setShowModal,
    handleDelete,
  };
};

export default TaskDeleteLogic;

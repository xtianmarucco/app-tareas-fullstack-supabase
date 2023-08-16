import { useEffect, useState } from 'react';
import supabase from '../../config/supabaseClient';

const useFetch = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    supabase
      .from('tasks')
      .select('*')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error);
      });
  };

  const deleteTask = async (taskId) => {
    try {
      await supabase.from('tasks').delete().eq('id', taskId);
      fetchTasks(); // Actualizar la lista después de la eliminación
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    deleteTask,
  };
};

export default useFetch;

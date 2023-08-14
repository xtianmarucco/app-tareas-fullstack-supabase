import React, { useState, useEffect } from 'react';
import SmootieCard from './SmoothieCard'
import supabase from '../config/supabaseClient'; // Ajusta la ruta si es necesario

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Realizar la solicitud para obtener las tareas
    supabase
      .from('tasks') // Utilizar el nombre de la tabla en Supabase
      .select('*')
      .then(response => {
        setTasks(response.data); // Actualizar el estado con las tareas obtenidas
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error);
      });
  }, []);
console.log(tasks);
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <SmootieCard >
            <h2>{task.title}</h2>
            <h5>{task.description}</h5>
            <strong>{task.status}</strong>
          </SmootieCard>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

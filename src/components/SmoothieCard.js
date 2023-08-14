import React, { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient'; 

  const SmoothieCard = ({ smoothie }) => {
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



  return (

  
    <div className="smoothie-card">
      {tasks.map(task => (
      < >
        <h2>{task.title}</h2>
        <h5>{task.description}</h5>
        <strong>{task.status}</strong>
      </>
    ))}
  
    </div>
  )
}

export default SmoothieCard
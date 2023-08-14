import { useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'


const useFetch = () => {
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
      return { tasks}
}
export default useFetch;




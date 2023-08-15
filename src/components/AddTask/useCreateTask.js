import { useState } from 'react';
import supabase from '../../config/supabaseClient'; // Ajusta la ruta si es necesario

const useCreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [assignedTo, setAssignedTo] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'El título es requerido';
    }

    if (!description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    if (!assignedTo.trim()) {
      newErrors.assignedTo = 'El campo "Asignado a" es requerido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { data, error } = await supabase.from('tasks').insert([
        { title, description, status, assigned_to: assignedTo }
      ]);

      if (error) {
        console.error('Error al crear la tarea:', error);
      } else {
        console.log('Tarea creada exitosamente:', data);
        setTitle('');
        setDescription('');
        setStatus('pending');
        setAssignedTo('');
        setErrors({});
      }
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    assignedTo,
    setAssignedTo,
    handleSubmit,
    errors,
  };
};

export default useCreateTask;

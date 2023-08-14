import React, { useState } from 'react';
import supabase from '../../config/supabaseClient'; // Ajusta la ruta si es necesario

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('tasks').insert([
        { title, description, status: 'pending' }
      ]);

      if (error) {
        console.error('Error al crear la tarea:', error);
      } else {
        console.log('Tarea creada exitosamente:', data);
        // Limpia los campos después de la creación exitosa
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;

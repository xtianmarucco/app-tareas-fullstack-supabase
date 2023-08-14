import useFetch from "./useFetch";
const TaskCard = () => {
  const { tasks } = useFetch();

  return (
   <>
    {
      tasks.map(task => 
        (
          <div className="smoothie-card">
          <h2>{task.title}</h2>
          <h5>{task.description}</h5>
          <strong> {task.status}</strong>
        </div>
        ))
    }
 </>
  );
};

export default TaskCard;

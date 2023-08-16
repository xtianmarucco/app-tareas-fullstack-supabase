import useFetch from "./useFetch";
import DeleteTask from "../DeleteTask/DeleteTask";


const TaskCard = () => {
  const { tasks, deleteTask } = useFetch();
  
  console.log(tasks)

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="border-2 rounded-md m-4 p-4 w-1/2 shadow mx-auto">
          <div className="border-gray-400 bg-white flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {task.title}
              </div>
              <p className="text-black-700 text-base">{task.description}</p>
            </div>
          </div>
          <p className="text-black-700 text-base">{task.status}</p>

          <strong>{task.assigned_to}</strong>
          <div><DeleteTask taskId={task.id} onDelete={() => deleteTask(task.id)} /></div>
        </div>
      ))}
    </>
  );
};

export default TaskCard;

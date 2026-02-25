// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {

  function toggleTask(id) {
    onMutateCourse(course.id, {
      tasks: course.tasks.map(task =>
        task.id === id
          ? { ...task, isDone: !task.isDone }
          : task
      )
    });
  }

  function deleteTask(id) {
    onMutateCourse(course.id, {
      tasks: course.tasks.filter(task => task.id !== id)
    });
  }

  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3 — Show badge only when all tasks are done */}
        {allDone && <span className="badge">All caught up</span>}
      </header>

      <section className="tasksSection">

        {/* Show message when no tasks exist */}
        {!hasTasks && <p className="empty">No tasks yet.</p>}
        
        <ul className="tasks">
          {/* TASK 2 — Render tasks */}
          {course.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
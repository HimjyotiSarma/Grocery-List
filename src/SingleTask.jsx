import { useState } from 'react'

export default function SingleTask({ task, handleDelete, editItems }) {
  const [isChecked, setIsChecked] = useState(task.completed)
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => editItems(task.id)}
      />
      <p
        style={{
          fontVariant: 'small-caps',
          textTransform: 'capitalize',
          textDecoration: task.completed == true && 'line-through',
        }}
      >
        {task.name}
      </p>
      <button className="btn remove-btn" onClick={() => handleDelete(task.id)}>
        Delete
      </button>
    </div>
  )
}

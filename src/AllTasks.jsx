import { useState } from 'react'
import SingleTask from './SingleTask'
import { nanoid } from 'nanoid'

export default function AllTasks({ tasks, handleDelete, editItems }) {
  return (
    <div className="items">
      {tasks.map((task) => {
        return (
          <SingleTask
            key={nanoid()}
            task={task}
            handleDelete={handleDelete}
            editItems={editItems}
          />
        )
      })}
    </div>
  )
}

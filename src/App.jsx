import Form from './Form'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import AllTasks from './AllTasks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getLocalStorage = () => {
  let lists = localStorage.getItem('lists')
  if (lists) {
    lists = JSON.parse(lists)
  } else {
    lists = []
  }
  return lists
}

const setLocalStorage = (items) => {
  localStorage.setItem('lists', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  const addItem = (item) => {
    const newItem = {
      name: item,
      id: nanoid(),
      completed: false,
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the List')
  }
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id != id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item removed successfully')
  }
  const editItems = (itemID) => {
    let newItems = items.map((item) => {
      if (item.id == itemID) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <AllTasks
        tasks={items}
        handleDelete={handleDelete}
        editItems={editItems}
      />
      <ToastContainer position="top-center" />
    </section>
  )
}

export default App

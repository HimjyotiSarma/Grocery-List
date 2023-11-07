import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Form({ addItem }) {
  const [newItem, setNewItem] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) {
      toast.error('Provide details in the field')
      return
    }
    addItem(newItem)
    setNewItem('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery List</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          name="item"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  )
}

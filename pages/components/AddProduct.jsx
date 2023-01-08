import { useState } from "react"
import { useDispatch } from "react-redux"
import { update } from "../features/productSlice"

function AddProduct() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()

  const updateProduct = (e) => {
    e.preventDefault()
    dispatch(update({title, price}))
  }
  return (
    <div>
      <form onSubmit={updateProduct} className="box mt-5">
        <div className="field">
          <label className="label">Title</label>
          <input type="text" className="input" placeholder="Title" 
          value={title}
          onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input type="text" className="input" placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="field">
          <button type="submit" className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
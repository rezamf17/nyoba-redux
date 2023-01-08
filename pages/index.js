
import AddProduct from "./components/AddProduct"
import ShowProduct from "./components/ShowProduct"

export default function Home() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProduct />
        </div>
      </div>
    </div>
  )
}

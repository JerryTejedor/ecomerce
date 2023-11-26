import Hero from "../Components/Hero/Hero"
import NewCollections from "../Components/NewCollections/NewCollections"
import NewLetter from "../Components/NewsLetter/NewLetter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popuar/Popular"
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <NewLetter/>
    </div>
  )
}

export default Shop
import React from "react"

const ProductContext = React.createContext({
  list: [],
  setList: () => {},
})

export default ProductContext
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://secret-falls-82494.herokuapp.com/cloth")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}
export default useProducts;
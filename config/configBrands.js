import axios from "axios"

const configBrands = async () => {
    const { data } = await axios.get("http://localhost:3000/brands")
    return data
}

export default configBrands
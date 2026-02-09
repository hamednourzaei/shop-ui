import axios from "axios"

const configProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/Products")
    return data
}

export default configProducts
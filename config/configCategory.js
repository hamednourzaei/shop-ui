import axios from "axios"

const configCategory = async () => {
    const { data } = await axios.get("http://localhost:3000/Category")
    return data
}

export default configCategory
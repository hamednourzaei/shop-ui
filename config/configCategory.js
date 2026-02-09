import axios from "axios"

const configCategory = async () => {
    const { data } = await axios.get("https://hamednourzaei.github.io/mock-data-of-shop-ui/db-shop-ui/db.json")
    return data
}

export default configCategory
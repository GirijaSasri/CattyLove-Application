import CONSTANTS from "./Constants"

const getAdminHeader = () => {
    const token = localStorage.getItem(CONSTANTS.adminTokenKey)
    return token ? { 'x-jwt-token': token } : undefined
}

export default getAdminHeader
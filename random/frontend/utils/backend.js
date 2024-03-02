import axios from 'axios'


export async function getComments(fact) {
    const { data } = await axios.get(`/api/comments/${fact}`)
    return data
}



/* AUTHENTICATION REQUESTS
------------------------------------------------------------------------ */
export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}

/* AUTHORIZATION REQUESTS
------------------------------------------------------------------------ */

export async function postComment(comment) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/comments', comment, authHeader)
    return data
}

export async function updateComment(comment, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/comments/${id}`, comment, authHeader)
    return data
}

export async function deleteComment(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/comments/${id}`, authHeader)
    return data
}

export async function getFavorites() {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/favorites`, authHeader)
    return data
}

export async function postFavorite(favorite) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/favorites', favorite, authHeader)
    return data
}

export async function deleteFavorite(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/favorites/${id}`, authHeader)
    return data
}
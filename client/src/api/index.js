import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const getPlayers = (metric, order, payload) => api.get(`/getplayers/${metric}/${order}`, payload)
export const insertPlayer = (payload) => api.post(`/createplayer`, payload)
export const updatePlayerById = (id, payload) => api.put(`/updateplayer/${id}`, payload)
export const deletePlayerById = (id) => api.delete(`/player/${id}`)
export const getPlayerById = (id) => api.get(`/player/${id}`)

const apis = {
    getPlayers,
    insertPlayer,
    updatePlayerById,
    deletePlayerById,
    getPlayerById,
}

export default apis

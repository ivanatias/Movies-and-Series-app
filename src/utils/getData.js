import axios from 'axios'
import { API } from './helpers'

export const getData = async ({ endpoint, signal }) => {
  const { data } = await axios.get(API + endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8'
    },
    signal
  })
  return data
}

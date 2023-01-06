import axios from 'axios'

const API = 'https://api.themoviedb.org/3'

export const getData = async endpoint => {
  const { data } = await axios.get(API + endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return data
}

import { useState, useEffect } from 'react'
import axios from 'axios'


const link = "https://dummyjson.com";

const useGetData = (url,initialState = []) => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data } = await axios.get(`${link}${url}`)
      console.log(data,"hook");
      setData(data)
      setLoading(false)
    }
    getData()
  }, [url])
  return [data, loading]
}

export default useGetData
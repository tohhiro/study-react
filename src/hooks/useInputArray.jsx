import { useCallback, useState } from "react"

export const useInputArray = () => {
  const [text, setText] = useState("")
  const [array, setArray] = useState([])

  const handleChange = useCallback((e) =>{
    setText(e.target.value.trim())
  },[text])

  const handleAdd = useCallback(()=>{
    setArray(prevArray => {
      if(prevArray.includes(text)){
        alert('同じ要素が存在します。')
        return prevArray
      }
      return [...prevArray,text]
    })
  },[text])
  return {text, array, handleChange, handleAdd}
}
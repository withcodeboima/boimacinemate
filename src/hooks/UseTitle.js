import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() =>{
        document.title = `${title} / Cinemate`;
      })
  return null
}

export default UseTitle
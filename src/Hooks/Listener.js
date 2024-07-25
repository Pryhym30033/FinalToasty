import React, { useCallback } from "react";

function Listener (callback){
    React.useEffect(() =>{
        function pressed(event){
          if(event.code === 'Escape'){
            callback(event)
          }
        }
        window.addEventListener('keyup', pressed);
        return () => {
          window.removeEventListener('keyup', pressed);
        }
      
      }, [callback]);
}

export default Listener;
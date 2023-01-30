import React from "react";

/* NO ES COMUN PERO ES VALIDO
const Data = ({value}) => {
    console.log("Otra vez me cargue");
  return (
    <p>
        {value}
    </p>
  )
}

export default React.memo(Data)*/

const Data = React.memo(({value}) => {
    console.log("Otra vez me cargue");
  return (
    <p>
        {value}
    </p>
  )
})

export default Data
function Machine({number}) {
  if (typeof number==="string") {
    throw new Error("is not a number!")
  }
  return ( 
    <>
    NUMBER:{number}
    </>
   );
}

export default Machine;
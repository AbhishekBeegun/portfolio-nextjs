import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json()

    return {
        props: {
            Data : data
        }
    }

}
const testpage = ({Data}) => {
  return (
    <>
    {Data && Data.slice(0,20).map( dta => (
        <div key={dta.id}>
          <p>{dta.id}</p>
          <p>{dta.title}</p>
        </div>
      ))}
      {!Data && <p>No Data to display</p>}
      </>
  )
}

export default testpage


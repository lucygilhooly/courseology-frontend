import Card from '../Card/Card'

const CardInfo = ({products}) => {
    const productsJSX = products.map((product,index) => {
      return (
        <div key={index}>
        <Card description={product.description}/>
      </div>
    )
  })
  return (
    <section className='productGrid'>
      {productsJSX}
    </section>
  )
}
// create an onclick function so when a card is clicked whole screen disappears 
// and card expands to show description
import { data } from '../data';

export const ProductList = ({ allProducts, setAllProducts }) => {
  const columnStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const onAddProduct = (product) => {
    const existingProduct = allProducts.find((item) => item.id === product.id);
    
    if (existingProduct) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='container-item' style={columnStyle}>
      {data.map((product) => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

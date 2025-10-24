import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, onAddToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}








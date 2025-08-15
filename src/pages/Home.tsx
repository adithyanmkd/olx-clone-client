// import data
import { products } from "../constants/products";

// import component
import ProductCard from "../components/molecules/ProductCart";

const Home = () => {
  return (
    <>
      <section className="px-4 pt-8">
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

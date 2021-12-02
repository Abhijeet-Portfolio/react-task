
import MyProvider from './MyProvider';
import ProductList from './ProductList';

function App() {
  return (
    <MyProvider>
      <div>
        <header>
          <h1>Welcome to My Store</h1>
        </header>
        <ProductList />
      </div>
    </MyProvider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EcommerceLayout from '../components/EcommerceLayout';
import FilterPanel from '../components/FilterPanel';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import type { CartItem, FilterState, Product } from '../types/ecommerce';

// Mock product data
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    brand: 'AudioTech',
    price: 299.99,
    salePrice: 249.99,
    rating: 4.8,
    reviewCount: 2847,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Electronics',
    colors: ['Black', 'White', 'Silver'],
    sizes: ['One Size'],
    description: 'High-quality wireless headphones with noise cancellation',
    features: ['Bluetooth 5.0', '30hr Battery', 'Noise Cancelling'],
    inStock: true,
    stockCount: 15,
  },
  {
    id: 2,
    name: 'Classic Cotton T-Shirt',
    brand: 'ComfortWear',
    price: 29.99,
    rating: 4.5,
    reviewCount: 1205,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Clothing',
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Soft, comfortable cotton t-shirt perfect for everyday wear',
    features: ['100% Cotton', 'Pre-shrunk', 'Machine Washable'],
    inStock: true,
    stockCount: 42,
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    brand: 'FitTech',
    price: 199.99,
    salePrice: 159.99,
    rating: 4.6,
    reviewCount: 892,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Electronics',
    colors: ['Black', 'Rose Gold', 'Silver'],
    sizes: ['S/M', 'L/XL'],
    description: 'Advanced fitness tracking with heart rate monitoring',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant'],
    inStock: true,
    stockCount: 8,
  },
  {
    id: 4,
    name: 'Leather Crossbody Bag',
    brand: 'LuxuryLeather',
    price: 149.99,
    rating: 4.7,
    reviewCount: 634,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Accessories',
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size'],
    description: 'Genuine leather crossbody bag with adjustable strap',
    features: ['Genuine Leather', 'Adjustable Strap', 'Multiple Compartments'],
    inStock: true,
    stockCount: 23,
  },
  {
    id: 5,
    name: 'Running Sneakers',
    brand: 'SportMax',
    price: 89.99,
    salePrice: 69.99,
    rating: 4.4,
    reviewCount: 1567,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Footwear',
    colors: ['White', 'Black', 'Blue', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Lightweight running shoes with advanced cushioning',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight'],
    inStock: true,
    stockCount: 31,
  },
  {
    id: 6,
    name: 'Wireless Phone Charger',
    brand: 'ChargeFast',
    price: 39.99,
    rating: 4.3,
    reviewCount: 423,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Electronics',
    colors: ['Black', 'White'],
    sizes: ['One Size'],
    description: 'Fast wireless charging pad compatible with all Qi devices',
    features: ['15W Fast Charging', 'LED Indicator', 'Case Friendly'],
    inStock: false,
    stockCount: 0,
  },
  {
    id: 7,
    name: 'Denim Jacket',
    brand: 'UrbanStyle',
    price: 79.99,
    rating: 4.6,
    reviewCount: 756,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Clothing',
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Classic denim jacket with vintage styling',
    features: ['100% Cotton Denim', 'Vintage Wash', 'Button Closure'],
    inStock: true,
    stockCount: 18,
  },
  {
    id: 8,
    name: 'Stainless Steel Water Bottle',
    brand: 'HydroLife',
    price: 24.99,
    rating: 4.8,
    reviewCount: 2134,
    image: '/placeholder-product.svg',
    images: ['/placeholder-product.svg', '/placeholder-product.svg'],
    category: 'Accessories',
    colors: ['Silver', 'Black', 'Blue', 'Pink'],
    sizes: ['16oz', '20oz', '32oz'],
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours',
    features: ['Double Wall Insulated', 'Leak Proof', 'BPA Free'],
    inStock: true,
    stockCount: 67,
  },
];

const EcommercePage: React.FC = () => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    priceRange: [0, 500],
    inStockOnly: false,
  });
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const productsPerPage = 8;

  // Filter and search products
  useEffect(() => {
    let filtered = [...products];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some((color: string) => filters.colors.includes(color))
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some((size: string) => filters.sizes.includes(size))
      );
    }

    // Apply price range
    filtered = filtered.filter(product => {
      const price = product.salePrice || product.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply stock filter
    if (filters.inStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, filters, searchQuery, sortBy]);

  const handleAddToCart = (product: Product, selectedColor?: string, selectedSize?: string) => {
    const existingItem = cart.find(
      item =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.salePrice || product.price,
          image: product.image,
          selectedColor: selectedColor || product.colors[0],
          selectedSize: selectedSize || product.sizes[0],
          quantity: 1,
        },
      ]);
    }
  };

  const handleWishlistToggle = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <EcommerceLayout
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center">
                    <Link to="/demos" className="font-medium text-indigo-600 hover:text-indigo-700">
                      ← Back to Demos Overview
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Link to="/ecommerce" className="ml-2 text-gray-400 hover:text-gray-500">
                      Home
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 font-medium text-gray-900">Products</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                <p className="mt-2 text-gray-600">
                  Showing {startIndex + 1}-
                  {Math.min(startIndex + productsPerPage, filteredProducts.length)} of{' '}
                  {filteredProducts.length} results
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center space-x-4">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Filter Panel */}
            <div className="w-64 flex-shrink-0">
              <FilterPanel products={products} filters={filters} setFilters={setFilters} />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <ProductGrid
                products={currentProducts}
                onAddToCart={handleAddToCart}
                onWishlistToggle={handleWishlistToggle}
                wishlist={wishlist}
                onQuickView={setQuickViewProduct}
                isLoading={false}
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                        <span className="font-medium">
                          {Math.min(startIndex + productsPerPage, filteredProducts.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredProducts.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        {/* Previous button */}
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                              page === currentPage
                                ? 'z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                            }`}
                          >
                            {page}
                          </button>
                        ))}

                        {/* Next button */}
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onWishlistToggle={handleWishlistToggle}
          isInWishlist={wishlist.includes(quickViewProduct.id)}
        />
      )}
    </EcommerceLayout>
  );
};

export default EcommercePage;

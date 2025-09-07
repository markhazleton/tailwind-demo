import React, { useState } from 'react';
import type { Product } from '../types/ecommerce';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product, selectedColor?: string, selectedSize?: string) => void;
  onWishlistToggle: (productId: number) => void;
  wishlist: number[];
  onQuickView: (product: Product) => void;
  isLoading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onWishlistToggle,
  wishlist,
  onQuickView,
  isLoading,
}) => {
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});

  const handleImageLoad = (productId: number) => {
    setImageLoadStates(prev => ({ ...prev, [productId]: true }));
  };

  const ProductSkeleton = () => (
    <div className="group animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
  <div className="aspect-[4/3] bg-gray-200">
        <div className="h-48 w-full bg-gray-200"></div>
      </div>
      <div className="p-4">
        <div className="mb-2 h-4 rounded bg-gray-200"></div>
        <div className="mb-2 h-3 w-2/3 rounded bg-gray-200"></div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-1/3 rounded bg-gray-200"></div>
          <div className="h-8 w-1/4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
        >
          {/* Product Image */}
          <div className="aspect-[4/3] relative overflow-hidden">
            {!imageLoadStates[product.id] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className={`h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${
                imageLoadStates[product.id] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(product.id)}
            />

            {/* Sale Badge */}
            {product.salePrice && (
              <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                SALE
              </div>
            )}

            {/* Stock Badge */}
            {!product.inStock && (
              <div className="absolute right-2 top-2 rounded bg-gray-900 px-2 py-1 text-xs font-semibold text-white">
                OUT OF STOCK
              </div>
            )}

            {/* Wishlist Button */}
            <button
              onClick={() => onWishlistToggle(product.id)}
              className="absolute right-2 top-2 transform rounded-full bg-white p-2 opacity-0 shadow-md transition-opacity duration-200 hover:scale-110 group-hover:opacity-100"
              title={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <svg
                className={`h-5 w-5 ${
                  wishlist.includes(product.id) ? 'fill-current text-red-500' : 'text-gray-400'
                }`}
                fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Quick View Button */}
            <button
              onClick={() => onQuickView(product)}
              className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-200 hover:bg-opacity-90 group-hover:opacity-100"
            >
              Quick View
            </button>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="mb-2">
              <h3 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-brand">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="mb-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-500">({product.reviewCount})</span>
            </div>

            {/* Colors */}
            <div className="mb-3 flex items-center space-x-1">
              {product.colors.slice(0, 4).map(color => (
                <div
                  key={color}
                  className={`h-4 w-4 rounded-full border border-gray-300 ${
                    color.toLowerCase() === 'black'
                      ? 'bg-black'
                      : color.toLowerCase() === 'white'
                        ? 'bg-white'
                        : color.toLowerCase() === 'red'
                          ? 'bg-red-500'
                          : color.toLowerCase() === 'blue'
                            ? 'bg-blue-500'
                            : color.toLowerCase() === 'navy'
                              ? 'bg-blue-900'
                              : color.toLowerCase() === 'gray'
                                ? 'bg-gray-500'
                                : color.toLowerCase() === 'silver'
                                  ? 'bg-gray-400'
                                  : color.toLowerCase() === 'brown'
                                    ? 'bg-amber-800'
                                    : color.toLowerCase() === 'tan'
                                      ? 'bg-amber-600'
                                      : color.toLowerCase() === 'pink'
                                        ? 'bg-pink-500'
                                        : color.toLowerCase() === 'rose gold'
                                          ? 'bg-rose-400'
                                          : color.toLowerCase() === 'light blue'
                                            ? 'bg-blue-300'
                                            : color.toLowerCase() === 'blue dark'
                                              ? 'bg-blue-800'
                                              : 'bg-gray-300'
                  }`}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {product.salePrice ? (
                  <>
                    <span className="text-lg font-bold text-red-600">${product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.price}</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                )}
              </div>

              <button
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  product.inStock
                    ? 'bg-brand text-brand-fg hover:bg-brand-hover'
                    : 'cursor-not-allowed bg-gray-300 text-gray-500'
                }`}
                title={product.inStock ? 'Add to cart' : 'Out of stock'}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Stock Count */}
            {product.inStock && product.stockCount <= 10 && (
              <p className="mt-2 text-xs text-orange-600">
                Only {product.stockCount} left in stock!
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

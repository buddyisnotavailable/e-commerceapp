import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronRight, Filter, ArrowUpDown } from 'lucide-react';
import { Product, products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const categories = [
  { id: 'casual', label: 'Casual' },
  { id: 'formal', label: 'Formal' },
  { id: 'party', label: 'Party' },
  { id: 'gym', label: 'Gym' },
];

const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];
const colors = ['#27AE60', '#F2994A', '#8B5CF6', '#3B82F6', '#F43F5E', '#111827'];
const subCategories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];

export function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedSubCategory, setSelectedSubCategory] = useState('T-shirts');
  const [sortBy, setSortBy] = useState('Most Popular');

  const category = categories.find((item) => item.id === categoryName?.toLowerCase());

  const filteredProducts = useMemo(() => {
    if (!category) return [];

    let result = products.filter((product) => product.category === category.id);

    if (sortBy === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center px-[40px] py-[80px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="px-[100px] py-[28px] border-b border-[rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-[8px] text-[14px] text-[rgba(0,0,0,0.6)]">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <ChevronRight className="w-[16px] h-[16px]" />
          <span className="text-black font-['Satoshi:Medium',sans-serif]">{category.label}</span>
        </div>
      </div>

      <div className="px-[100px] py-[40px] grid grid-cols-[280px_1fr] gap-[40px]">
        <aside className="space-y-[24px]">
          <div className="flex items-center justify-between px-[22px] py-[20px] bg-[#f8f8f8] rounded-[24px] border border-[rgba(0,0,0,0.06)]">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-[rgba(0,0,0,0.6)]">Filters</p>
              <p className="font-['Satoshi:Bold',sans-serif] text-[18px]">Refine Results</p>
            </div>
            <Filter className="w-[20px] h-[20px] text-black" />
          </div>

          <section className="bg-[#f8f8f8] rounded-[24px] p-[24px] border border-[rgba(0,0,0,0.06)]">
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[18px] mb-[18px]">Categories</h3>
            <div className="space-y-[10px]">
              {categories.map((item) => (
                <Link
                  key={item.id}
                  to={`/category/${item.id}`}
                  className={`flex items-center justify-between px-[16px] py-[12px] rounded-[16px] transition ${
                    item.id === category.id ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#f4f4f4]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === category.id && <span className="text-[rgba(255,255,255,0.8)]">Current</span>}
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-[#f8f8f8] rounded-[24px] p-[24px] border border-[rgba(0,0,0,0.06)]">
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[18px] mb-[18px]">Price</h3>
            <div className="space-y-[12px]">
              <div className="flex items-center justify-between text-[14px] text-[rgba(0,0,0,0.7)]">
                <span>${selectedPriceRange[0]}</span>
                <span>${selectedPriceRange[1]}</span>
              </div>
              <input
                type="range"
                min={0}
                max={500}
                value={selectedPriceRange[1]}
                onChange={(event) => setSelectedPriceRange([0, Number(event.target.value)])}
                className="w-full"
              />
            </div>
          </section>

          <section className="bg-[#f8f8f8] rounded-[24px] p-[24px] border border-[rgba(0,0,0,0.06)]">
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[18px] mb-[18px]">Colors</h3>
            <div className="flex flex-wrap gap-[12px]">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`w-[34px] h-[34px] rounded-full border-2 transition ${
                    selectedColor === color ? 'border-black' : 'border-[rgba(0,0,0,0.12)]'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </section>

          <section className="bg-[#f8f8f8] rounded-[24px] p-[24px] border border-[rgba(0,0,0,0.06)]">
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[18px] mb-[18px]">Size</h3>
            <div className="flex flex-wrap gap-[12px]">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-[62px] px-[14px] py-[10px] text-[14px] transition ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-white text-black border border-[rgba(0,0,0,0.08)] hover:bg-[#f4f4f4]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-[#f8f8f8] rounded-[24px] p-[24px] border border-[rgba(0,0,0,0.06)]">
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[18px] mb-[18px]">Dress Style</h3>
            <div className="space-y-[10px]">
              {subCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedSubCategory(item)}
                  className={`w-full text-left px-[16px] py-[12px] rounded-[16px] transition ${
                    selectedSubCategory === item ? 'bg-black text-white' : 'bg-white text-black border border-[rgba(0,0,0,0.08)] hover:bg-[#f4f4f4]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <button
            type="button"
            className="w-full bg-black text-white rounded-[62px] py-[14px] font-['Satoshi:Bold',sans-serif] text-[16px] hover:bg-gray-900 transition"
          >
            Apply Filter
          </button>
        </aside>

        <main>
          <div className="flex flex-col gap-[16px] mb-[32px]">
            <div className="flex items-center justify-between gap-[16px]">
              <div>
                <p className="text-[14px] text-[rgba(0,0,0,0.6)]">Showing 1-{filteredProducts.length} of {filteredProducts.length} Products</p>
                <h1 className="font-['Integral_CF:Bold',sans-serif] text-[42px]">{category.label}</h1>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="text-[14px] text-[rgba(0,0,0,0.6)]">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-[62px] border border-[rgba(0,0,0,0.1)] bg-white px-[18px] py-[14px] text-[14px] outline-none"
                >
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-[12px] text-[14px] text-[rgba(0,0,0,0.6)]">
              <span className="flex items-center gap-[6px]"><ArrowUpDown className="w-[16px] h-[16px]" /> Showing latest styles</span>
              <span className="px-[12px] py-[6px] bg-[#f0f0f0] rounded-[62px]">{selectedSubCategory}</span>
              <span className="px-[12px] py-[6px] bg-[#f0f0f0] rounded-[62px]">{selectedSize}</span>
              <span className="px-[12px] py-[6px] bg-[#f0f0f0] rounded-[62px]">{selectedColor}</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[24px]">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))
            ) : (
              <div className="col-span-4 text-center py-[80px] rounded-[24px] bg-[#f8f8f8]">
                <p className="text-[18px] text-[rgba(0,0,0,0.7)]">No products found for this category yet.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

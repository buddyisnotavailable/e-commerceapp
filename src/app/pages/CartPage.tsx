import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (
    productId: number,
    size: string | undefined,
    color: string | undefined,
    delta: number
  ) => void;
  onRemoveItem: (
    productId: number,
    size: string | undefined,
    color: string | undefined
  ) => void;
}

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem }: CartPageProps) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <div className="px-[100px] py-[28px] border-b border-[rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-[8px] text-[14px] text-[rgba(0,0,0,0.6)]">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span>{'>'}</span>
          <span className="font-['Satoshi:Medium',sans-serif] text-black">Cart</span>
        </div>
      </div>

      <div className="px-[100px] py-[40px] grid grid-cols-[1.4fr_0.6fr] gap-[40px]">
        <section className="space-y-[24px]">
          <div className="flex items-center justify-between gap-[16px]">
            <div>
              <h1 className="font-['Integral_CF:Bold',sans-serif] text-[42px] mb-[8px]">
                YOUR CART
              </h1>
              <p className="text-[14px] text-[rgba(0,0,0,0.6)]">
                {cartItems.length} item{cartItems.length === 1 ? '' : 's'} in your cart
              </p>
            </div>
            <Link
              to="/"
              className="text-[14px] font-['Satoshi:Medium',sans-serif] text-black underline hover:text-gray-800 transition"
            >
              Continue shopping
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#f8f8f8] p-[60px] text-center">
              <p className="text-[18px] text-[rgba(0,0,0,0.7)] mb-[16px]">
                Your cart is currently empty.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-[62px] bg-black px-[34px] py-[15px] text-white font-['Satoshi:Bold',sans-serif] hover:bg-gray-900 transition"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.product.id}-${item.size ?? 'default'}-${item.color ?? 'default'}`}
                className="rounded-[32px] border border-[rgba(0,0,0,0.08)] p-[28px] flex flex-col gap-[20px]"
              >
                <div className="flex items-start gap-[20px]">
                  <div className="w-[160px] h-[160px] rounded-[24px] bg-[#f0eeed] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-[12px]">
                      <div>
                        <h2 className="font-['Satoshi:Bold',sans-serif] text-[24px] text-black">
                          {item.product.name}
                        </h2>
                        <p className="text-[14px] text-[rgba(0,0,0,0.6)] mt-[8px]">
                          {item.size ? `Size: ${item.size}` : ''}
                          {item.size && item.color ? ' · ' : ''}
                          {item.color ? 'Color' : ''}
                        </p>
                        {item.color && (
                          <div className="mt-[10px] flex items-center gap-[8px]">
                            <span className="text-[14px] text-[rgba(0,0,0,0.6)]">Color:</span>
                            <span
                              className="w-[18px] h-[18px] rounded-full border border-[rgba(0,0,0,0.12)]"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id, item.size, item.color)}
                        className="text-[rgba(0,0,0,0.5)] hover:text-black transition"
                      >
                        <Trash2 className="w-[22px] h-[22px]" />
                      </button>
                    </div>

                    <div className="mt-[18px] flex items-center justify-between gap-[20px]">
                      <div className="rounded-[62px] bg-[#f0f0f0] px-[16px] py-[12px] flex items-center gap-[16px]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, -1)}
                          className="rounded-full p-[6px] hover:bg-[#e2e2e2] transition"
                        >
                          <Minus className="w-[18px] h-[18px]" />
                        </button>
                        <span className="text-[16px] font-['Satoshi:Bold',sans-serif] w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, 1)}
                          className="rounded-full p-[6px] hover:bg-[#e2e2e2] transition"
                        >
                          <Plus className="w-[18px] h-[18px]" />
                        </button>
                      </div>

                      <p className="font-['Satoshi:Bold',sans-serif] text-[24px] text-black">
                        {formatMoney(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        <aside className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#fafafa] p-[32px]">
          <h2 className="font-['Integral_CF:Bold',sans-serif] text-[24px] mb-[24px]">Order Summary</h2>
          <div className="space-y-[18px] text-[16px] text-[rgba(0,0,0,0.7)]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatMoney(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#ef4444]">
              <span>Discount (-20%)</span>
              <span>-{formatMoney(discount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{formatMoney(deliveryFee)}</span>
            </div>
          </div>

          <div className="my-[24px] h-[1px] bg-[rgba(0,0,0,0.08)]" />

          <div className="flex justify-between items-center mb-[26px]">
            <span className="font-['Integral_CF:Bold',sans-serif] text-[18px]">Total</span>
            <span className="font-['Integral_CF:Bold',sans-serif] text-[28px]">{formatMoney(total)}</span>
          </div>

          <div className="space-y-[16px]">
            <div className="flex items-center gap-[12px] rounded-[62px] bg-white px-[18px] py-[12px] border border-[rgba(0,0,0,0.08)]">
              <span className="text-[18px]">%</span>
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full bg-transparent outline-none text-[14px] text-black placeholder:text-[rgba(0,0,0,0.5)]"
              />
              <button className="rounded-[62px] bg-black px-[20px] py-[12px] text-[14px] text-white font-['Satoshi:Bold',sans-serif] hover:bg-gray-900 transition">
                Apply
              </button>
            </div>

            <Link
              to="/checkout"
              className={`w-full inline-flex items-center justify-center rounded-[62px] py-[16px] text-[16px] text-white font-['Satoshi:Bold',sans-serif] transition ${
                cartItems.length > 0
                  ? 'bg-black hover:bg-gray-900'
                  : 'bg-[rgba(0,0,0,0.2)] pointer-events-none'
              }`}
            >
              Go to Checkout
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

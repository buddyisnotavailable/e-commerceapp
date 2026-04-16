import { Link } from 'react-router-dom';
import { CreditCard, MapPin, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CheckoutPageProps {
  cartItems: CartItem[];
}

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

export function CheckoutPage({ cartItems }: CheckoutPageProps) {
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
          <span className="font-['Satoshi:Medium',sans-serif] text-black">Checkout</span>
        </div>
      </div>

      <div className="px-[100px] py-[40px] grid grid-cols-[0.65fr_0.35fr] gap-[40px]">
        <main className="space-y-[32px]">
          <section className="rounded-[32px] border border-[rgba(0,0,0,0.08)] p-[32px]">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <MapPin className="w-[24px] h-[24px] text-black" />
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[rgba(0,0,0,0.5)]">Shipping address</p>
                <h2 className="font-['Integral_CF:Bold',sans-serif] text-[22px]">Delivery details</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="col-span-2 rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
              <input
                type="text"
                placeholder="City"
                className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(0,0,0,0.08)] p-[32px]">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <CreditCard className="w-[24px] h-[24px] text-black" />
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[rgba(0,0,0,0.5)]">Payment method</p>
                <h2 className="font-['Integral_CF:Bold',sans-serif] text-[22px]">Card details</h2>
              </div>
            </div>
            <div className="space-y-[18px]">
              <input
                type="text"
                placeholder="Card number"
                className="w-full rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
              />
              <div className="grid grid-cols-2 gap-[20px]">
                <input
                  type="text"
                  placeholder="Expiry date"
                  className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="rounded-[24px] border border-[rgba(0,0,0,0.08)] px-[18px] py-[16px] outline-none"
                />
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#fafafa] p-[32px]">
            <div className="flex items-center gap-[16px] mb-[18px]">
              <Truck className="w-[24px] h-[24px] text-black" />
              <h2 className="font-['Integral_CF:Bold',sans-serif] text-[22px]">Delivery options</h2>
            </div>
            <p className="text-[16px] text-[rgba(0,0,0,0.7)]">
              Standard shipping arrives within 3-5 business days. You can choose an express option at checkout.
            </p>
          </section>
        </main>

        <aside className="space-y-[24px]">
          <div className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-white p-[32px]">
            <h2 className="font-['Integral_CF:Bold',sans-serif] text-[24px] mb-[24px]">Order Summary</h2>
            <div className="space-y-[18px] text-[16px] text-[rgba(0,0,0,0.7)]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatMoney(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#ef4444]">
                <span>Discount</span>
                <span>-{formatMoney(discount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>{formatMoney(deliveryFee)}</span>
              </div>
            </div>

            <div className="my-[24px] h-[1px] bg-[rgba(0,0,0,0.08)]" />

            <div className="flex justify-between items-center">
              <span className="font-['Integral_CF:Bold',sans-serif] text-[20px]">Total</span>
              <span className="font-['Integral_CF:Bold',sans-serif] text-[28px]">{formatMoney(total)}</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-[62px] bg-black py-[16px] text-[16px] text-white font-['Satoshi:Bold',sans-serif] hover:bg-gray-900 transition"
          >
            Place Order
          </button>

          <div className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#f8f8f8] p-[24px]">
            <div className="flex items-center gap-[14px] mb-[16px]">
              <ShieldCheck className="w-[18px] h-[18px] text-black" />
              <span className="font-['Satoshi:Bold',sans-serif]">Secure payment</span>
            </div>
            <p className="text-[14px] text-[rgba(0,0,0,0.7)]">
              Your payment is protected with industry-standard encryption.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

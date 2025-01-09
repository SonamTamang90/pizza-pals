import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "SMOKEY HOUSE BURGER",
      description: "Magna donec and ipsum gravida",
      price: 8.95,
      image: "/images/pizzas/pizza-1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "BBQ CHICKEN PIZZA",
      description: "Magna donec and ipsum gravida",
      price: 27.0,
      image: "/images/pizzas/pizza-2.png",
      quantity: 1,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section - Adjusted height for mobile */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/banner.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <Breadcrumb className="text-white mb-4 md:mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="text-base md:text-lg text-white"
                  >
                    HOME
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/cart"
                    className="text-base md:text-lg text-white"
                  >
                    SHOPPING CART
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              SHOPPING CART
            </h1>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg">
              {/* Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 p-6 border-b text-gray-600 font-medium">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Delete</div>
              </div>

              {/* Cart Items - Mobile-friendly layout */}
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 md:p-6 border-b">
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">
                          {item.description}
                        </p>
                        <p className="text-gray-900 font-medium">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors h-fit">
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Quantity:</span>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="w-20"
                        />
                      </div>
                      <div className="text-gray-900 font-medium">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-900">
                      ${item.price.toFixed(2)}
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="w-20"
                      />
                    </div>
                    <div className="text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Section - Mobile-friendly */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex gap-4">
                <Input
                  placeholder="Coupon Code"
                  className="flex-1 sm:max-w-xs"
                />
                <Button className="bg-secondary-600 hover:bg-secondary-700 whitespace-nowrap">
                  APPLY COUPON
                </Button>
              </div>
              <Button variant="outline" className="whitespace-nowrap">
                UPDATE CART
              </Button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                CART TOTAL
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between py-4 border-b">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">$35.95</span>
                </div>

                <div className="flex justify-between py-4 border-b">
                  <span className="text-gray-600">Total</span>
                  <span className="font-bold text-lg md:text-xl">$35.95</span>
                </div>

                <Button className="w-full bg-[#F21905] hover:bg-[#d41704] text-white py-4 md:py-6 text-base md:text-lg">
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import { Truck, Store } from "lucide-react";

export function ProductShippingInfo() {
  return (
    <div className="space-y-4 pt-4 border-t">
      <div className="flex items-start gap-3 border-foreground border p-2">
        <Truck className="w-5 h-5 mt-1 shrink-0" />
        <div className="mb-2">
          <p className="font-medium">Ship to Home</p>
          <p className="text-sm text-muted-foreground">Standard Shipping</p>
          <p className="text-sm text-muted-foreground">3-8 Business days</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Store className="w-5 h-5 mt-1 shrink-0" />
        <div>
          <p className="font-medium">In-Store Pickup</p>
          <button className="text-sm underline">Find Store</button>
          <p className="text-sm text-muted-foreground">
            Complete order/pickup in-store availability
          </p>
        </div>
      </div>
    </div>
  );
}

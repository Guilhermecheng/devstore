'use client'

import { useCart } from "@/contexts/cart-context"

interface AddToCartButtonProps {
    productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    function handleAddProduct() {
        addToCart(productId);
    }

    return (
        <button 
            type="button"
            onClick={handleAddProduct}
            className="w-full mt-8 flex h-12 items-center justify-center bg-emerald-600 text-white font-semibold rounded-full"
        >
            Adicionar ao carrinho
        </button>
    )
}
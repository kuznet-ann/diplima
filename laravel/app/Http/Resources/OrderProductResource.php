<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $orderLink = route('orders.show', ['order' => $this->order_id]);
        $productLink = route('products.show', ['product' => $this->product_id]);

        return [
            'type' => 'orderProduct',
            'id' => $this->id,

            'attributes' => [
                'price' => (float) $this->price,
                'quantity' => (int) $this->quantity,
            ],
            
            'relationships' => [
                'order' => [
                    'links' => [
                        'related' => $orderLink,
                    ],
                ],
                'product' => [
                    'links' => [
                        'related' => $productLink,
                    ],
                ],
            ],
            'links' => [
                'self' => route('order_product.show', ['order_product' => $this->id]),
            ],
        ];
    }
}

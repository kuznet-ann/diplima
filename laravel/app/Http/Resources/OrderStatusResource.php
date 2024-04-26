<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderStatusResource extends JsonResource
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
        $statusLink = route('statuses.show', ['status' => $this->status_id]);

        return [
            'type' => 'orderStatus',
            'id' => $this->id,

            'attributes' => [
                'set_at' => $this->set_at,
            ],

            'relationships' => [
                'order' => [
                    'links' => [
                        'related' => $orderLink,
                    ],
                ],
                'status' => [
                    'links' => [
                        'related' => $statusLink,
                    ],
                ],
            ],
            'links' => [
                'self' => route('order_status.show', ['order_status' => $this->id]),
            ],
        ];
    }
}

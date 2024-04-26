<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $orderLink = route('orders.show', ['order' => $this->id]);
        $userLink = route('users.show', ['user' => $this->user_id]);

        return [
            'type' => 'orders',
            'id' => $this->id,

            'relationships' => [
                'user' => [
                    'links' => [
                        'related' => $userLink,
                    ],
                ],
            ],

            'links' => [
                'self' => $orderLink,
            ],
        ];
    }
}

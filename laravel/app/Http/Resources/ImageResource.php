<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $imageLink = route('images.show', ['image' => $this->id]);
        $productLink = route('products.show', ['product' => $this->product_id]);

        return [
            'type' => 'images',

            'id' => $this->id,

            'attributes' => [
                'path' => $this->path,
            ],

            'relationships' => [
                'product' => [
                    'links' => [
                        'related' => $productLink,
                    ],
                ],
            ],

            'links' => [
                'self' => $imageLink,
            ],
        ];
    }
}

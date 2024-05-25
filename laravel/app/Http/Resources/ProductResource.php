<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $shapeLink = route('shapes.show', ['shape' => $this->shape_id]);
        $materialLink = route('materials.show', ['material' => $this->material_id]);

        return [
            'type' => 'products',
            'id' => $this->id,

            'attributes' => [
                'name' => $this->name,
                'price' => (float) $this->price,
                'description' => $this->description,
                'quantity' => (int) $this->quantity,
                'available' => (bool) $this->available,
                'image' => $this->images
                // 'image' => array_map(function ($image) {
                //     return $image->path;
                // }, $this->images)
            ],
            'relationships' => [
                'shape' => [
                    'links' => [
                        'related' => $shapeLink,
                    ],
                ],
                'material' => [
                    'links' => [
                        'related' => $materialLink,
                    ],
                ],
            ],
            'links' => [
                'self' => route('products.show', ['product' => $this->id]),
            ],
        ];
    }
}

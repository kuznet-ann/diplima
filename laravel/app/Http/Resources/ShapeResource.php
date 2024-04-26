<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShapeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type' => 'shapes',
            'id' => $this->id,

            'attributes' => [
                'name' => $this->name,
            ],
            'links' => [
                'self' => route('shapes.show', ['shape' => $this->id]),
            ],
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MaterialResource extends JsonResource
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
            'type' => 'material',
            'id' => $this->id,

            'attributes' => [
                'name' => $this->name,
            ],
            'links' => [
                'self' => route('materials.show', ['material' => $this->id]),
            ],
        ];
    }
}

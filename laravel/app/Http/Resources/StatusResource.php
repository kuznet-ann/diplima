<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StatusResource extends JsonResource
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
            'type' => 'status',
            'id' => $this->id,

            'attributes' => [
                'name' => $this->name,
            ],
            'links' => [
                'self' => route('statuses.show', ['status' => $this->id]),
            ],
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => [
                'max:55',
                'required',
                'string',
                'unique:products,name',
            ],
            'price' => [
                'decimal:0,2',
                'max:99999.99',
                'min:0',
                'required',
            ],
            'description' => [
                'required',
                'string',
            ],
            'quantity' => [
                'integer',
                'max:2147483647',
                'min:0',
                'required',
            ],
            'available' => [],
            'shape_id' => [
                'exists:shapes,id',
            ],
            'material_id' => [
                'exists:materials,id',
            ],
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderProductRequest extends FormRequest
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
            'product_id' => [
                'exists:products,id',
            ],
            'order_id' => [
                'exists:orders,id',
            ],
            'quantity' => [
                'integer',
                'max:2147483647',
                'min:0',
                'required',
            ],
            'available' => [
                'boolean',
                'required',
            ],
        ];
    }
}

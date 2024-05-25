<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreImageRequest extends FormRequest
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
            'image_file' => [
                'image',
                'max:51200',
                'mimes:gif,jpeg,png,webp',
                'min:1',

                'required',
            ],

            'product_id' => [
                'exists:products,id',
                'required',
            ],
        ];
    }
}

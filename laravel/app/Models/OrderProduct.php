<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderProduct extends Pivot
{
    protected $fillable = [
        'product_id',
        'order_id',
        'price',
        'quantity',
    ];
}

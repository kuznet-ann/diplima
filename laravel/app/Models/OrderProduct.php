<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

// class OrderProduct extends Pivot
class OrderProduct extends Model
{
    public $table = 'order_product';
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    protected $fillable = [
        'product_id',
        'order_id',
        'price',
        'quantity',
    ];
}

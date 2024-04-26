<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderStatus extends Pivot
{
    protected $fillable = [
        'status_id',
        'order_id',
        'set_at'
    ];
}
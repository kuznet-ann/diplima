<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderStatus extends Pivot
{
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
    public function orderProduct(): BelongsTo
    {
        return $this->belongsTo(OrderProduct::class);
    }
    protected $fillable = [
        'status_id',
        'order_id',
        'set_at'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    use HasFactory;

    public function orderStatus(): HasMany
    {
        return $this->hasMany(OrderStatus::class);
    }

    protected $fillable = [
        'name',
    ];
}

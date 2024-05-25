<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function orderProduct(): HasMany
    {
        return $this->hasMany(OrderProduct::class);
    }

    protected $fillable = [
        'name',
        'price',
        'description',
        'quantity',
        'available',
        'shape_id',
        'material_id',
    ];
}

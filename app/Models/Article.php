<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'articles';

    public function images()
    {
        return $this->hasMany(Images::class);
    }
}

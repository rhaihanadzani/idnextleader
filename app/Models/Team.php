<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $table = 'persons';
    protected $guarded = [];

    public function categoryTeam()
    {
        return $this->belongsTo(CategoryTeam::class, 'category_team_id');
    }
}

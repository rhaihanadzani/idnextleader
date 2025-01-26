<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTeam extends Model
{
    use HasFactory;

    public function teams()
    {
        return $this->hasMany(Team::class, 'category_team_id');
    }
}

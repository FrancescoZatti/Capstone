<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ortaggi extends Model
{
    use HasFactory;
    // protected $table = 'ortaggis';
    protected $fillable = ['name', 'description', 'quantity', 'user_id'];
}

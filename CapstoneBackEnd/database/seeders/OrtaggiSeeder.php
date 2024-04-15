<?php

namespace Database\Seeders;

use App\Models\Ortaggi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrtaggiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ortaggi::factory(10)->create();
    }
}

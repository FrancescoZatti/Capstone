<?php

namespace Database\Factories;

use App\Models\Ortaggi;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orto>
 */
class OrtoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory() -> create() -> id,
            'ortaggio_id' => Ortaggi::factory() -> create() -> id,
            'quantita' => $this -> faker -> numberBetween(0, 100)
        ];
    }
}

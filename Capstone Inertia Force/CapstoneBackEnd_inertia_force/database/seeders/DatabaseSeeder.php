<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create()->each(function ($user) {
            $user->roles()->create(['is_admin' => false]);
        });

        $testUser = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('testpassword'),
        ]);

        $adminUser = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('adminpassword'),
        ]);

        $testUser->roles()->create(['is_admin' => false]);
        $adminUser->roles()->create(['is_admin' => true]);

        $this->call([
            OrtaggiSeeder::class,
            OrtoSeeder::class
        ]);
    }
}

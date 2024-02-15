<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for($i = 0; $i < 20; $i++) {
            News::create([
                'title' => $faker->title(),
                'description' => $faker->paragraph(2, true),
                'category' => $faker->sentence(),
                'author' => $faker->email(),
            ]);
        }
    }
}

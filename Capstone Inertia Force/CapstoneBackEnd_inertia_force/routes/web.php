<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrtaggiController;
use App\Http\Controllers\OrtoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);

    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/tuoorto', OrtaggiController::class);
});

Route::get('/chisiamo', function () {
    return Inertia::render('Chisiamo');
});

Route::get('/contatti', function () {
    return Inertia::render('Contact_us');
});

Route::get('/scambi', function () {
    return Inertia::render('Scambi');
});

Route::get('/ortaggi/create', [OrtaggiController::class, 'create'])->name('ortaggi.create');
Route::post('/ortaggi', [OrtaggiController::class, 'store'])->name('ortaggi.store');

Route::delete('/ortaggi/{ortaggio}', [OrtaggiController::class, 'destroy']) -> name('ortaggi.destroy');

Route::put('/ortaggi/{ortaggio}', [OrtaggiController::class, 'update'])->name('ortaggi.update');

// Route::get('/tuoorto', function () {
//     return Inertia::render('TuoOrto');
// });

require __DIR__ . '/auth.php';

// Route::get('/home', function () {
//     return Inertia::render('Home');
// });

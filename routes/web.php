<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TimeLineController;

Route::get('/', [HomeController::class, 'index'])->name('Home');
Route::get('/timeline', [TimeLineController::class, 'index'])->name('TimeLine');

// Route::middleware('auth')->group(function () {
//     Route::get('/', [HomeController::class, 'index'])->name('Home');
//     Route::get('/timeline', [TimeLineController::class, 'index'])->name('TimeLine');
// });

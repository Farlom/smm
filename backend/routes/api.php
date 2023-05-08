<?php

use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('create_user', [UsersController::class, 'create']);
Route::controller(UsersController::class)->group(function() {
    Route::get('users', 'index');
    Route::post('users', 'create');
    Route::put('users/{user}', 'update');
    Route::delete('users/{user}', 'delete');
});
//Route::get('users', [UsersController::class, 'index']);
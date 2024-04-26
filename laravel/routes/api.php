<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderProductController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShapeController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::apiResource('images', ImageController::class);
    Route::apiResource('shapes', ShapeController::class);
    Route::apiResource('statuses', StatusController::class);
    Route::apiResource('materials', MaterialController::class);
    Route::apiResource('orders', OrderController::class);
    Route::apiResource('order_product', OrderProductController::class);
    Route::apiResource('order_status', OrderStatusController::class);
    Route::apiResource('users', UserController::class);
});

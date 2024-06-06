<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function authenticate(Request $request): Response
    {
        $credentials = $request->all();
        if (Auth::attempt($credentials)) {
            $token = $request->user()->createToken('lalala');
            return response(['token' => $token->plainTextToken]);
        }
        return response()->noContent()->setStatusCode(401);
    }
}

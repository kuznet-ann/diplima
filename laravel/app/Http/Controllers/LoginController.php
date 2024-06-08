<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;



class LoginController extends Controller
{
    public function authenticate(Request $request): Response
    {
        $credentials = $request->all();
        $user = User::where('email', $credentials['email'])->first();
        $token = $user->tokens()->where('personal_access_tokens.name', 'lalala')->first();

        if ($user && Hash::check($credentials['password'], $user->password)) {
            // if (!$token) {
            $token = $user->createToken('lalala');
            return response(['token' => $token->plainTextToken]);
            // }
            // return response(['token' => $_COOKIE['sid']]);
            // return response()->noContent()->setStatusCode(304);
        }
        return response()->noContent()->setStatusCode(401);
    }

    public function logout(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $token->delete();
        return response()->noContent()->setStatusCode(203);
    }
}

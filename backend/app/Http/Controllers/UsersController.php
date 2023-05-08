<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

// use function PHPUnit\Framework\returnSelf;

class UsersController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function create(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function update(Request $request, User $user)
    {
        // $user = User::find($request->id);
        // $user->name = $request->name;
        // $user->age = $request->age;
        // $user->save();
        $user->update($request->all());
        return response()->json($user, 200);
    }

    public function delete(User $user)
    {
        // $user = User::findOrFail($request->id);

        // if ($user)
        //     $user->delete();
        // else 
        //     return response()->json('error');

        // return response()->json(null, 204);
        $user->delete();

        return response()->json(null, 204);
    }
}

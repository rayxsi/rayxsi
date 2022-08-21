<?php

namespace RayxsiApp\Http\Controller;

use Artificers\Http\Request;
use Artificers\Routing\Controller\Controller as BaseController;
use RayxsiApp\Model\User;

class SiteController extends BaseController {

    public function index(User $user, Request $request, $name, $event, $id) {

        echo $user->tableName;
        dump($request);
        echo $name;
        dump($event);
        echo $id;
    }

    public function store(Request $request): string|array {
//        $user = new User();
//
//        $user->firstname = $request->field('firstname');
//        $user->lastname = $request->field('lastname');
//        $user->email = $request->field('email');
//        $user->password = $request->field('password');
//        $user->confirmPassword = $request->field('confirmPassword');
//
//       $arr = $user->validate([
//            'firstname' => 'required',
//            'lastname' => 'required',
//            'email' => 'required|email',
//            'password' => 'required|standard',
//            'confirmPassword' => 'required|match:password'
//        ]);
//
//        var_dump($arr);
//
//        $user->save();
//
//        return json_encode([
//            "status"=>200
//        ]);
    }
}
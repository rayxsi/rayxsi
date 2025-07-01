<?php

namespace RayxsiApp\Http\Controller;

use Artificers\Http\Request;
use Artificers\Routing\Controller\Controller as BaseController;
use Artificers\Support\Illusion\Response;
use Artificers\Support\JSON;
use RayxsiApp\Model\User;

class SiteController extends BaseController {
    public function index(Request $request) {
//        echo $request->field('firstname');
//        echo $request->field('lastname');
        //echo $request->getSchemeAndHttpHost();
//        echo $request->getScheme();
//        echo $request->getPathInfo();
//        dump($request->isJson());
//        echo $request->getUri();

        //echo $id;

        return Response::json(["Firstname" => $request->field('firstname'), "Lastname" => $request->field('lastname')], 200);
    }

    public function store(Request $request): string|array {
//        $user = new User();
//
//        $user->FirstName = $request->field('firstname');
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
    }
}
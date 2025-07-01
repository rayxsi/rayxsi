<?php
declare(strict_types=1);
namespace RayxsiApp\Http\Controller;

use Artificers\Http\Request;
use Artificers\Routing\Controller\Controller as BaseController;
use Artificers\View\View;
use RayxsiApp\Events\UserServiceEvent;
use RayxsiApp\Listeners\AuthServiceListener;
use RayxsiApp\Listeners\UserServiceListener;
use RayxsiApp\Model\User;

class HomeController extends BaseController{
    public function index(Request $request): View{
        //echo $request->root();

//        rXsiApp()['event.listener']->addEventListener(UserServiceEvent::class, AuthServiceListener::class);
//        rXsiApp()['event.dispatcher']->dispatch(new UserServiceEvent());

        return view();
    }
}
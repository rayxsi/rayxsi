<?php
declare(strict_types=1);

use Artificers\Database\Lizie\Schema\ColumnType;
use Artificers\Database\Lizie\Schema\Table;
use Artificers\Http\Request;
use Artificers\Supports\Illusion\Route;
use Artificers\Supports\Illusion\Schema;
use Artificers\Supports\Illusion\View;
use Artificers\Treaties\Http\HttpKernelTreaties;
use RayxsiApp\Events\UserServiceEvent;
use RayxsiApp\Http\Controller\HomeController;
use RayxsiApp\Http\Controller\SiteController;
use RayxsiApp\Listeners\UserServiceListener;
use RayxsiApp\Listeners\AuthServiceListener;
use RayxsiApp\Payment\BkashPaymentGateway;
use RayxsiApp\Payment\PaymentGatewayInterface;
use RayxsiApp\Payment\RocketPaymentGateway;

require_once dirname(__DIR__)."/vendor/autoload.php";
$rXsiApp = require_once __DIR__ . "/../bootstrapping/bootstrap.php";


$rXsiApp->run(HttpKernelTreaties::class);

dump($rXsiApp);

//Schema::createDatabase("test");
//Schema::use("test");

//Schema::make("books", function(Table $table) {
//    $table->column("Bid")->type(ColumnType::INT)->primaryKey();
//    $table->column("Coupon")->type(ColumnType::VARCHAR)->width(30);
//    $table->column("Name")->type(ColumnType::VARCHAR)->width(450)->primaryKey();
//
//    $table->uniqueIndex("Coupon");
//});
//
//Schema::make("posts", function(Table $table) {
//    $table->column("Pid")->type(ColumnType::INT)->primaryKey();
//    $table->column("Title")->type(ColumnType::VARCHAR)->width(255)->primaryKey();
//});
//
//
//Schema::make("users", function(Table $table) {
//    $table->column("Id")->type(ColumnType::INT)->primaryKey();
//    $table->column("FirstName")->type(ColumnType::VARCHAR)->width(350);
//    $table->column("Email")->type(ColumnType::VARCHAR)->width(550)->unique();
//    $table->column("Bid")->type(ColumnType::INT)->foreignKey()->referenceTo("books", "Bid");
//    $table->column("Pid")->type(ColumnType::INT)->foreignKey()->referenceTo("posts", "Pid");
//    $table->column("CreatedAt")->type(ColumnType::DTIME);
//});
//
//Schema::modify("users", function(Table $table) {
//    //$table->dropForeignKey('Rx_Fk_user_Bid');
//    //$table->dropColumn("Age");
//    //$table->dropUnique('Email');
//    //$table->dropIndex('Rx_Idx_book');
//
//    //$table->column("Price")->type(ColumnType::INT);
//    //$table->column("Author")->type(ColumnType::VARCHAR)->width(350)->change();
//
//    //$table->column("Status")->type(ColumnType::SET)->options('active', 'inactive', 'in_progress');
//
//    //$table->column("Age")->type(ColumnType::TINT)->checkAble('Age >= 18')->nullable();
//
//    //$table->rename('Poko', 'Price');
//
//    //dump($table);
//});

//Schema::rename('book', 'books');

//dump(Schema::exists('user'));

//Schema::dropTableIfExists("users");
//Schema::dropTableIfExists("books");
//Schema::dropTableIfExists("posts");

//Schema::dropIfExists();




////explicitly tell bind
//$rXsiApp->bind(PaymentGatewayController::class, RocketPaymentGateway::class);
//
////explicitly tell variadic prop binding.
//$rXsiApp->variadicPropBinding(PaymentGatewayController::class, PaymentGatewayInterface::class, [
//    RocketPaymentGateway::class,
//    BkashPaymentGateway::class
//]);
//
////we can pass callback.
////we can pass single listener. Like this UserServiceListener::class. Rayxsi call by default handle method of listener. We can also use user defined method
////like this = 'UserServiceListener@User_defined_method'
////we can pass multiple listeners. Like this using array = [UserServiceListener::class, UserServiceListener2::class]. Default call to handle method of listeners.
////we can pass multiple listeners with user defined handler. Like this using array = ['UserServiceListener@store', 'UserServiceListener2@method'].
//
//
//$rXsiApp['event.listener']->addEventListener(UserServiceEvent::class, AuthServiceListener::class);
//////['AuthServiceListener@store', 'UserServiceListener@store']
////
//$rXsiApp['event.dispatcher']->dispatch(new UserServiceEvent());



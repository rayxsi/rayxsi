<?php declare(strict_types=1);

use Artificers\Database\Lizie\Schema\ColumnType;
use Artificers\Database\Lizie\Schema\Table;
use Artificers\Design\Patterns\Pipeline;
use Artificers\Http\Request;
use Artificers\Support\Illusion\QB;
use Artificers\Support\Illusion\Route;
use Artificers\Support\Illusion\Schema;
use Artificers\Support\Illusion\View;
use Artificers\Treaties\Http\HttpKernelTreaties;
use RayxsiApp\Events\UserServiceEvent;
use RayxsiApp\Http\Controller\HomeController;
use RayxsiApp\Http\Controller\SiteController;
use RayxsiApp\Http\Middleware\Filter;
use RayxsiApp\Http\Middleware\FirstMiddleware;
use RayxsiApp\Http\Middleware\SecondMiddleware;
use RayxsiApp\Listeners\UserServiceListener;
use RayxsiApp\Listeners\AuthServiceListener;
use RayxsiApp\Payment\BkashPaymentGateway;
use RayxsiApp\Payment\PaymentGatewayInterface;
use RayxsiApp\Payment\RocketPaymentGateway;

require_once dirname(__DIR__)."/vendor/autoload.php";
$rXsiApp = require_once __DIR__ . "/../bootstrapping/bootstrap.php";


$rXsiApp->run(HttpKernelTreaties::class);

//dump($rXsiApp);

//
//    $result = $rXsiApp['dp']->get('Pipeline')
//    ->send("pipeline")
//    ->through(
//        FirstMiddleware::class,
//        SecondMiddleware::class,
//        Filter::class
//    )->next(fn($arg)=>"Last middleware-{$arg}");
//
//    dump($result);



//Schema::createDatabase("test");
//Schema::use("test");

//Schema::make("books", function(Table $table) {
//    $table->column("Bid")->type(ColumnType::INT)->primaryKey()->autoIncrement();
//    $table->column("Name")->type(ColumnType::VARCHAR)->width(450)->primaryKey();
//
////    $table->column("Coupon")->type(ColumnType::VARCHAR)->width(30);
////    $table->uniqueIndex("Coupon");
//});
//
//Schema::make("posts", function(Table $table) {
//    $table->column("Pid")->type(ColumnType::INT)->primaryKey()->autoIncrement();
//    $table->column("Title")->type(ColumnType::VARCHAR)->width(255)->primaryKey();
//});
//
//
//Schema::make("users", function(Table $table) {
//    $table->column("Id")->type(ColumnType::INT)->primaryKey()->autoIncrement();
//    $table->column("FirstName")->type(ColumnType::VARCHAR)->width(350);
//    $table->column("Email")->type(ColumnType::VARCHAR)->width(550)->unique();
//    $table->column("Bid")->type(ColumnType::INT)->foreignKey()->referenceTo("books", "Bid");
//    $table->column("Pid")->type(ColumnType::INT)->foreignKey()->referenceTo("posts", "Pid");
//    $table->column("CreatedAt")->type(ColumnType::DTIME);
//    $table->column("UpdatedAt")->type(ColumnType::DTIME);
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
//    $table->rename('Pid', 'Post');
//    $table->rename('Bid', 'Book');
//
//    //dump($table);
//});

//Schema::make('students', function(Table $table) {
//    $table->column('Id')->type(ColumnType::INT)->primaryKey()->autoIncrement();
//    $table->column('Name')->type(ColumnType::VARCHAR)->width(150);
//    $table->column('FatherName')->type(ColumnType::VARCHAR)->width(150);
//    $table->column('MotherName')->type(ColumnType::VARCHAR)->width(150);
//    $table->column('Age')->type(ColumnType::TINT);
//    $table->column('Country')->type(ColumnType::VARCHAR)->width(50);
//    $table->column('City')->type(ColumnType::VARCHAR)->width(50);
//});

//Schema::modify('books', function(Table $table) {
//    $table->dropColumn("Coupon");
//});

//Schema::rename('book', 'books');

//dump(Schema::exists('user'));

//Schema::dropTableIfExists("users");
//Schema::dropTableIfExists("books");
//Schema::dropTableIfExists("posts");

//Schema::dropTableIfExists('students');

//Schema::dropIfExists();


//$builder = new \Artificers\Database\Lizie\Query\Builder($rXsiApp['db']->connection());

//$data = QB::from('students')->select("Name", "Age")->whereLike("Name", "%e")->andNotLike("Name", "_n%")->toSQL();
//$data = $builder->table("posts")->insert(["Title"=>"Reading Black Diamond"])->run();
//$data = QB::table('users')->insert(["Name"=>"Nelson Admerall", "Email"=>"nelson@sus.com", "Book"=>2, "Post"=>2, "CreatedAt"=>"2022-09-04 16:15:15", "UpdatedAt"=>"2022-09-04 16:15:15"])->toSQL();
//$data = QB::table("users")->update(["Name"=>"Kale Doe", "Email"=>"doe@kale.com", "Book"=>3, "Post"=>3, "CreatedAt"=>"2022-09-03 12:27:15", "UpdatedAt"=>"2022-09-04 12:27:15"])->where("Id", "=", 2)->run();
//$sql = QB::from("users")->select('Name')->where("id", "=", 1)->toSQL();
//$data = $builder->from("books")->insertWithCpy('Name')->copy($sql)->run();
//$data = $builder->from("books")->delete()->whereNotBetween('Bid', [1, 3])->run();

//$data = QB::from('users', "u")->select("u.Name", "u.Email", "b.Name AS Book", "p.Title AS Post")->innerJoin('books', "u.Book = b.Bid", 'b')->innerJoin('posts', "u.Post = p.Pid", "p")->run();

//dump($data);



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



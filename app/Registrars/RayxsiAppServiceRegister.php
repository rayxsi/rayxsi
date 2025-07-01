<?php

namespace RayxsiApp\Registrars;

use Artificers\Support\ServiceRegister;
use RayxsiApp\Payment\PaymentGatewayInterface;
use RayxsiApp\Payment\RocketPaymentGateway;

class RayxsiAppServiceRegister extends ServiceRegister {
    public function register(): void {
       $this->rXsiApp->bind(PaymentGatewayInterface::class, function($container) {
           return new RocketPaymentGateway();
       });
    }

    public function boot(): void {
       //All the application logic goes in here before registering.
    }
}
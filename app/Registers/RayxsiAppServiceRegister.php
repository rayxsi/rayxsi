<?php

namespace RayxsiApp\Registers;

use Artificers\Supports\ServiceRegister;
use RayxsiApp\Payment\PaymentGatewayInterface;
use RayxsiApp\Payment\RocketPaymentGateway;

class RayxsiAppServiceRegister extends ServiceRegister {
    public function register(): void {
       $this->rXsiApp->bind(PaymentGatewayInterface::class, function($container) {
           return new RocketPaymentGateway();
       });
    }

    public function boot(): void {
       //Boot logic goes in here.
    }
}
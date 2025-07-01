<?php

namespace RayxsiApp\Http\Controller;

use RayxsiApp\Model\User;
use RayxsiApp\Payment\PaymentGatewayInterface;
use RayxsiApp\Payment\RocketPaymentGateway;

class PaymentGatewayController {
    public function __construct(PaymentGatewayInterface ...$paymentGateway) {
    }

    public function store() {
        echo "Working";
    }
}
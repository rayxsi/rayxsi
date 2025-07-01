<?php

namespace RayxsiApp\Payment;

class RocketPaymentGateway implements PaymentGatewayInterface {
    private int $amount = 0;
    public function charge(int $amount): void {
       $this->amount = $this->amount + $amount;
       echo $this->amount.PHP_EOL;
    }
}
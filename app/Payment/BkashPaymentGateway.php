<?php

namespace RayxsiApp\Payment;

class BkashPaymentGateway implements PaymentGatewayInterface {

    public function charge(int $amount): void {
      echo $amount*10;
    }
}
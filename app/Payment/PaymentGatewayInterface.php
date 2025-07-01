<?php

namespace RayxsiApp\Payment;

interface PaymentGatewayInterface {
    public function charge(int $amount): void;
}
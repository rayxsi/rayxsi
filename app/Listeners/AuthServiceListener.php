<?php

namespace RayxsiApp\Listeners;

class AuthServiceListener
{
    public function store($event) {
        dump($event);
    }

    public function handle($event) {
        dump($event);
    }
}
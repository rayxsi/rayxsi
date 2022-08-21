<?php

namespace RayxsiApp\Events;

use Artificers\Events\Event;

class UserServiceEvent extends Event {
    public string $name = 'User service';
}
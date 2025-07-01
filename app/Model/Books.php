<?php

namespace RayxsiApp\Model;

use Artificers\Database\Raintter\Model;

class Books extends Model {
    public const TABLE_NAME = "books";
    public const PRIMARY_KEY = "Bid";

    public function users() {
        return $this->belongsTo([User::class]);
    }
}
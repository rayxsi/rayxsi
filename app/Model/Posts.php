<?php

namespace RayxsiApp\Model;

use Artificers\Database\Raintter\Model;

class Posts extends Model {
    public const PRIMARY_KEY = "Pid";
    public const TABLE_NAME = "posts";

    public function users() {
        return $this->belongsTo([User::class]);
    }
}
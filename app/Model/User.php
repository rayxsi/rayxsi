<?php

namespace RayxsiApp\Model;

use Artificers\Database\Raintter\Model;

class User extends Model {
    public const TABLE_NAME = "users";
    public const PRIMARY_KEY = "Id";

    public function booksAndPosts() {
        return $this->oneToOne([Books::class, Posts::class]);
    }
}
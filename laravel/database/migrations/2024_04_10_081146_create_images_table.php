<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('product_id')
                ->unsigned();
            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');

            $table->string('path', 191)
                ->collation('utf8mb4_0900_ai_ci')
                ->unique();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
};

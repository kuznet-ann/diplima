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
        Schema::create('order_product', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('product_id')
                ->unsigned();
            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');

            $table->bigInteger('order_id')
                ->unsigned();
            $table->foreign('order_id')
                ->references('id')
                ->on('orders')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');

            $table->decimal('price', 7, 2)->index();
            $table->integer('quantity')->unsigned()->default(1);

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
        Schema::dropIfExists('order_product');
    }
};

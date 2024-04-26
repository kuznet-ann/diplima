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
        Schema::create('order_status', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('status_id')
                ->unsigned();
            $table->bigInteger('order_id')
                ->unsigned();

            $table->foreign('status_id')
                ->references('id')
                ->on('statuses')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');

            $table->foreign('order_id')
                ->references('id')
                ->on('orders')
                ->onDelete('CASCADE')
                ->onUpdate('RESTRICT');
            // $table->unique(['status_id', 'order_id']);
            $table->date('set_at');
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
        Schema::dropIfExists('order_status');
    }
};

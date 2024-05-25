<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImageRequest;
use App\Http\Requests\UpdateImageRequest;
use App\Http\Resources\ImageCollection;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $images = Image::all();
        return new ImageCollection($images);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreImageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImageRequest $request)
    {
        $data = $request->validated();
        $imageFile = $request->file('image_file');
        // realpath() Получение абсолютного пути
        $temp = tempnam('C:/OpenServer/domains/diplima/laravel/storage/app/public', '');

        $fileType = exif_imagetype($imageFile->getPathname());
        switch ($fileType) {
            case IMAGETYPE_PNG:
                $extension = '.png';
                break;
            case IMAGETYPE_JPEG:
                $extension = '.jpeg';
                break;
            case IMAGETYPE_WEBP:
                $extension = '.webp';
                break;
            case IMAGETYPE_GIF:
                $extension = '.gif';
                break;

            default:
                throw new Exception();
                break;
        }

        $path = pathinfo($temp, PATHINFO_FILENAME) . $extension;
        Storage::disk('public')->put($path, $imageFile->getContent());
        unlink($temp);

        $data['path'] = $path;
        $image = Image::create($data);
        return response()->noContent(201)->withHeaders([
            'Location' => route('images.show', [
                'image' => $image->id,
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return new ImageResource($image);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateImageRequest  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateImageRequest $request, Image $image)
    {
        $data = $request->validated();
        $image->update($data);
        return response()->noContent(204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        $image->delete();
        return response()->noContent(204);
    }
}

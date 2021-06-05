var editor = new FroalaEditor('#edit', {
    // Set the image upload parameter.
    imageUploadParam: 'image_param',
    // Set the image upload URL.
    imageUploadURL: '/upload_image',

    // Additional upload params.
    imageUploadParams: {
        id: 'my_editor'
    },
    height: 500,
    fileUpload: false,
    videoUpload: false,
    // Set request type.
    imageUploadMethod: 'POST',
    // Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,

    // Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],

    events: {
        'image.beforeUpload': function(images) {
            // Return false if you want to stop the image upload.
        },
        'image.uploaded': function(response) {
            // Image was uploaded to the server.
        },
        'image.inserted': function($img, response) {
            // Image was inserted in the editor.
        },
        'image.replaced': function($img, response) {
            // Image was replaced in the editor.
        },
        'image.error': function(error, response) {
            // Bad link.
            if (error.code == 1) {

            }

            // No link in upload response.
            else if (error.code == 2) {

            }

            // Error during image upload.
            else if (error.code == 3) {

            }

            // Parsing response failed.
            else if (error.code == 4) {

            }
            // Image too text-large.
            else if (error.code == 5) {

            }
            // Invalid image type.
            else if (error.code == 6) {

            }
            // Image can be uploaded only to same domain in IE 8 and IE 9.
            else if (error.code == 7) {

            }
            // Response contains the original server response to the request if available.
        }
    }
})
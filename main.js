var canvas = new fabric.canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;

var object_of_the_player = "";
var block_image = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        object_of_the_player = Img;


        object_of_the_player.scaleToWidth(150);
        object_of_the_player.scaleToHeight(140);
        object_of_the_player.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
       block_image_object = Img;


       block_image_object.scaleToWidth(block_img_width);
       block_image_object.scaleToHeight(block_img_height);
       block_image_object.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
    });
}

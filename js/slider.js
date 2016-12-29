var $header = $("header");
var $headerOffset = $header.offset().left;
var $current = $header.find(".current a");
var $currentOffset = $current.offset().left - $headerOffset;
var $currentWidth = $current.width();
var $underline = $header.find("span");

function slider() {
  $underline.css({ //set underline to header.find(span)
    left: $currentOffset, // set left = (current class, left position) - (header, left position)
    width: $currentWidth // set width = current class li width)
  });
};

slider();

$header.find('a').hover( //run header find a on hover (maybe why it is display block)
  function () {
    $underline.css({
      left: $(this).offset().left - $headerOffset, //change left position to (this)
      width: $(this).width() //change width to (this)
    });
  },
  function () { //What does this do ???? I can't delete it without ruining the script
    slider();
  }
);

console.log('ran successfully');

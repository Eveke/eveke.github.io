$(document).ready(function() {


// $('button').click(colorChange);
//
// function colorChange(event) {
//   event.preventDefault();
//   $('button').addClass('red')
//
//   };


var options = [
              'Ashy',
              'Burnt',
              'Medicinal',
              'Chocolate',
              'Caramel',
              'Malty',
              'Earthy',
              'Floral',
              'Fruity',
              'Grassy',
              'Nutty',
              'Rubber',
              'Spicy',
              'Tobacco',
              'Woody'
              ];


              // $( '.tag').click(function() {
              //   var text = $('.tag').text();
              //   console.log(text);
              // });

              $('.ashy').click(function() {
                $('.note-description').addClass('hidden');
                $('.ashy-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.ashy').addClass('special');
              });


              $('.burnt').click(function() {
                $('.note-description').addClass('hidden');
                $('.burnt-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.burnt').addClass('special');
              });

              $('.medicinal').click(function() {
                $('.note-description').addClass('hidden');
                $('.medicinal-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.medicinal').addClass('special');
              });

              $('.caramel').click(function() {
                $('.note-description').addClass('hidden');
                $('.caramel-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.caramel').addClass('special');
              });

              $('.malty').click(function() {
                $('.note-description').addClass('hidden');
                $('.malty-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.malty').addClass('special');
              });

              $('.earthy').click(function() {
                $('.note-description').addClass('hidden');
                $('.earthy-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.earthy').addClass('special');
              });

              $('.floral').click(function() {
                $('.note-description').addClass('hidden');
                $('.floral-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.floral').addClass('special');
              });

              $('.fruity').click(function() {
                $('.note-description').addClass('hidden');
                $('.fruity-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.fruity').addClass('special');
              });

              $('.nutty').click(function() {
                $('.note-description').addClass('hidden');
                $('.nutty-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.nutty').addClass('special');
              });

              $('.chocolate').click(function() {
                $('.note-description').addClass('hidden');
                $('.chocolate-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.chocolate').addClass('special');
              });

              $('.grassy').click(function() {
                $('.note-description').addClass('hidden');
                $('.grassy-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.grassy').addClass('special');
              });

              $('.rubber').click(function() {
                $('.note-description').addClass('hidden');
                $('.rubber-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.rubber').addClass('special');
              });

              $('.tobacco').click(function() {
                $('.note-description').addClass('hidden');
                $('.tobacco-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.tobacco').addClass('special');
              });

              $('.spicy').click(function() {
                $('.note-description').addClass('hidden');
                $('.spicy-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.spicy').addClass('special');
              });

              $('.woody').click(function() {
                $('.note-description').addClass('hidden');
                $('.woody-note').removeClass('hidden');
                $('.tag').removeClass('special');
                $('.woody').addClass('special');
              });

}); //end document


// $.each(options, function(index, value) {
//     $('.city-type').append('<option>' + value + '</option>');
// });

// $('.ashy').click(changeNote);
//
// function changeNote(event) {
//   event.preventDefault();
//   note = $('.tag').text();
//   if (note === 'Ashy') {
//     $('.notes').addClass('hidden');
//   } else if (note === 'San Francisco') {
//     $('.notes').removeClass('hidden');
//   }
//
//   };

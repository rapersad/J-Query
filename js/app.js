console.log("connected!");

// $('#myBtn').click(function(){
//   alert('You clicked me!')
//   event.stopPropagation()
// })

// $('#container').on('click', function(){
//   alert('You the container div')
// })

$('#foods').append('<li>Pizza</li>', '<li>Burgers</li>', '<li>Pasta</li>')

$('#addDrink').on('click', function(){

    $('<li />', {html: newDrink}).appendTo('ul#drinks')
    $('#drinkInput').val('')
  }
})

$('#drinkInput').keydown(function(e){
  if(e.keyCode === 13){
    var newDrink = $('#drinkInput').val()
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')
    }
  } else {
    $('#drinkInput').parent(.toggleClass('purple')
  }
})

$(document).ready(function(){

})

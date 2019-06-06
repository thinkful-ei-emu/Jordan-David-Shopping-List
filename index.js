function start(){

    $('#js-shopping-list-form').submit(function(event) {

      const listItem = $('#shopping-list-entry').val();
      $('js-shopping-list-form').val('');
            event.preventDefault();
  
      $('.shopping-list').append(
        `<li><span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle"><span class="button-label">check</span></button>
            <button class="shopping-item-delete"><span class="button-label">delete</span></button>
          </div></li>`);
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
  
      $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });
  
  }
  
  $(start);
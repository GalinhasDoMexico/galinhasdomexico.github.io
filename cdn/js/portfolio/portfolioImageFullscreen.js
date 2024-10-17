$(document).ready(function() {
  function createModal(imageUrl) {
    const modal = $('<div>').addClass('modal');

    const modalContent = $('<div>').addClass('modal-content');

    const closeButton = $('<span>').addClass('close').text('×');
    closeButton.click(function() {
      modal.fadeOut();
    });

    const img = $('<img>').attr('src', imageUrl).css({ width: '100%', height: 'auto' });

    modalContent.append(closeButton, img);
    modal.append(modalContent);

    $('body').append(modal);
    modal.fadeIn();
  }

  $('.portfolio-image').click(function() {
    createModal($(this).attr('src'));
  });
});

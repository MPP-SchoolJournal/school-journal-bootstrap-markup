$(document).ready(function() {
    const $contextMenuMarksType = $('.context-menu-marks-type');

    var $selectedMarkInput;

    $('.mark-input').on('contextmenu', function(e) {
        e.preventDefault();
        $selectedMarkInput = $(this);
        $contextMenuMarksType.css('top', e.clientY);
        $contextMenuMarksType.css('left', e.clientX);
        showContextMenuMarksType($selectedMarkInput);
    });

    $('.context-menu-item a').on('blur', function() {
        hideContextMenuMarksType();
    });

    function showContextMenuMarksType($markInput) {
        $markInput.after($contextMenuMarksType);
        $contextMenuMarksType.show();
        $('.context-menu-item a')[0].focus();
    }

    function hideContextMenuMarksType() {
        $contextMenuMarksType.hide();
    }

    function clearMarkTypes() {
        $selectedMarkInput.removeClass('control-mark');
        $selectedMarkInput.removeClass('self-work-mark');
        $selectedMarkInput.removeClass('absent');
    }

    $('.context-menu-item').on('click', function() {
        $item = $(this);
        clearMarkTypes();
        $selectedMarkInput.addClass($item.data('type'));
        $selectedMarkInput = null;
        hideContextMenuMarksType();
    });
});

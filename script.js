var el = window.document.querySelector('.pulls-list-group');
if (el) { insertStatusIcon(el); }

function insertStatusIcon(el) {
    var $el = $(el);

    $el.find('.list-group-item').each(function () {
        var $this = $(this);

        var pullRequestPath = $this.find('a.js-navigation-open').attr('href');
        var pullRequestStatusPath = pullRequestPath + '/show_partial?partial=branch_status';

        $.ajax({
            url: pullRequestStatusPath,
            success: function (data) {
                $this.append(data).find('p').css({
                    'margin-top': '5px',
                    'margin-bottom': '0'
                });
            }
        });
    });
}

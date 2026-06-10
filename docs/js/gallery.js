$(function () {

  var $imgs = $('#gallery .item');
  var $buttons = $('#buttons');
  var $search = $('#filter-search');

  var tagged = {};
  var cache = [];

  var currentTag = 'all';
  var currentQuery = '';

  // Build tag index + search cache
  $imgs.each(function () {

    var el = this;
    var tags = $(this).data('tags') || '';
    var text = $(this).find('.lead').text().toLowerCase();

    cache.push({
      element: el,
      text: text
    });

    tags.split(',').forEach(function (tag) {
      tag = tag.trim();
      if (!tag) return;

      if (!tagged[tag]) {
        tagged[tag] = [];
      }

      tagged[tag].push(el);
    });

  });

  // APPLY FILTER (core brain)
  function applyFilter() {

    cache.forEach(function (item) {

      var matchTag =
        currentTag === 'all' ||
        tagged[currentTag]?.includes(item.element);

      var matchSearch =
        item.text.includes(currentQuery);

      if (matchTag && matchSearch) {
        item.element.style.display = '';
      } else {
        item.element.style.display = 'none';
      }

    });

  }

  // SEARCH INPUT
  $search.on('input', function () {
    currentQuery = this.value.trim().toLowerCase();
    applyFilter();
  });

  // SHOW ALL BUTTON
  $('<button/>', {
    text: 'Show All',
    class: 'active',
    click: function () {

      currentTag = 'all';
      currentQuery = '';
      $search.val('');

      $(this).addClass('active').siblings().removeClass('active');
      applyFilter();

    }

  }).appendTo($buttons);

  // TAG BUTTONS
  $.each(tagged, function (tagName) {

    $('<button/>', {
      text: tagName + ' (' + tagged[tagName].length + ')',
      click: function () {

        currentTag = tagName;

        $(this).addClass('active').siblings().removeClass('active');
        applyFilter();

      }

    }).appendTo($buttons);

  });

});
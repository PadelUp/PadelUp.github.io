$(document).ready(function() {
  'use strict';

  var menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".nav__icon-close"),
    menuList = $(".menu-overlay"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search"),
    headerOverlay = $(".header__overlay"),
    searchInput = $(".search__text"),
    html = $("html");


  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
    headerOverlay.addClass("is-visible");
    html.addClass("hide-scroll");
  }

  function menuClose() {
    menuList.removeClass("is-open");
    headerOverlay.removeClass("is-visible");
    html.removeClass("hide-scroll");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
    headerOverlay.addClass("is-visible");
    html.addClass("hide-scroll");
    setTimeout(function () {
      searchInput.focus();
    }, 100);
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
    headerOverlay.removeClass("is-visible");
    html.removeClass("hide-scroll");
  }

  // =====================
  // Simple Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '<div class="search-results__item"><a class="search-results__image" href="{url}" style="background-image: url({image})"></a> <a class="search-results__link" href="{url}"><span class="search-results-date"> <time datetime="{date}">{date}</time></span><div class="search-result-title">{title}</div></a></div>',
    noResultsText: '<li class="no-results"><h3>Nessun risultato</h3></li>'
  });

  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    $('body').addClass('is-in');
  },150)


  /* =======================
  // Hide Header
  ======================= */
  header();

  function header() {
    var initialScroll;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > initialScroll && initialScroll > 80) {
        $('.header').addClass('is-hide');
      } else {
        $('.header').removeClass('is-hide');
      }
      initialScroll = scroll;
    });
  }


  // =====================
  // Ajax Load More
  // =====================
  var $load_posts_button = $('.load-more-posts');

  $load_posts_button.click(function(e) {
    e.preventDefault();
    var loadMore = $('.load-more-section');
    var request_next_link = pagination_next_url.split('/page')[0] + '/page/' + pagination_next_page_number + '/';

    $.ajax({
      url: request_next_link,
      beforeSend: function() {
        $load_posts_button.text('Loading...');
      }
    }).done(function(data) {
      var posts = $('.grid__post', data);
      $('.grid').append(posts);

      $load_posts_button.text('Load more stories ').append('<i class="ion ion-ios-arrow-down"></i>');
      pagination_next_page_number++;

      if (pagination_next_page_number > pagination_available_pages_number) {
        loadMore.addClass('hide');
      }
    });
  });


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="facebook.com"]']
  });


  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");


  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });


});
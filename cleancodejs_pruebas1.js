Zammad.Handlers.Homes.HomesCalendarHandler = {
  hasBeenShow: false,
  init: () => { this.initEvents(); },

  initEvents: () => {
    const that = this;
    const checkBlock = $('.js-check-if-is-blocked[value="true"]');
    this.setDaysHoverEvent();
    this.setDaysClickEvent();
    this.setTimesHoverEvent();
    this.setTimesClickEvent();
    this.setBlockButtonEvent();
    this.setDesBlockButtonEvent();
    this.setTimeEvents();
    this.closeMagnificButton();
    checkBlock.parent().addClass('selected');
  },

  setDaysHoverEvent: () => {
    const btn = $(this);
    const index = btn.data('id');
    const timesContainer = $(`.js-times-container[data-day="${index}"].time-calendar`);
    const active = 'active';

    $('.js-day-button').hover( 
      () => {
        timesContainer.addClass(active);
        btn.addClass(active);
      }, 
      () => {
        timesContainer.removeClass(active);
        btn.removeClass(active);
      }
    );
  },

  setDaysClickEvent: () => {
    $('.js-day-button').on('click', () => {
      const btn = $(this);
      const index = btn.data('id');
      const buttonHasClass = btn.hasClass('is-blocked');
      const timesContainer = $(`.js-times-container[data-day="${index}"]`);

      $(`${timesContainer}.time-calendar`).toggleClass('selected');
      btn.toggleClass('is-blocked');
      $(`${timesContainer}.js-change-block`).prop('checked', !buttonHasClass);
      $(`${timesContainer}.js-change-time`).prop('checked', !buttonHasClass);
    });
  },

  setTimesHoverEvent: () => {
    const btn = $(this);
    const time = btn.data('time');
    const timeButton = $(`.js-time-button[data-time="${time}"]`);
    const active = 'active';

    $('.js-times-button').hover( 
      () => {
        timeButton.addClass(active);
        btn.addClass(active);
      }, 
      () => {
        timeButton.removeClass(active);
        btn.removeClass(active);
      }
    );
  },

  setTimesClickEvent: () => {
    $('.js-times-button').on('click', () => {
      const btn = $(this);
      const index = btn.data('time');
      const timeButton = $(`.js-time-button[data-time="${index}"].js-change-time`);
      const isBlocked = 'is-blocked';

      timeButton.prop('checked', !btn.hasClass(isBlocked));
      timeButton.toggleClass('selected');
      btn.toggleClass(isBlocked);
    });
  },

  setBlockButtonEvent: () => {
    $('.js-block-btn').on('click', () => {
      const btn = $(this);
      const id = btn.data('day');
      const dayButton = $(`.js-day-button[data-id="${id}`);
      const timesContainer = $(`.js-times-container[data-day="${id}"]`);
      const magicNumber = 7;

      dayButton.removeClass('active');
      dayButton.addClass('blocked');
      btn.hide();
      $('.js-desblock-btn').show();

      $(`${timesContainer}.js-change-time`).each( (checkBox) => {
          checkBox.prop('checked', true);
          checkBox.parent().addClass('selected');
      });
      $(`${timesContainer}.js-change-block`).prop('checked', true);

      if($('.js-day-button.complete, .js-day-button.blocked').length == magicNumber)
        $('.js-finish-btn').show();
    })
  },

  setDesBlockButtonEvent: () => {
    $('.js-desblock-btn').on('click', () => {
      const btn = $(this);
      const id = btn.data('day');
      const dayButton = $(`.js-day-button[data-id="${id}"]`);
      const timesContainer = $(`.js-times-container[data-day="${id}"]`);

      dayButton.addClass('active');
      dayButton.removeClass('blocked');
      btn.hide();
      $('.js-block-btn').show();

      $(`${timesContainer}.js-change-time`).each( (checkBox) => {
          checkBox.prop('checked', false);
          checkBox.parent().removeClass('selected');
      });
      $(`${timesContainer}.js-change-block`).prop('checked', false);
    })
  },

  setFinishButtonEvent: () => {
    $('.js-finish-btn').on('click', () => {
      $.magnificPopup.open({
        items: {
          src: '#calendar-finish-modal',
          type: 'inline',
          midClick: true
        }
      });
    })
  },

  setTimeEvents: () => {
    const self = this;
    $('.js-change-time').change( () => {
      const checkbox = $(this);
      const checkBoxParent = $checkbox.parent();
      const time = checkBoxParent.data('time');
      const day = checkBoxParent.parent().data('day');
      const selected = 'selected';

      if(checkbox.is(':checked')) {
        checkBoxParent.addClass(selected);
      } else {
        checkBoxParent.removeClass(selected);
      }

      self.verifyDaysAndTimesMarks(day, time);
    });
  },

  showPopupHelper: () => {
    if(this.hasBeenShow) return
    $.magnificPopup.open({
      items: {
        src: '#calendar-help-popup',
        type: 'inline'
      }
    });
    this.hasBeenShow = true;
  },

  markAsActiveTheNextUnCompletedDay: () => {
    const uncompleted_days  = $('.js-day-button:not(.complete)');

    if(uncompleted_days.length > 0)
      $(uncompleted_days[0]).click();
  },

  verifyDaysAndTimesMarks: (day, time) => {
    let total = $(`.js-times-container[data-day="${day}"].time-calendar`).length;
    let selectedTotal = $(`.js-times-container[data-day="${day}"].time-calendar.selected`).length;
    const buttonContainer = $(`.js-day-button[data-id="${day}"]`);
    const timesContainer = $(`.js-times-container[data-day=${day}].js-change-block`);
    const timesButton = $(`.js-times-button[data-time="${time}"]`);
    const isBlocked = 'is-blocked';

    if(selectedTotal == total) {
      buttonContainer.addClass(isBlocked);
    } else {
      buttonContainer.removeClass(isBlocked);
      timesContainer.prop('checked', false);
    }

    total = buttonContainer.length;
    selectedTotal = $(`.js-time-button[data-time="${time}"].selected`).length;

    if(selectedTotal == total) {
      timesButton.addClass(isBlocked);
    } else {
      timesButton.removeClass(isBlocked);
    }
  },

  closeMagnificButton: () => {
    $('.js-close-popup').click( () => {
      const textChange = $('.js-text-change');

      textChange.removeClass('white');
      textChange.parent().parent().css('z-index', 1);
      $.magnificPopup.close();
    });
  },

  initSlider: () => {
    const owl = $('#owl-carousel-calendar');
    
    setTimeout( () => {
      owl.trigger('destroy.owl.carousel');
      if($(window).width() > 768){ owl.removeClass('owl-carousel')};  
    }, 1000);
  }
};
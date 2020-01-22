$(document).ready(function(){
   $('.scrollspy').scrollSpy();
   $('.collapsible').collapsible();
});

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */;    // Custom Easing
    jQuery.extend( jQuery.easing,
    {
      easeInOutMaterial: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return c/4*((t-=2)*t*t + 2) + b;
      }
    });

;

/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */ (function ($) {

    //var jWindow = $(window);
    var elements = [];
    var elementsInView = [];
    var isSpying = false;
    var ticks = 0;
    var unique_id = 1;
    var offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    /**
     * Find elements that are within the boundary
     * @param {number} top
     * @param {number} right
     * @param {number} bottom
     * @param {number} left
     * @return {jQuery}     A collection of elements
     */
        function findElements(top, right, bottom, left) {
            var hits = $();
            $.each(elements, function (i, element) {
                if (element.height() > 0) {
                    /* MOD START */
                    var elTop = element.offset().top,
                     elLeft = element.offset().left,
                    /* MOD END */
                        elRight = elLeft + element.width(),
                        elBottom = elTop + element.height();
                   // console.log('Scrollable Bottom: ' + bottom + ' Top: ' + top);
                   // console.log(element.attr('id') + ' Bottom: ' + elBottom + ' Top: ' + elTop);

                    var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);

                    if (isIntersect) {
                        hits.push(element);
                    }
                }
            });

            return hits;
        }


        /**
         * Called when the user scrolls the window
         */
        function onScroll() {
            // unique tick id
            ++ticks;

            // viewport rectangle
            //var top = jWindow.scrollTop(),
            var top = jWindow.offset() ? jWindow.offset().top : jWindow.scrollTop(),
                left = jWindow.scrollLeft(),
                right = left + jWindow.width(),
                bottom = top + jWindow.height();
                //bottom = jWindow.height();

            // determine which elements are in view
            //        + 60 accounts for fixed nav
            /* MOD START */
            // var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
            var intersections = findElements(top + offset.top, right + offset.right, bottom + offset.bottom, left + offset.left);
            //var intersections = findElements(top, right, bottom, left);
            /* MOD END */
            $.each(intersections, function (i, element) {

                var lastTick = element.data('scrollSpy:ticks');
                if (typeof lastTick != 'number') {
                    // entered into view
                    element.triggerHandler('scrollSpy:enter');
                }

                // update tick id
                element.data('scrollSpy:ticks', ticks);
            });

            // determine which elements are no longer in view
            $.each(elementsInView, function (i, element) {
                var lastTick = element.data('scrollSpy:ticks');
                if (typeof lastTick == 'number' && lastTick !== ticks) {
                    // exited from view
                    element.triggerHandler('scrollSpy:exit');
                    element.data('scrollSpy:ticks', null);
                }
            });

            // remember elements in view for next tick
            elementsInView = intersections;
        }

        /**
         * Called when window is resized
         */
        function onWinSize() {
            jWindow.trigger('scrollSpy:winSize');
        }

        /**
         * Get time in ms
         * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
         * @type {function}
         * @return {number}
         */
    var getTime = (Date.now || function () {
        return new Date().getTime();
    });

    /**
     * Returns a function, that, when invoked, will only be triggered at most once
     * during a given window of time. Normally, the throttled function will run
     * as much as it can, without ever going more than once per `wait` duration;
     * but if you'd like to disable the execution on the leading edge, pass
     * `{leading: false}`. To disable execution on the trailing edge, ditto.
     * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
     * @param {function} func
     * @param {number} wait
     * @param {Object=} options
     * @returns {Function}
     */
    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function () {
            previous = options.leading === false ? 0 : getTime();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function () {
            var now = getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    /**
     * Enables ScrollSpy using a selector
     * @param {jQuery|string} selector  The elements collection, or a selector
     * @param {Object=} options Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
     * @returns {jQuery}
     */
    $.scrollSpy = function (selector, options) {
        /* MOD START */
        jWindow = $(options.scrollParent).first();
        /* MOD END */
        var visible = [];
        selector = $(selector);
        selector.each(function (i, element) {
            elements.push($(element));
            $(element).data("scrollSpy:id", i);
            // Smooth scroll to section
            $('a[href=#' + $(element).attr('id') + ']').click(function (e) {
                e.preventDefault();
                /* MOD START */
                //var top = jWindow.offset() ? jWindow.offset().top : jWindow.scrollTop()
                
                console.log(this.hash + ' offset: ' + offset);

                //          offset - 200 allows elements near bottom of page to scroll

                //$('html, body').animate({ scrollTop: offset - 200 }, {duration: 400, easing: 'easeOutCubic'});
                if (options.scrollParent == window) {
                   var offset = $(this.hash).position().top + 1;
                   $('html, body').animate({
                        scrollTop: offset
                    }, {
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    var offset = $(this.hash).position().top - jWindow.offset().top + 1;
                    jWindow.animate({
                        scrollTop: jWindow.scrollTop() + offset
                    }, {
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                }
                /* MOD END */

            });
        });
        options = options || {
            throttle: 100
        };

        offset.top = options.offsetTop || 0;
        offset.right = options.offsetRight || 0;
        offset.bottom = options.offsetBottom || 0;
        offset.left = options.offsetLeft || 0;

        var throttledScroll = throttle(onScroll, options.throttle || 100);
        var readyScroll = function () {
            $(document).ready(throttledScroll);
        };

        if (!isSpying) {
            jWindow.on('scroll', readyScroll);
            jWindow.on('resize', readyScroll);
            isSpying = true;
        }

        // perform a scan once, after current execution context, and after dom is ready
        setTimeout(readyScroll, 0);


        selector.on('scrollSpy:enter', function () {
            visible = $.grep(visible, function (value) {
                return value.height() != 0;
            });

            var $this = $(this);

            if (visible[0]) {
                $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
                if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
                    visible.unshift($(this));
                } else {
                    visible.push($(this));
                }
            } else {
                visible.push($(this));
            }


            $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
        });
        selector.on('scrollSpy:exit', function () {
            visible = $.grep(visible, function (value) {
                return value.height() != 0;
            });

            if (visible[0]) {
                $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
                var $this = $(this);
                visible = $.grep(visible, function (value) {
                    return value.attr('id') != $this.attr('id');
                });
                if (visible[0]) { // Check if empty
                    $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
                }
            }
        });

        return selector;
    };     
     /**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);


 $(document).ready(function(){
    $('.scrollspy').scrollSpy({
        scrollParent: '#scrollable',
        offsetTop: 0
    });
 });


const countryList = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "phone_code": "+93"
  },
  {
    "name": "Albania",
    "code": "AL",
    "phone_code": "+355"
  },
  {
    "name": "Algeria",
    "code": "DZ",
    "phone_code": "+213"
  },
  {
    "name": "American Samoa",
    "code": "AS",
    "phone_code": "+1"
  },
  {
    "name": "Andorra",
    "code": "AD",
    "phone_code": "+376"
  },
  {
    "name": "Angola",
    "code": "AO",
    "phone_code": "+244"
  },
  {
    "name": "Anguilla",
    "code": "AI",
    "phone_code": "+1"
  },
  {
    "name": "Antigua",
    "code": "AG",
    "phone_code": "+1"
  },
  {
    "name": "Argentina",
    "code": "AR",
    "phone_code": "+54"
  },
  {
    "name": "Armenia",
    "code": "AM",
    "phone_code": "+374"
  },
  {
    "name": "Aruba",
    "code": "AW",
    "phone_code": "+297"
  },
  {
    "name": "Australia",
    "code": "AU",
    "phone_code": "+61"
  },
  {
    "name": "Austria",
    "code": "AI",
    "phone_code": "+43"
  },
  {
    "name": "Azerbaijan",
    "code": "AZ",
    "phone_code": "+994"
  },
  {
    "name": "Bahrain",
    "code": "BH",
    "phone_code": "+973"
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "phone_code": "+880"
  },
  {
    "name": "Barbados",
    "code": "BB",
    "phone_code": "+1"
  },
  {
    "name": "Belarus",
    "code": "BY",
    "phone_code": "+375"
  },
  {
    "name": "Belgium",
    "code": "BE",
    "phone_code": "+32"
  },
  {
    "name": "Belize",
    "code": "BZ",
    "phone_code": "+501"
  },
  {
    "name": "Benin",
    "code": "BJ",
    "phone_code": "+229"
  },
  {
    "name": "Bermuda",
    "code": "BM",
    "phone_code": "+1"
  },
  {
    "name": "Bhutan",
    "code": "BT",
    "phone_code": "+975"
  },
  {
    "name": "Bolivia",
    "code": "BO",
    "phone_code": "+591"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "BA",
    "phone_code": "+387"
  },
  {
    "name": "Botswana",
    "code": "BW",
    "phone_code": "+267"
  },
  {
    "name": "Brazil",
    "code": "BR",
    "phone_code": "+55"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "IO",
    "phone_code": "+246"
  },
  {
    "name": "British Virgin Islands",
    "code": "VG",
    "phone_code": "+1"
  },
  {
    "name": "Brunei",
    "code": "BN",
    "phone_code": "+673"
  },
  {
    "name": "Bulgaria",
    "code": "BG",
    "phone_code": "+359"
  },
  {
    "name": "Burkina Faso",
    "code": "BF",
    "phone_code": "+226"
  },
  {
    "name": "Burma Myanmar",
    "code": "MM",
    "phone_code": "+95"
  },
  {
    "name": "Burundi",
    "code": "BI",
    "phone_code": "+257"
  },
  {
    "name": "Cambodia",
    "code": "KH",
    "phone_code": "+855"
  },
  {
    "name": "Cameroon",
    "code": "CM",
    "phone_code": "+237"
  },
  {
    "name": "Canada",
    "code": "CA",
    "phone_code": "+1"
  },
  {
    "name": "Cape Verde",
    "code": "CV",
    "phone_code": "+238"
  },
  {
    "name": "Cayman Islands",
    "code": "KY",
    "phone_code": "+1"
  },
  {
    "name": "Central African Republic",
    "code": "CF",
    "phone_code": "+236"
  },
  {
    "name": "Chad",
    "code": "ID",
    "phone_code": "+235"
  },
  {
    "name": "Chile",
    "code": "CL",
    "phone_code": "+56"
  },
  {
    "name": "China",
    "code": "CN",
    "phone_code": "+86"
  },
  {
    "name": "Colombia",
    "code": "CO",
    "phone_code": "+57"
  },
  {
    "name": "Comoros",
    "code": "KM",
    "phone_code": "+269"
  },
  {
    "name": "Cook Islands",
    "code": "CK",
    "phone_code": "+682"
  },
  {
    "name": "Costa Rica",
    "code": "CR",
    "phone_code": "+506"
  },
  {
    "name": "Côte dIvoire",
    "code": "CI",
    "phone_code": "+225"
  },
  {
    "name": "Croatia",
    "code": "HR",
    "phone_code": "+385"
  },
  {
    "name": "Cuba",
    "code": "CU",
    "phone_code": "+53"
  },
  {
    "name": "Cyprus",
    "code": "CY",
    "phone_code": "+357"
  },
  {
    "name": "Czech Republic",
    "code": "CZ",
    "phone_code": "+420"
  },
  {
    "name": "Democratic Republic of Congo",
    "code": "CD",
    "phone_code": "+243"
  },
  {
    "name": "Denmark",
    "code": "DK",
    "phone_code": "+45"
  },
  {
    "name": "Djibouti",
    "code": "DJ",
    "phone_code": "+253"
  },
  {
    "name": "Dominica",
    "code": "DM",
    "phone_code": "+1"
  },
  {
    "name": "Dominican Republic",
    "code": "DO",
    "phone_code": "+1"
  },
  {
    "name": "Ecuador",
    "code": "EC",
    "phone_code": "+593"
  },
  {
    "name": "Egypt",
    "code": "EG",
    "phone_code": "+20"
  },
  {
    "name": "El Salvador",
    "code": "SV",
    "phone_code": "+503"
  },
  {
    "name": "Equatorial Guinea",
    "code": "GQ",
    "phone_code": "+240"
  },
  {
    "name": "Eritrea",
    "code": "ER",
    "phone_code": "+291"
  },
  {
    "name": "Estonia",
    "code": "EE",
    "phone_code": "+372"
  },
  {
    "name": "Ethiopia",
    "code": "ET",
    "phone_code": "+251"
  },
  {
    "name": "Falkland Islands",
    "code": "FK",
    "phone_code": "+500"
  },
  {
    "name": "Faroe Islands",
    "code": "FO",
    "phone_code": "+298"
  },
  {
    "name": "Federated States of Micronesia",
    "code": "FM",
    "phone_code": "+691"
  },
  {
    "name": "Fiji",
    "code": "FJ",
    "phone_code": "+679"
  },
  {
    "name": "Finland",
    "code": "FI",
    "phone_code": "+358"
  },
  {
    "name": "France",
    "code": "FR",
    "phone_code": "+33"
  },
  {
    "name": "French Guiana",
    "code": "GF",
    "phone_code": "+594"
  },
  {
    "name": "French Polynesia",
    "code": "PF",
    "phone_code": "+689"
  },
  {
    "name": "Gabon",
    "code": "GA",
    "phone_code": "+241"
  },
  {
    "name": "Georgia",
    "code": "GE",
    "phone_code": "+995"
  },
  {
    "name": "Germany",
    "code": "DE",
    "phone_code": "+49"
  },
  {
    "name": "Ghana",
    "code": "GH",
    "phone_code": "+233"
  },
  {
    "name": "Gibraltar",
    "code": "GI",
    "phone_code": "+350"
  },
  {
    "name": "Greece",
    "code": "GR",
    "phone_code": "+30"
  },
  {
    "name": "Greenland",
    "code": "GL",
    "phone_code": "+299"
  },
  {
    "name": "Grenada",
    "code": "GD",
    "phone_code": "+1"
  },
  {
    "name": "Guadeloupe",
    "code": "GP",
    "phone_code": "+590"
  },
  {
    "name": "Guam",
    "code": "GU",
    "phone_code": "+1"
  },
  {
    "name": "Guatemala",
    "code": "GT",
    "phone_code": "+502"
  },
  {
    "name": "Guinea",
    "code": "GN",
    "phone_code": "+224"
  },
  {
    "name": "Guinea-Bissau",
    "code": "GW",
    "phone_code": "+245"
  },
  {
    "name": "Guyana",
    "code": "GY",
    "phone_code": "+592"
  },
  {
    "name": "Haiti",
    "code": "HT",
    "phone_code": "+509"
  },
  {
    "name": "Honduras",
    "code": "HN",
    "phone_code": "+504"
  },
  {
    "name": "Hong Kong",
    "code": "HK",
    "phone_code": "+852"
  },
  {
    "name": "Hungary",
    "code": "HU",
    "phone_code": "+36"
  },
  {
    "name": "Iceland",
    "code": "IS",
    "phone_code": "+354"
  },
  {
    "name": "India",
    "code": "IN",
    "phone_code": "+91"
  },
  {
    "name": "Indonesia",
    "code": "ID",
    "phone_code": "+62"
  },
  {
    "name": "Iran",
    "code": "IR",
    "phone_code": "+98"
  },
  {
    "name": "Iraq",
    "code": "IQ",
    "phone_code": "+964"
  },
  {
    "name": "Ireland",
    "code": "IE",
    "phone_code": "+353"
  },
  {
    "name": "Israel",
    "code": "IL",
    "phone_code": "+972"
  },
  {
    "name": "Italy",
    "code": "IT",
    "phone_code": "+39"
  },
  {
    "name": "Jamaica",
    "code": "JM",
    "phone_code": "+1"
  },
  {
    "name": "Japan",
    "code": "JP",
    "phone_code": "+81"
  },
  {
    "name": "Jordan",
    "code": "JO",
    "phone_code": "+962"
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "phone_code": "+7"
  },
  {
    "name": "Kenya",
    "code": "KE",
    "phone_code": "+254"
  },
  {
    "name": "Kiribati",
    "code": "KI",
    "phone_code": "+686"
  },
  {
    "name": "Kosovo",
    "code": "XK",
    "phone_code": "+383"
  },
  {
    "name": "Kuwait",
    "code": "KW",
    "phone_code": "+965"
  },
  {
    "name": "Kyrgyzstan",
    "code": "KG",
    "phone_code": "+996"
  },
  {
    "name": "Laos",
    "code": "LA",
    "phone_code": "+856"
  },
  {
    "name": "Latvia",
    "code": "LV",
    "phone_code": "+371"
  },
  {
    "name": "Lebanon",
    "code": "LB",
    "phone_code": "+961"
  },
  {
    "name": "Lesotho",
    "code": "LS",
    "phone_code": "+266"
  },
  {
    "name": "Liberia",
    "code": "LR",
    "phone_code": "+231"
  },
  {
    "name": "Libya",
    "code": "LY",
    "phone_code": "+218"
  },
  {
    "name": "Liechtenstein",
    "code": "LI",
    "phone_code": "+423"
  },
  {
    "name": "Lithuania",
    "code": "LT",
    "phone_code": "+370"
  },
  {
    "name": "Luxembourg",
    "code": "LU",
    "phone_code": "+352"
  },
  {
    "name": "Macau",
    "code": "MO",
    "phone_code": "+853"
  },
  {
    "name": "Macedonia",
    "code": "MK",
    "phone_code": "+389"
  },
  {
    "name": "Madagascar",
    "code": "MG",
    "phone_code": "+261"
  },
  {
    "name": "Malawi",
    "code": "MW",
    "phone_code": "+265"
  },
  {
    "name": "Malaysia",
    "code": "MY",
    "phone_code": "+60"
  },
  {
    "name": "Maldives",
    "code": "MV",
    "phone_code": "+960"
  },
  {
    "name": "Mali",
    "code": "ML",
    "phone_code": "+223"
  },
  {
    "name": "Malta",
    "code": "MT",
    "phone_code": "+356"
  },
  {
    "name": "Marshall Islands",
    "code": "MH",
    "phone_code": "+692"
  },
  {
    "name": "Martinique",
    "code": "MQ",
    "phone_code": "+596"
  },
  {
    "name": "Mauritania",
    "code": "MR",
    "phone_code": "+222"
  },
  {
    "name": "Mauritius",
    "code": "MU",
    "phone_code": "+230"
  },
  {
    "name": "Mayotte",
    "code": "YT",
    "phone_code": "+262"
  },
  {
    "name": "Mexico",
    "code": "MX",
    "phone_code": "+52"
  },
  {
    "name": "Moldova",
    "code": "MD",
    "phone_code": "+373"
  },
  {
    "name": "Monaco",
    "code": "MC",
    "phone_code": "+377"
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "phone_code": "+976"
  },
  {
    "name": "Montenegro",
    "code": "ME",
    "phone_code": "+382"
  },
  {
    "name": "Montserrat",
    "code": "MS",
    "phone_code": "+1"
  },
  {
    "name": "Morocco",
    "code": "MA",
    "phone_code": "+212"
  },
  {
    "name": "Mozambique",
    "code": "MZ",
    "phone_code": "+258"
  },
  {
    "name": "Namibia",
    "code": "NA",
    "phone_code": "+264"
  },
  {
    "name": "Nauru",
    "code": "NR",
    "phone_code": "+674"
  },
  {
    "name": "Nepal",
    "code": "NP",
    "phone_code": "+977"
  },
  {
    "name": "Netherlands",
    "code": "NL",
    "phone_code": "+31"
  },
  {
    "name": "Netherlands Antilles",
    "code": "AN",
    "phone_code": "+599"
  },
  {
    "name": "New Caledonia",
    "code": "NC",
    "phone_code": "+687"
  },
  {
    "name": "New Zealand",
    "code": "NZ",
    "phone_code": "+64"
  },
  {
    "name": "Nicaragua",
    "code": "NI",
    "phone_code": "+505"
  },
  {
    "name": "Niger",
    "code": "NE",
    "phone_code": "+227"
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "phone_code": "+234"
  },
  {
    "name": "Niue",
    "code": "NU",
    "phone_code": "+683"
  },
  {
    "name": "Norfolk Island",
    "code": "NF",
    "phone_code": "+672"
  },
  {
    "name": "North Korea",
    "code": "KP",
    "phone_code": "+850"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "MP",
    "phone_code": "+1"
  },
  {
    "name": "Norway",
    "code": "NO",
    "phone_code": "+47"
  },
  {
    "name": "Oman",
    "code": "OM",
    "phone_code": "+968"
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "phone_code": "+92"
  },
  {
    "name": "Palau",
    "code": "PW",
    "phone_code": "+680"
  },
  {
    "name": "Palestine",
    "code": "PS",
    "phone_code": "+970"
  },
  {
    "name": "Panama",
    "code": "PA",
    "phone_code": "+507"
  },
  {
    "name": "Papua New Guinea",
    "code": "PG",
    "phone_code": "+675"
  },
  {
    "name": "Paraguay",
    "code": "PY",
    "phone_code": "+595"
  },
  {
    "name": "Peru",
    "code": "PE",
    "phone_code": "+51"
  },
  {
    "name": "Philippines",
    "code": "PH",
    "phone_code": "+63"
  },
  {
    "name": "Poland",
    "code": "PL",
    "phone_code": "+48"
  },
  {
    "name": "Portugal",
    "code": "PT",
    "phone_code": "+351"
  },
  {
    "name": "Puerto Rico",
    "code": "PR",
    "phone_code": "+1"
  },
  {
    "name": "Qatar",
    "code": "QA",
    "phone_code": "+974"
  },
  {
    "name": "Republic of the Congo",
    "code": "CG",
    "phone_code": "+242"
  },
  {
    "name": "Réunion",
    "code": "RE",
    "phone_code": "+262"
  },
  {
    "name": "Romania",
    "code": "RO",
    "phone_code": "+40"
  },
  {
    "name": "Russia",
    "code": "RU",
    "phone_code": "+7"
  },
  {
    "name": "Rwanda",
    "code": "RW",
    "phone_code": "+250"
  },
  {
    "name": "Saint Barthélemy",
    "code": "BL",
    "phone_code": "+590"
  },
  {
    "name": "Saint Helena",
    "code": "SH",
    "phone_code": "+290"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "KN",
    "phone_code": "+1"
  },
  {
    "name": "Saint Martin",
    "code": "MF",
    "phone_code": "+590"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "PM",
    "phone_code": "+508"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "VC",
    "phone_code": "+1"
  },
  {
    "name": "Samoa",
    "code": "WS",
    "phone_code": "+685"
  },
  {
    "name": "San Marino",
    "code": "SM",
    "phone_code": "+378"
  },
  {
    "name": "São Tomé and Príncipe",
    "code": "ST",
    "phone_code": "+239"
  },
  {
    "name": "Saudi Arabia",
    "code": "SA",
    "phone_code": "+966"
  },
  {
    "name": "Senegal",
    "code": "SN",
    "phone_code": "+221"
  },
  {
    "name": "Serbia",
    "code": "RS",
    "phone_code": "+381"
  },
  {
    "name": "Seychelles",
    "code": "SC",
    "phone_code": "+248"
  },
  {
    "name": "Sierra Leone",
    "code": "SL",
    "phone_code": "+232"
  },
  {
    "name": "Singapore",
    "code": "SG",
    "phone_code": "+65"
  },
  {
    "name": "Slovakia",
    "code": "SK",
    "phone_code": "+421"
  },
  {
    "name": "Slovenia",
    "code": "SI",
    "phone_code": "+386"
  },
  {
    "name": "Solomon Islands",
    "code": "SB",
    "phone_code": "+677"
  },
  {
    "name": "Somalia",
    "code": "SO",
    "phone_code": "+252"
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "phone_code": "+27"
  },
  {
    "name": "South Korea",
    "code": "KR",
    "phone_code": "+82"
  },
  {
    "name": "Spain",
    "code": "ES",
    "phone_code": "+34"
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "phone_code": "+94"
  },
  {
    "name": "St. Lucia",
    "code": "LC",
    "phone_code": "+1"
  },
  {
    "name": "Sudan",
    "code": "SD",
    "phone_code": "+249"
  },
  {
    "name": "Suriname",
    "code": "SR",
    "phone_code": "+597"
  },
  {
    "name": "Swaziland",
    "code": "SZ",
    "phone_code": "+268"
  },
  {
    "name": "Sweden",
    "code": "SE",
    "phone_code": "+46"
  },
  {
    "name": "Switzerland",
    "code": "CH",
    "phone_code": "+41"
  },
  {
    "name": "Syria",
    "code": "SY",
    "phone_code": "+963"
  },
  {
    "name": "Taiwan",
    "code": "TW",
    "phone_code": "+886"
  },
  {
    "name": "Tajikistan",
    "code": "TJ",
    "phone_code": "+992"
  },
  {
    "name": "Tanzania",
    "code": "TZ",
    "phone_code": "+255"
  },
  {
    "name": "Thailand",
    "code": "TH",
    "phone_code": "+66"
  },
  {
    "name": "The Bahamas",
    "code": "BS",
    "phone_code": "+1"
  },
  {
    "name": "The Gambia",
    "code": "GM",
    "phone_code": "+220"
  },
  {
    "name": "Timor-Leste",
    "code": "TL",
    "phone_code": "+670"
  },
  {
    "name": "Togo",
    "code": "TG",
    "phone_code": "+228"
  },
  {
    "name": "Tokelau",
    "code": "TK",
    "phone_code": "+690"
  },
  {
    "name": "Tonga",
    "code": "TO",
    "phone_code": "+676"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "TT",
    "phone_code": "+1"
  },
  {
    "name": "Tunisia",
    "code": "TN",
    "phone_code": "+216"
  },
  {
    "name": "Turkey",
    "code": "TR",
    "phone_code": "+90"
  },
  {
    "name": "Turkmenistan",
    "code": "TM",
    "phone_code": "+993"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "TC",
    "phone_code": "+1"
  },
  {
    "name": "Tuvalu",
    "code": "TV",
    "phone_code": "+688"
  },
  {
    "name": "Uganda",
    "code": "UG",
    "phone_code": "+256"
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "phone_code": "+380"
  },
  {
    "name": "United Arab Emirates",
    "code": "AE",
    "phone_code": "+971"
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "phone_code": "+44"
  },
  {
    "name": "United States",
    "code": "US",
    "phone_code": "+1"
  },
  {
    "name": "Uruguay",
    "code": "UY",
    "phone_code": "+598"
  },
  {
    "name": "US Virgin Islands",
    "code": "VI",
    "phone_code": "+1"
  },
  {
    "name": "Uzbekistan",
    "code": "UZ",
    "phone_code": "+998"
  },
  {
    "name": "Vanuatu",
    "code": "VU",
    "phone_code": "+678"
  },
  {
    "name": "Vatican City",
    "code": "VA",
    "phone_code": "+39"
  },
  {
    "name": "Venezuela",
    "code": "VE",
    "phone_code": "+58"
  },
  {
    "name": "Vietnam",
    "code": "VN",
    "phone_code": "+84"
  },
  {
    "name": "Wallis and Futuna",
    "code": "WF",
    "phone_code": "+681"
  },
  {
    "name": "Yemen",
    "code": "YE",
    "phone_code": "+967"
  },
  {
    "name": "Zambia",
    "code": "ZM",
    "phone_code": "+260"
  },
  {
    "name": "Zimbabwe",
    "code": "ZW",
    "phone_code": "+263"
  }
]

const monthList = [
  {
    "name": "January",
    "number": "01"
  },
  {
    "name": "Feburary",
    "number": "02"
  },
  {
    "name": "March",
    "number": "03"
  },
  {
    "name": "April",
    "number": "04"
  },
  {
    "name": "May",
    "number": "05"
  },
  {
    "name": "June",
    "number": "06"
  },
  {
    "name": "July",
    "number": "07"
  },
  {
    "name": "August",
    "number": "08"
  },
  {
    "name": "September",
    "number": "09"
  },
  {
    "name": "October",
    "number": "10"
  },
  {
    "name": "November",
    "number": "11"
  },
  {
    "name": "December",
    "number": "12"
  },
]




let dropdown = $("<select>");
$(dropdown).attr("class", "countryDropdown custom-select");
$(dropdown).attr("style", "color: black;");

let monthDropdown = $("<select>");
$(monthDropdown).attr("class", "monthDropdown custom-select")
$(monthDropdown).attr("style", "color: black;");


for (let i = 0; i < countryList.length; i++) {
  let countryName = $(`<option countryCode='${countryList[i].code}' value='${countryList[i].name}'>${countryList[i].name}<option>`);
  $(dropdown).append(countryName);
}


for (let i = 0; i < monthList.length; i++) {
  let monthsName = $(`<option>${monthList[i].name}<option>`);
  monthsName.attr("monthNum", monthList[i].number)
  $(monthDropdown).append(monthsName);
}
$(".testDropdown").append(dropdown)
$(".testDropdown2").append(monthDropdown)








$(".clicker").on("click", function () {

  $.each($(".countryDropdown option:selected"), function () {
    let countryCode = $(this).attr("countryCode");
    let countryName = $(this).attr("value");
    console.log(countryName)



    $.each($(".monthDropdown option:selected"), function () {
      let monthNum = $(this).attr("monthNum");



       window.location.pathname = `/holidays/${countryCode}/${monthNum}`

      
      
    })
  });
});

// Debounce do Lodash
debounch = function(func, wait, immediate) {

    let timeout;
    return function() {

        let context = this, args = arguments;
        let later = function() {

            timeout = null;
            if (!immediate) func.apply(context, args);

        };

        let calNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (calNow) func.apply(context, args);

    };

};

(function () {

    let $target = $(".anime"),
        animationClass = "animation-top-start",
        offset = $(window).height() * 3.3/4;

    function animationScrollTitle()  {

        let documentTop = $(document).scrollTop();
        $target.each(function() {

            let itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset){

                $(this).addClass(animationClass);

            }else {

                $(this).removeClass(animationClass);

            }

        })

    }



    $(document).scroll(debounch(function(){

        animationScrollTitle();
        
    }, 40));

}());
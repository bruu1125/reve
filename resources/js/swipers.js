$(document).ready(function () { 
    const visualSwiper = new Swiper(".main-banner__visual", {
                slidesPerView: 'auto', // 한 슬라이드에 보여줄 갯수
                spaceBetween: 0, // 슬라이드 사이 여백
                loop: true, // 슬라이드 반복 여부
                loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                },
                autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
                    delay: 5000,   // 시간 설정
                    disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
                },
                navigation: {   // 버튼 사용자 지정
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
    });

      const mainBrandSwiper = new Swiper('.main-banner__brands', {
            loop: true,
            freeMode: false,
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 5,
          initialSlide: 2,
            navigation: {   // 버튼 사용자 지정
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
          },
            breakpoints: {
        
          768: {
            slidesPerView: 1.2,  //브라우저가 768보다 클 때
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.2,  //브라우저가 1024보다 클 때
            spaceBetween: 20,
          },
        },
      });
    
    const mainReviewSwiper = new Swiper('.main-bestreview__wrap', {
      freeMode: false,
    navigation: {   // 버튼 사용자 지정
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
    },
            slidesPerView: 1.4,
            spaceBetween: 10,
            breakpoints: {
          520: {
            slidesPerView: 1.7,  //브라우저가 768보다 클 때
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.6,  //브라우저가 768보다 클 때
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.8,  //브라우저가 1024보다 클 때
            spaceBetween: 20,
              },
          1439: {
            slidesPerView: 3.5,  //브라우저가 1024보다 클 때
            spaceBetween: 20,
          },
        },
    });
  
  const mediaGallaryImage = new Swiper('.media-gallary', {
            slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
                spaceBetween: 5, // 슬라이드 사이 여백
                loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 0, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
                resistanceRatio: 0,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                },
                autoplay: 0,
                navigation: {   // 버튼 사용자 지정
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
    },

                
  });

  const productPageVisual = new Swiper('.productpage-banner__visual', {
            loop: true,
            freeMode: false,
            slidesPerView: 1,
          autoplay: {
            delay: 5000, 
            disableOnInteraction: false 
    },
          navigation: {   
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
    },        
    breakpoints: {
      768: {
slidesPerView: 1.3,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 5,
            initialSlide: 2,
      },
      1024: {
            slidesPerView: 1.8,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 5,
            initialSlide: 2,
              },
          1439: {
            slidesPerView: 2.4,  //브라우저가 1024보다 클 때
            
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 5,
            initialSlide: 2,
          },
    }
  });


  const timedealList = new Swiper('.timedeal-wrap', {
            loop: true,
            freeMode: false,
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            autoplay: {
            delay: 3500, 
            disableOnInteraction: false 
    },
    breakpoints: {
      474: {
        slidesPerView: 1.5,
      },
      559: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.5,
      },
      1439: {
        
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
      },
    }
  });

})




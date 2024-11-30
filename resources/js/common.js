document.addEventListener('DOMContentLoaded', () => {
    // 헤더
    const headerWrap = document.querySelector('.header');
    const header = document.querySelector('.header-contents');
    const mHeader = document.querySelector('.header-contents__Mobile');
    const topBtn = document.querySelector('.topbutton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) { 
            headerWrap.style.top = '-4vh';
            header.classList.add('header-scroll'); 
            mHeader.classList.add('header-Mobile-scroll');

        } else {
            headerWrap.style.top = '0';
            header.classList.remove('header-scroll'); 
            mHeader.classList.remove('header-Mobile-scroll');
        }

        if (window.scrollY > 500) {
            topBtn.classList.add('topbtnview');
        } else {
            topBtn.classList.remove('topbtnview');
        }
    });
    
    const searchIcon = document.querySelector('#searchButton');
    const searchBox = document.querySelector('.header-searchbox')
        searchIcon.addEventListener('click', () => {
            searchBox.classList.toggle('boxview');
        })
    
    topBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

  
    // m-footer__contenttitle 클릭
    const titles = document.querySelectorAll('.m-footer__contenttitle');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const parent = title.closest('.m-footer-infolist');
            const content = parent.querySelector('.m-footer__contentinner');

            document.querySelectorAll('.m-footer-infolist.open').forEach(openParent => {
                if (openParent !== parent) { 
                    openParent.classList.remove('open');
                    openParent.querySelector('.m-footer__contentinner').style.maxHeight = null;
                }
            });

            if (parent.classList.contains('open')) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }

            parent.classList.toggle('open');
        });
    });



});

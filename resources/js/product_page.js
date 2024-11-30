const categoryBar = document.querySelector('.productpage-naviarea');

function handleScroll() {
    // 768px 이상일 때만 동작
    if (window.innerWidth >= 768) {
        if (window.scrollY > 0) {
            categoryBar.classList.add('row');
        } else {
            categoryBar.classList.remove('row');
        }
    } else {
        categoryBar.classList.remove('row'); // 768px 미만에서는 항상 제거
    }
}

// 페이지 로드 시 초기 상태를 설정
handleScroll();

// 스크롤 이벤트가 발생할 때마다 handleScroll 호출
window.addEventListener('scroll', handleScroll);

// 화면 크기 변경 시에도 handleScroll 호출
window.addEventListener('resize', handleScroll);

// 마우스 드래그로 스크롤 기능
const categoryList = document.querySelector('.productpage-category__list');
let isMouseDown = false;
let startX;
let scrollLeft;

// 마우스 버튼을 눌렀을 때
categoryList.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - categoryList.offsetLeft;
    scrollLeft = categoryList.scrollLeft;
    categoryList.style.cursor = 'grabbing';
});

// 마우스를 움직일 때
categoryList.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - categoryList.offsetLeft;
    const walk = (x - startX) * 0.8;  // 스크롤 속도 조절

    // 스크롤 위치를 업데이트하는 부분을 requestAnimationFrame으로 최적화
    requestAnimationFrame(() => {
        categoryList.scrollLeft = scrollLeft - walk;
    });
});

// 마우스 버튼을 뗐을 때
categoryList.addEventListener('mouseup', () => {
    isMouseDown = false;
    categoryList.style.cursor = 'grab';
});

// 마우스가 영역을 벗어났을 때
categoryList.addEventListener('mouseleave', () => {
    isMouseDown = false;
    categoryList.style.cursor = 'grab';
});

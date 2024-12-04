document.addEventListener('DOMContentLoaded', () => {
    // Header
    const headerWrap = document.querySelector('.header');
    const header = document.querySelector('.header-contents');
    const mHeader = document.querySelector('.header-contents__Mobile');
    const topBtn = document.querySelector('.topbutton');
    const searchIcon = document.querySelector('#searchButton');
    const searchBox = document.querySelector('.header-searchbox');

    // Recent search
    const searchInputBox = document.getElementById("searchInputBox");
    const inputField = document.querySelector(".searchbox-inputarea input[type='text']");
    const searchSubmitBtn = document.querySelector(".searchbox-btn__submit");
    const clearButton = document.querySelector(".btn-input__clear");
    const recentBoxList = document.getElementById("searchRecent-BoxList");
    const deleteAllBtn = document.querySelector(".delete-all");
    const searchForm = document.querySelector(".searchbox-wrap");

    // 최근 검색어 최대 갯수
    const maxRecentItems = 5;

    // 최근 검색어가 없으면 메시지 표시하는 함수
    const displayEmptyMessage = () => {
        if (recentBoxList.children.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "최근 검색어가 없습니다.";
            emptyMessage.className = "empty-message";
            recentBoxList.appendChild(emptyMessage);
            deleteAllBtn.style.display = "none";
        }
    };

    // 초기 상태 확인 (함수가 정의된 후 호출)
    displayEmptyMessage();

    // Header scroll effect
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

    // Search icon toggle
    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('boxview');
    });

    // Scroll to top button
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
clearButton.style.display = "none";
    // Clear button functionality
    clearButton.addEventListener("click", (e) => {
        e.preventDefault();
        inputField.value = "";
        clearButton.style.display = "none";
    });

    // Handle input value for clear button visibility
    inputField.addEventListener("keyup", function () {
        clearButton.style.display = this.value.trim() !== "" ? "block" : "none";
    });

    // Submit form handling (including Enter key)
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const searchValue = inputField.value.trim();

        if (searchValue === "") return; // Ignore empty input

        addSearchItem(searchValue);

        inputField.value = "";
        clearButton.style.display = "none";
    });

    // Add search item to recent searches
    const addSearchItem = (searchValue) => {
        removeEmptyMessage();

        // Check for duplicate
        const existingItems = Array.from(recentBoxList.children).map(
            (item) => item.querySelector("a")?.textContent
        );
        if (existingItems.includes(searchValue)) return;

        // Create new list item
        const newListItem = document.createElement("li");
        newListItem.innerHTML = `
            <a href="#">${searchValue}</a>
            <button class="btn-remove__searchrecent"></button>
        `;
        recentBoxList.prepend(newListItem);

        // Keep max 5 items
        if (recentBoxList.children.length > maxRecentItems) {
            recentBoxList.removeChild(recentBoxList.lastChild);
        }
    };

    // Remove empty message if there's any search history
    const removeEmptyMessage = () => {
        const emptyMessage = recentBoxList.querySelector(".empty-message");
        if (emptyMessage) {
            recentBoxList.removeChild(emptyMessage);
            deleteAllBtn.style.display = "block";
        }
    };

    // Handle removing individual recent searches
    recentBoxList.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-remove__searchrecent")) {
            const itemToRemove = e.target.closest("li");
            recentBoxList.removeChild(itemToRemove);
            if (recentBoxList.children.length === 0) {
                displayEmptyMessage();
            }
        }
    });

    // Handle clearing all recent searches
    deleteAllBtn.addEventListener("click", (e) => {
        e.preventDefault();
        recentBoxList.innerHTML = "";
        displayEmptyMessage();
    });

    // Mobile footer accordion functionality
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

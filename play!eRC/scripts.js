// jQuery
jQuery(document).ready(function(){
    //alert($('.item_table tr:nth-of-type(2) td>p').text());  
    
    /* 메인메뉴에 포인터 올리면 서브 바꾸기 */
    $('nav>.mainMenu>li').mouseover(function(){
        $(this).children('.subMenu').show();
        $(this).siblings().children('.subMenu').hide();
    });
    
    /* 상세페이지 이미지 버튼에 포인터 올리면 이미지 바꾸기 */
    $(".imgLists>li").mouseover(function(){
        let toChange = "./images/abisma_hurricane" + ($(this).index() + 1) + ".jpg"
        $(".itemImg>img").attr("src", toChange);
    });

    /* 상세페이지의 옵션보기에서 ^ 누르면 옵션 열기 */
    $('section .itemInfo .item_table .showOption').click(function(){
        let isRotated = $(this).attr("class");
        if(isRotated.indexOf("rotate180") >= 0) {
            $(this).removeClass("rotate180");
            $(this).siblings().slideUp();
        } else {
            $(this).addClass("rotate180");
            $(this).siblings().slideDown();
        }

    });

    /* 상세페이지 수량 변경 */
    $(".counting>li").click(function(){
 
        let clicked = $(this).index();
        let currentCount = Number($(this).siblings("li:nth-of-type(2)").text());
        let countOption = $(this).siblings("span").text();
    
        if (countOption == "pOptions") {
            if (clicked > 0) {
                currentCount += 1;
              } else if (currentCount > 0) {
                  currentCount -= 1;
              }
        } else {
            if (clicked > 0) {
                currentCount += 1;
              } else if (currentCount > 1) {
                  currentCount -= 1;
              }
        }
        

        $(this).siblings("li:nth-of-type(2)").text(currentCount);
    });

    /* 상세페이지 상세정보 탭 버튼 누르면 내용 바꾸기 */
    $('section .infoTags>li').click(function(){
        //alert($(this).index());
        itemContentNo = $(this).index() + 1;
        $('section .infoContent>li').hide();
        $('section .infoContent>li:nth-of-type('+ itemContentNo +')').fadeIn()
    });
    
}); 

/* 헤더 검색 */
function goSearch() {
    let searchValue = toSearch.search.value;
    if (searchValue=="") {
        alert("검색할 내용을 입력해주세요!");
        toSearch.search.focus();
    } else {
        alert("검색 기능 구현 중입니다.");
    }
    
}

/* 푸터 구독 */
function goSubscribe() {
    let emailValue = toSubscribe.subscribe.value;
    if (emailValue=="") {
        alert("이메일 주소를 입력해주세요!");
        toSubscribe.subscribe.focus();
    } else {
        alert("구독 기능 구현 중입니다. 이메일 주소를 저장하지 않았으니 안심하세요");
    }

}

/* 상품하나 골랐을 때 하나만 있으면 표시 */
function weOnlyHaveThis() {
    alert("죄송합니다. 지금은 이것만 있습니다.");
    location.href = "./item_detail.html";
}
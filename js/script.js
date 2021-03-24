
var num = 1;
var count = 1;

var g = {
    1: {
        "question" : "성별은 무엇인가요?",
        "case" : "MF",
        "M" : "남자",
        "F" : "여자"
    }
}
var q = {
    // EI
    1: {
        "number" : "문제 1",
        "type" : "EI",
        "A" : "처음보는 아이들과도 쉽게 이야기하거나 친해지는 편이다",
        "B" : "친한 사람이나 친구가 없는 모임에 가면 매우 불편하다"
    },
    2: {
        "number" : "문제 2",
        "type" : "EI",
        "A" : "모르는 사람들이 많이 모여있는 곳에서도 비교적 활발하게 행동하는 편이다.",
        "B" : "친구를 쉽게 사귀는 편이 아니며 친한 몇 명의 친구들과 아주 친하게 지낸다."
    },

    3: {
        "number" : "문제 3",
        "type" : "EI",
        "title" : "",
        "A" : "여기 저기 친구나 아는 사람이 많다 (학원친구, 교회친구, 학교 친구등 )",
        "B" : "평소에 침착하고 조용하다는 말을 자주 듣는다."
    },

    4: {
        "number" : "문제 4",
        "type" : "EI",
        "A" : "모임에서 다른 사람보다 말을 많이 하는 편이며 적극적으로 행동한다",
        "B" : "혼자 놀거나 조용히 책을 읽는 모습이 자주 있다."
    },
    5: {
        "number" : "문제 5",
        "type" : "EI",
        "A" : "슬프거나 기쁜 일이 생기면 즉시 부모님에게 이야기하는 편이다",
        "B" : "먼저 여러 번 생각해 다음에 행동하는 편이다. "
    },
    6: {
        "number" : "문제 6",
        "type" : "EI",
        "A" : "활발하고 적극적이라는 말을 많이 듣는 편이다. ",
        "B" : "부끄러움을 쉽게 타는 편이다."
    },

    7: {
        "number" : "문제 7",
        "type" : "EI",
        "A" : "시간이 걸리는 일, 놀이는 싫증을 빨리 내고 새로운 놀이, 활동을 원한다.",
        "B" : "자신의 의견이나 감정을 표현하는데 재빠르지 않은 편이다."
    },
    8: {
        "number" : "문제 8",
        "type" : "EI",
        "A" : "혼자 조용히 있거나 책을 읽는 것보다 사람들과 어울리는 게 좋다",
        "B" : "누가 물어보았을 때에야 대답하는 편이다."
    },
    9: {
        "number" : "문제 9",
        "type" : "EI",
        "A" : "새로운 유행이 시작되면 다른 친구들보다 먼저 시도해보는 편이다.",
        "B" : "낯선 곳에 혼자 심부름 가는 건 좀 불편하다."
    },

    // JP
    10: {
        "number" : "문제 10",
        "type" : "SN",
        "A" : "‘이불처럼 폭신한 구름’이란 꾸밈어보다 ‘흰구름’처럼 단순한 말이 더 좋다 ",
        "B" : "상상 속의 이야기를 잘 만들어 내는 편이다"
    },
    11: {
        "number" : "문제 11",
        "type" : "SN",
        "A" : "주변 사람들의 얼굴, 키나 다른 특징들을 잘 기억한다",
        "B" : "종종 물건을 잃어버리거나 어디에 두었는지 기억을 못할 때가 있다."
    },
    12: {
        "number" : "문제 12",
        "type" : "SN",
        "A" : "꾸준하고 참을성 있다는 말을 자주 듣는 편이다.",
        "B" : "독특하고 창의력, 상상력이 풍부하다는 말을 듣는 편이다."
    },

    13: {
        "number" : "문제 13",
        "type" : "SN",
        "A" : "공부할 때 세세하고 자세한 내용을 잘 암기하는 편이다.",
        "B" : "다른 아이들이 생각하지도 않은 엉뚱한 행동이나 상상을 할 때가 종종 있다"
    },
    14: {
        "number" : "문제 14",
        "type" : "SN",
        "A" : "손으로 직접 만지거나 하나하나 조작하는 활동을 좋아한다",
        "B" : "질문을 많이 하는 편이다."
    },
    15: {
        "number" : "문제 15",
        "type" : "SN",
        "A" : "꼼꼼하다는 말을 자주 듣는 편이다",
        "B" : "가끔 내 상상 속에서만 있는 친구를 만들기도 한다."
    },
    16: {
        "number" : "문제 16",
        "type" : "SN",
        "A" : "새로운 일이나 활동보다는 늘상 하는 일이 편안하다 ",
        "B" : "신기한 것에 호기심이 많다."
    },
    17: {
        "number" : "문제 17",
        "type" : "SN",
        "A" : "‘그게 정말이야?’라는 식의 질문을 많이 한다.",
        "B" : "장난감을 분해하고 살펴보는 것을 좋아한다."
    },
    18: {
        "number" : "문제 18",
        "type" : "SN",
        "A" : "새로운 방법을 써보기보다는 친구들이 하는 대로 따라서 하는게 더 편하다",
        "B" : "‘하고 싶다, 되고 싶다’ 꿈이 여러 가지로 많다."
    },

    // TF
    19: {
        "number" : "문제 19",
        "type" : "TF",
        "A" : "'왜'라는 질문을 자주 하는 편이다.",
        "B" : "부모님이나 선생님의 말을 잘 듣는 편이다."
    },
    20: {
        "number" : "문제 20",
        "type" : "TF",
        "A" : "궁금한 게 있으면 꼬치꼬치 따져서 궁금증을 풀고 싶어한다.",
        "B" : "정이 많고 순하다는 말을 자주 듣는다."
    },
    21: {
        "number" : "문제 21",
        "type" : "TF",
        "A" : "참을성이 있다는 말을 자주 듣는다.",
        "B" : "주위에 불쌍한 사람이나 친구가 있으면 마음이 아프고 도와주고 싶다"
    },
    22: {
        "number" : "문제 22",
        "type" : "TF",
        "A" : "야단을 맞거나 벌을 받아도 눈물을 잘 보이지 않는 편이다",
        "B" : "야단을 맞거나 벌을 받으면 눈물부터 나온다"
    },
    23: {
        "number" : "문제 23",
        "type" : "TF",
        "A" : "한 번 마음 먹은 일은 꾸준히 밀어나가 꼭 이뤄내는 편이다",
        "B" : "다른 친구들이나 어른들이 내 행동을 어떻게 생각할지 신경이 쓰인다."
    },
    24: {
        "number" : "문제 24",
        "type" : "TF",
        "A" : "주변 어른들이 귀엽다고 쓰다듬어 주면 어색하다",
        "B" : "매를 맞으면 쉽게 잘못했다고 하는 편이다."
    },
    25: {
        "number" : "문제 25",
        "type" : "TF",
        "A" : "성적이 올랐거나 잘했을 때 직접적인 칭찬을 받는 게 좋다",
        "B" : "친구들 사이에서 성격이 부드럽다 싹싹하다 순하다고 들 한다"
    },
    26: {
        "number" : "문제 26",
        "type" : "TF",
        "A" : "부모님, 친구들에게 논리적이고 구체적인 설명으로 설득하는 편이다",
        "B" : "음식, 장난감, 옷을 선택할 때 쉽게 결정을 내리지 못한다."
    },
    27: {
        "number" : "문제 27",
        "type" : "TF",
        "A" : "끝까지 해내는 의지와 끈기가 강한 편이다.",
        "B" : "기뻐하고 슬픈 감정이 풍부하고 인정이 많다는 말을 듣는다."
    },
    28: {
        "number" : "문제 28",
        "type" : "JP",
        "A" : "대체로 공부나 할일을 미리 해놓고 노는 편이다",
        "B" : "계획보다는 어떤 일이 닥치면 그때그때 처리하는 편이다"
    },
    29: {
        "number" : "문제 29",
        "type" : "JP",
        "A" : "시험보기 전에 미리 여유있게 공부계획을 짜 놓고 실천한다",
        "B" : "숙제를 미루다가 마지막 순간에 해서 시간에 쫓길 때가 종종 있다."
    },
    30: {
        "number" : "문제 30",
        "type" : "JP",
        "A" : "미리 하는 게 편하고 마지막 순간에 쫓기면서 일하는 걸 싫어한다",
        "B" : "방이 어수선하게 지저분해도 크게 신경쓰이지 않고 관심대상에 바로 집중하는편이다"
    },
    31: {
        "number" : "문제 31",
        "type" : "JP",
        "A" : "계획에 따라 규칙적인 생활을 하는 편이다",
        "B" : "주변일에 호기심이 많고 새로운 일이 생겨도 잘 적응한다"
    },
    32: {
        "number" : "문제 32",
        "type" : "JP",
        "A" : "목표가 뚜렷하고 자신의 의견을 분명히 표현하는 편이다",
        "B" : "남의 지시에 따르기보다는 자신의 마음에 따라 행동하는 것이 좋다"
    },
    33: {
        "number" : "문제 33",
        "type" : "JP",
        "A" : "계획에 없는 일이 생기면 짜증이 나고 힘이 든다",
        "B" : "공책이나 책가방을 미리 챙기고 준비하는 편은 아니다"
    },
    34: {
        "number" : "문제 34",
        "type" : "JP",
        "A" : "학교나 친구들 모임에서 책임있는 일을 맡고 싶다",
        "B" : "자신의 생각, 의견을 크게 주장하지는 않는다"
    },
    35: {
        "number" : "문제 35",
        "type" : "JP",
        "A" : "예정에 없던 일로 계획을 바꾸게 되면 힘들어 한다",
        "B" : "신발이나 옷이 떨어져도 무관심한 편이다"
    },
    36: {
        "number" : "문제 36",
        "type" : "JP",
        "A" : "깨끗이 정돈된 상태를 좋아한다",
        "B" : "자기 것을 친구나 형제들한테 비교적 잘 나누어주는 편이다"
    },
}

var result = {
    "ISTJ" : {
        "stat" : "ISTJ - 바른생활 어린이",
        "img" : "images/istj/istj-m.png",
        "subtitle" : "ISTJ 특징",
        "explain" : "정리정돈을 잘해요." + "<br />" + "계획적이에요.",
        "dexplain" : "융통성이 부족해요." + "<br />" + "자발성이 부족해요."
    },
    "ISFJ" : {
        "stat" : "ISFJ - 예의바른 어린이",
        "img" : "images/isfj/isfj-m.png",
        "subtitle" : "ISFJ 특징",
        "explain" : "봉사적이며 착하다" + "<br />" + "신뢰감이 간다",
        "dexplain" : "행동력이 부족하다" + "<br />" + "변화를 싫어한다"
    },
    "INFJ" : {
        "stat" : "INFJ - 우정가득 어린이",
        "img" : "images/infj/infj-m.png",
        "subtitle" : "INFJ 특징",
        "explain" : "조용하고 침착하고 책임감이 강하다" + "<br />" + "성숙한 사고력을 지니고 있다",
        "dexplain" : "먼저 나서기를 싫어한다" + "<br />" + "잔걱정이 지나치게 많다"

    },
    "INTJ" : {
        "stat" : "INTJ - 애늙은이 어린이",
        "img" : "images/intj/intj-m.png",
        "explain" : "승부욕이 강하다" + "<br />" + "독립적, 독창적, 효율적이다",
        "dexplain" : "고집이 세다" + "<br />" + "상처를 잘 받는다"
    },

    "ISTP" : {
        "stat" : "ISTP - 사교적인 어린이",
        "img" : "images/istp/istp-m.png",
        "subtitle" : "ISTP 특징",
        "explain" : "여러가지에 관심이 많다" + "<br />" + "손재주가 좋다",
        "dexplain" : "끈기가 부족하다" + "<br />" + "성급한 성격이다"
    },
    "ISFP" : {
        "stat" : "ISFP - 여유로운 어린이",
        "img" : "images/isfp/isfp-m.png",
        "subtitle" : "ISFP 특징",
        "explain" : "꾸미기를 좋아한다" + "<br />" + "자신을 드러내기 좋아한다",
        "dexplain" : "끈기가 부족하다" + "<br />" + "거부를 못하는 편이다"
    },
    "INFP" : {
        "stat" : "INFP - 인정많은 어린이",
        "img" : "images/infp/infp-m.png",
        "subtitle" : "INFP 특징",
        "explain" : "사려가 깊다" + "<br />" + "온화하고 부드럽다",
        "dexplain" : "꾸준하지 못하다" + "<br />" + "적응하는데 시간이 오래걸린다"
    },
    "INTP" : {
        "stat" : "INTP - 척척박사 어린이",
        "img" : "images/intp/intp-m.png",
        "subtitle" : "INTP 특징",
        "explain" : "호기심이 많다" + "<br />" + "솔직하다",
        "dexplain" : "고집이 세다" + "<br />" + "정리정돈을 못한다"
    },

    "ESTP" : {
        "stat" : "ESTP - 참견쟁이 어린이",
        "img" : "images/product/cajun.png",
        "subtitle" : "ESTP 특징",
        "explain" : "♪ 소스 뿌리기전에 한 입 먹고!" + "<br />" + "♪ 소스 뿌리고 비벼서 한 입 더!"
    },
    "ESFP" : {
        "stat" : "세상 맛있는",
        "mbti" : "'스테이크 반찬'",
        "img" : "images/product/stake.png",
        "subtitle" : "ESFP 특징",
        "explain" : "♪ 맛있는 음식이 최고야!" + "<br />" + "♪ 한 입 먹어볼사람?"
    },
    "ENFP" : {
        "stat" : "신기한 간식거리",
        "mbti": "'인절미 아아스'",
        "img" : "images/product/icecream.png",
        "subtitle" : "ENFP 특징",
        "explain" : "♪ 남들 먹는거는 너무 시시해" + "<br />" + "♪ 처음보는거로 먹어볼까?"
    },
    "ENTP" : {
        "stat" : "SNS에서 핫한",
        "mbti": "'초코 프레첼'",
        "img" : "images/product/prechel.png",
        "subtitle" : "ENTP 특징",
        "explain" : "♪ 요즘 이게 그렇게 유명하대!" + "<br />" + "♪ 이거 꽤 맛있는데? 같이 먹을래?"
    },

    "ESTJ" : {
        "stat" : "단짠단짠의 유명인사",
        "mbti": "'소떡소떡'",
        "img" : "images/product/sodduck.png",
        "subtitle" : "ESTJ 특징",
        "explain" : "♪ 단짠단짠이 제일 좋아!" + "<br />" + "♪ 두개 사서 한입씩 번갈아 먹어!"
    },
    "ESFJ" : {
        "stat" : "하나 집었는데.. 없네?",
        "mbti" : "'콜팝'",
        "img" : "images/product/colpop.png",
        "subtitle" : "ESFJ 특징",
        "explain" : "♪ 진짜 맛있겠다! 같이 먹자!" + "<br />" + "♪ 어..? 어디갔지"
    },
    "ENFJ" : {
        "stat" : "튀김의 왕좌",
        "mbti": "'돈까스'",
        "img" : "images/product/tonkachu.png",
        "subtitle" : "ENFJ 특징",
        "explain" : "♪ 난 돈까스 고를건데 너는??" + "<br />" + "♪ 언제 먹어도 너무 맛있어.. 안그래?"
    },
    "ENTJ" : {
        "stat" : "길고 달고 맛있는",
        "mbti": "'츄러스'",
        "img" : "images/product/churus.png",
        "subtitle" : "ENTJ 특징",
        "explain" : "♪ 난 츄러스가 제일 좋아!" + "<br />" + "♪ 다른거 한입 나눠줄 사람?"
    },
    
}

function start() {
    $('.start').hide();
    $('.question').show();
    next();
}


$('#A').click(function(){ 
   var type = $("#type").val();
   var preValue = $("#" + type).val();

   $("#" + type).val(parseInt(preValue)+1);
   next();
});

$("#B").click(function(){
    next();
});

$("#M").click(function() {
    var genderType = $("#gender").val();
    var genderValue = $("#" + gendertype).val();

    $("#" + genderType).val(parseInt(genderValue)+1);
    next();
});

$("#F").click(function() {
    next();
})



function next() {

    if(num == 37) {
        $(".question").hide();
        // $(".gender").show();

        // var gender = "";
        // ($("#gender").val () < 1 ? gender += "M" : gender += "F");

        $(".result").show();

        // mbti 타입
        var mbti = "";
        ($("#EI").val() < 9 ? mbti += "I" : mbti += "E");
        ($("#SN").val() < 9 ? mbti += "N" : mbti += "S");
        ($("#TF").val() < 9 ? mbti += "F" : mbti += "T");
        ($("#JP").val() < 9 ? mbti += "P" : mbti += "J");


        // 결과
        $("#stat").html(result[mbti]["stat"]);
        // $("#mbti").html(result[mbti]["mbti"]);
        $("#img").attr("src",result[mbti]["img"]);
        $("#subtitle").html(result[mbti]["subtitle"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#d-explain").html(result[mbti]["dexplain"]);
    }
    else {
        $(".progress-bar").attr('style', 'width:calc(100/36*'+num+'%)')
        $("#number").html(q[num]["number"]);
        // $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);

        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);


        $("#gender-title").html(g[count]["question"]);
        $("#gender").val(g[count]["case"])
        $("#M").html(g[count]["M"]);
        $("#F").html(g[count]["F"]);

        num++;
    }
}

function regame() {
    $('.result').hide();
    $('.start').show();

    num = 1;
}
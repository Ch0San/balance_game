// ========================
// 데이터: 밸런스 게임 질문들
// ========================
// 카테고리 기준 원본 데이터를 정리하고, 아래에서 하나의 배열로 펼쳐서 사용한다.
const QUESTION_SETS = {
    general: [
        { a: "평생 와이파이 무료", b: "평생 배달비 무료" },
        { a: "아침마다 1시간 일찍 일어나기", b: "밤마다 1시간 늦게 자기" },
        { a: "지금 1억 받기", b: "10년 후 10억 확정" },
        { a: "휴대폰 없이 1주일", b: "에어컨 없이 여름 1주일" },
        { a: "평생 치킨 금지", b: "평생 라면 금지" },
        { a: "읽으면 바로 외워지는 능력", b: "한 번 보면 완벽히 그리는 능력" },
        { a: "투명인간 1일 체험", b: "순간이동 1회권" },
        {
            a: "매일 초호화 식사 (살은 그대로 유지)",
            b: "월 1번 해외여행 어디든 무료",
        },
        { a: "모든 언어 완벽하게 말하기", b: "모든 악기 완벽하게 연주하기" },
        {
            a: "연락은 잘하는데 만날 시간은 없음",
            b: "연락은 안 되는데 만나면 항상 함께 있음",
        },
        {
            a: "항상 5분 일찍 도착하는 능력",
            b: "항상 5분 늦어도 아무도 뭐라 안 하는 능력",
        },
        { a: "지각 절대 안 하는 팀원", b: "퇴근 시간 딱 맞춰 끊는 팀원" },
        {
            a: "지금 바로 원하는 곳으로 이사 가능",
            b: "지금 집에서 월세/관리비/대출 0원",
        },
        { a: "상대방 마음을 다 알 수 있음", b: "내 마음을 절대 들키지 않음" },
        { a: "평생 광고 안 보기", b: "유튜브 프리미엄+넷플릭스+디즈니 전부 무료" },
        { a: "하루에 4시간만 자도 안 피곤", b: "아무리 먹어도 살 안 찜" },
        { a: "날씨 항상 내 맘대로", b: "교통 항상 막히지 않음" },
        {
            a: "3분 안에 어디든 이동 가능(쿨타임 24h)",
            b: "시간을 3분만 되돌릴 수 있음(하루 1번)",
        },
        {
            a: "지갑 절대 안 잃어버리는 능력",
            b: "휴대폰 절대 안 잃어버리는 능력",
        },
        { a: "카메라 화질 무조건 인생샷", b: "내 얼굴 무조건 인생얼굴" },
        { a: "단 하루 원하는 나이로 살기", b: "단 하루 원하는 직업 체험" },
        { a: "한 달간 비 오는 날 없음", b: "한 달간 주말이 항상 3일" },
        { a: "평생 세금 신고 자동 처리", b: "평생 병원 예약 대기 없음" },
        { a: "모든 책 무료로 빌리기", b: "모든 공연 50% 할인" },
        { a: "기억력 2배", b: "집중력 2배" },
        { a: "일주일간 스마트폰 무제한 데이터", b: "일주일간 택시 무제한 무료" },
        { a: "모든 회의 30분 안에 끝", b: "모든 이메일 답장 1분 내 도착" },
        { a: "평생 무료 커피", b: "평생 무료 영화" },
        { a: "각종 자격증 시험 자동 합격", b: "면접만 보면 무조건 합격" },
        { a: "한 달간 모든 식사 무료", b: "한 달간 모든 교통 무료" },
        { a: "줄 서기 없는 세상", b: "내 차례만 되면 바로 호출되는 고객센터" },
    ],
    couple: [
        { a: "데이트 비용 100% 내가 부담", b: "데이트 코스 100% 내가 계획" },
        { a: "연애 초반처럼 매일 연락", b: "1주일에 한 번 제대로 데이트" },
        {
            a: "애인이 좋아하는 취미를 같이 즐기기",
            b: "내가 좋아하는 취미에 애인을 끌어들이기",
        },
        { a: "서로 하루 한 번 손편지 쓰기", b: "서로 하루 한 번 영상편지 보내기" },
        { a: "기념일마다 깜짝 이벤트 준비", b: "기념일마다 솔직한 편지 쓰기" },
        { a: "한 달간 노폰 데이트", b: "한 달간 배달음식 금지 데이트" },
        { a: "서로의 핸드폰 비밀번호 공유", b: "서로의 가족과 단톡방 만들기" },
        { a: "애인이 준비한 도시락 먹기", b: "애인을 위해 내가 요리하기" },
        { a: "커플룩 맞추고 외출하기", b: "커플 폰 배경 통일하기" },
        { a: "주말마다 1박2일 근교 여행", b: "매일 저녁 1시간 영상통화" },
        { a: "연인과 취침시간 맞추기", b: "연인과 기상시간 맞추기" },
        { a: "애인 가족과 한 달간 동거", b: "애인 친구들과 한 달간 여행" },
        { a: "애인과 같은 취미 동호회 가입", b: "애인과 같은 스터디 모임 가입" },
        { a: "애인과 하루 동안 역할 바꾸기", b: "애인과 하루 동안 옷장 바꾸기" },
        { a: "매달 커플 사진관 예약", b: "매달 커플 여행 브이로그 제작" },
        { a: "애인과 비밀 프로젝트 준비", b: "애인과 창업 아이디어 구상" },
        { a: "서로 부모님께 하루 동안 효도 미션 수행", b: "서로 친구에게 하루 동안 칭찬 릴레이" },
        { a: "한 달간 데이트 비용 공동 통장", b: "한 달간 데이트 계획 공동 캘린더" },
    ],
    dating: [
        { a: "썸 타는 사람에게 먼저 고백", b: "썸 타는 사람 고백 기다리기" },
        { a: "첫 데이트는 놀이공원", b: "첫 데이트는 전시회" },
        { a: "썸에게 매일 굿모닝 굿나잇", b: "만날 때만 진득하게 연락" },
        { a: "첫 여행은 당일치기", b: "첫 여행은 1박2일" },
        { a: "취미 공유하며 친해지기", b: "서로 모르는 취미 새로 배우기" },
        { a: "썸에게 좋아하는 음식 직접 만들어주기", b: "좋아하는 맛집 예약 선물" },
        { a: "주변 친구들에게 썸 사실 공개", b: "정식 연애 시작 전까지 비밀" },
        { a: "데이트 장소는 내가 선택", b: "데이트 시간은 내가 조율" },
        { a: "첫 고백은 사람 많은 곳", b: "첫 고백은 두 사람만 있는 곳" },
        { a: "썸 상대와 하루 종일 대화", b: "썸 상대와 하루 종일 데이트" },
        { a: "썸 타는 사람과 커플템 맞추기", b: "썸 타는 사람과 사진 스튜디오 가기" },
        { a: "썸과 서로의 버킷리스트 공유", b: "썸과 서로의 흑역사 공유" },
        { a: "썸에게 직접 만든 선물 전달", b: "썸에게 깜짝 이벤트 준비" },
        { a: "썸과 서로의 친구 모임 참여", b: "썸과 서로의 가족 모임 체험" },
    ],
    coworkers: [
        { a: "팀 회식 무조건 참석", b: "팀 회식 기획 담당" },
        { a: "상사 앞에서 발표 맡기", b: "고객 앞에서 데모 맡기" },
        { a: "출근 시간 1시간 당겨서 혼자 일하기", b: "퇴근 시간 1시간 미뤄서 팀과 일하기" },
        { a: "업무 피드백을 매번 솔직하게 주기", b: "업무 피드백은 요청 있을 때만 주기" },
        { a: "사무실 자리 자유롭게 돌아다니기", b: "자리는 고정이지만 원하는 장비 사용" },
        {
            a: "프로젝트 리더 맡기",
            b: "프로젝트 실무 에이스 맡기",
        },
        { a: "점심은 매번 팀과 함께", b: "점심은 항상 혼자 but 칼퇴" },
        { a: "주 1회 발표 준비", b: "주 1회 팀원 상담 맡기" },
        { a: "사무실 반려식물 돌보기", b: "사무실 커피머신 담당" },
        { a: "주 1회 재택 but 회식 필수", b: "주 5일 출근 but 회식 선택" },
        { a: "모든 이메일 CC 넣기", b: "모든 회의록 내가 작성" },
        { a: "사내 동호회 운영", b: "사내 뉴스레터 발행" },
        { a: "팀원 생일마다 선물 담당", b: "팀원 생일마다 이벤트 담당" },
        { a: "모든 회의 시작 5분 아이스브레이킹 진행", b: "모든 회의 끝에 회고 진행" },
    ],
    friends: [
        { a: "친구들과 다같이 여행", b: "친한 친구 한 명과 해외여행" },
        { a: "친구 생일 파티 기획", b: "친구 생일 선물 명품" },
        { a: "친구 대신 소개팅 나가기", b: "친구에게 소개팅 주선" },
        { a: "친구와 1년간 매달 MT", b: "친구와 1년간 매달 봉사활동" },
        { a: "친구에게 비밀 하나 털어놓기", b: "친구 비밀 하나 들어주기" },
        { a: "친구와 하루 동안 SNS 끊기", b: "친구와 하루 동안 휴대폰 서로 바꾸기" },
        { a: "친구들과 공포게임", b: "친구들과 방탈출" },
        { a: "친구들과 즉흥 여행", b: "친구들과 철저 계획 여행" },
        { a: "친구들과 캠핑", b: "친구들과 홈파티" },
        { a: "친구와 하루 동안 서로 역할 바꾸기", b: "친구와 하루 동안 서로 옷 스타일 바꾸기" },
        { a: "친구들과 24시간 도전", b: "친구들과 24시간 무계획 여행" },
        { a: "친구와 서로의 버킷리스트 완수", b: "친구와 서로의 공포증 극복" },
        { a: "친구들과 밴드 결성", b: "친구들과 유튜브 채널 개설" },
    ],
    family: [
        { a: "부모님과 한 달간 매주 영화관", b: "부모님과 한 달간 매주 맛집" },
        { a: "가족 여행은 국내만 자유", b: "가족 여행은 해외만 가능" },
        { a: "명절 음식 준비 전담", b: "명절 설거지 전담" },
        { a: "가족 단톡 매일 안부 인사", b: "가족 단톡 한 달간 침묵" },
        { a: "가족과 매주 보드게임", b: "가족과 매주 야외활동" },
        { a: "부모님께 매달 손편지", b: "부모님께 매달 영상편지" },
        { a: "형제자매랑 하루 종일 쇼핑", b: "형제자매랑 하루 종일 운동" },
        { a: "가족끼리 휴대폰 없이 하루", b: "가족끼리 TV 없이 하루" },
        { a: "가족에게 경제상담 해주기", b: "가족에게 연애상담 해주기" },
        { a: "가족과 하루 동안 서로 역할 체험", b: "가족과 하루 동안 서로 취미 체험" },
        { a: "가족과 한 달간 아침 식사 함께", b: "가족과 한 달간 취침 전 대화" },
        { a: "가족끼리 1년간 생일 여행 전통 만들기", b: "가족끼리 1년간 기념품 모으기" },
        { a: "가족과 공동 취미 프로젝트", b: "가족과 공동 기부 프로젝트" },
    ],
};

const QUESTIONS = Object.entries(QUESTION_SETS).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
);

const CATEGORY_LABELS = {
    all: "전체",
    general: "일반",
    couple: "커플",
    dating: "썸",
    coworkers: "직장 동료",
    friends: "친구",
    family: "가족",
};

// ========================
// DOM 요소
// ========================
const optAEl = document.getElementById("optA");
const optBEl = document.getElementById("optB");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");
const progressInfo = document.getElementById("progressInfo");
const toastEl = document.getElementById("toast");
const categorySelect = document.getElementById("categorySelect");

// ========================
// 상태
// ========================
let currentIndex = -1;
let currentCategory = "all";
const usedByCategory = {}; // 카테고리별 이미 보여준 문제 index들

// ========================
// 초기화: 카테고리 옵션 구성
// ========================
function initCategoryOptions() {
    if (!categorySelect) return;

    const order = ["all", ...Object.keys(QUESTION_SETS)];
    categorySelect.innerHTML = order
        .map((key) => {
            const label = CATEGORY_LABELS[key] || key;
            return `<option value="${key}">${label}</option>`;
        })
        .join("");

    categorySelect.value = currentCategory;
}

// ========================
// 도우미: 카테고리 풀/사용 내역
// ========================
function getPool(category) {
    if (category === "all") {
        return QUESTIONS.map((_, idx) => idx);
    }

    const indices = [];
    for (let i = 0; i < QUESTIONS.length; i++) {
        if (QUESTIONS[i].category === category) {
            indices.push(i);
        }
    }
    return indices;
}

function getUsedArray(category) {
    if (!usedByCategory[category]) {
        usedByCategory[category] = [];
    }
    return usedByCategory[category];
}

// ========================
// 함수: 문제 뽑기
// ========================
function pickRandomQuestion() {
    const pool = getPool(currentCategory);
    if (pool.length === 0) {
        return;
    }

    const used = getUsedArray(currentCategory);
    const poolSet = new Set(pool);

    // 데이터 변화 대비: 풀에 없는 값은 제거
    for (let i = used.length - 1; i >= 0; i--) {
        if (!poolSet.has(used[i])) {
            used.splice(i, 1);
        }
    }

    // 모든 문제를 한 번씩 다 보여줬다면 초기화
    if (used.length === pool.length) {
        used.length = 0;
    }

    const usedSet = new Set(used);
    const available = pool.filter((idx) => !usedSet.has(idx));
    const randomPos = Math.floor(Math.random() * available.length);
    currentIndex = available[randomPos];
    used.push(currentIndex);

    renderQuestion();
    renderProgress();
}

// ========================
// 화면 업데이트
// ========================
function renderQuestion() {
    const q = QUESTIONS[currentIndex];
    optAEl.textContent = q.a;
    optBEl.textContent = q.b;
}

function renderProgress() {
    if (!progressInfo) return;
    const pool = getPool(currentCategory);
    const used = getUsedArray(currentCategory);
    progressInfo.textContent = used.length + " / " + pool.length;
}

// ========================
// 공유하기
// ========================
async function onShare() {
    if (currentIndex < 0) return;

    const q = QUESTIONS[currentIndex];
    const qCategoryLabel = CATEGORY_LABELS[q.category] || q.category;
    const text = `[${qCategoryLabel}] 밸런스 게임!\n\nA) ${q.a}\nVS\nB) ${q.b}\n\n너는 뭐 고를래?`;

    // 1) Web Share API 가능하면 (모바일 등)
    if (navigator.share) {
        try {
            await navigator.share({
                title: "밸런스 게임",
                text,
            });
            return;
        } catch (err) {
            // 사용자가 취소했거나 에러난 경우 -> 아래 clipboard fallback으로 그냥 진행
        }
    }

    // 2) Clipboard fallback
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        // 일부 브라우저는 https 환경 아니면 clipboard 안 줄 수도 있음
        // 그런 경우에는 alert로만 안내
        alert("복사할 내용을 직접 가져가 주세요:\n\n" + text);
    }
}

// 간단한 토스트 애니메이션
function showToast() {
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 1500);
}

// ========================
// 이벤트 연결
// ========================
nextBtn.addEventListener("click", pickRandomQuestion);
shareBtn.addEventListener("click", onShare);
if (categorySelect) {
    categorySelect.addEventListener("change", (event) => {
        currentCategory = event.target.value;
        currentIndex = -1;
        pickRandomQuestion();
    });
}

// ========================
// 초기 실행
// ========================
initCategoryOptions();
pickRandomQuestion();
